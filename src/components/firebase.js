import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config = {
  apiKey: 'AIzaSyBILM60wqgErf3H85RHm7wCBQWipffjnWQ',
  authDomain: 'impactfuldb-f7a2f.firebaseapp.com',
  databaseURL: 'https://impactfuldb-f7a2f.firebaseio.com',
  projectId: 'impactfuldb-f7a2f',
  storageBucket: 'impactfuldb-f7a2f.appspot.com',
  messagingSenderId: '954707632929',
  appId: '1:954707632929:web:fb537425f6c5839d6a5460',
  measurementId: 'G-BST1QYS1XD'
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
      email: email
    });
  }

  addQuote(quote) {
    if (!this.auth.currentUser) {
      return alert('Not authorized');
    }

    return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
      quote
    });
  }
  addEmail(email) {
    return this.db.collection(`emailNotify`).add({
      email
    });
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
  getCurrentUserEmail() {
    return this.auth.currentUser && this.auth.currentUser.email;
  }
  addFavorites(item) {
    //försöka ta emot ett projekt
    if (!this.auth.currentUser) {
      return alert('Not authorized');
    }
    //return this.db.doc(`UserFavorites/${this.auth.currentUser.uid}`).set({
    // return this.db.collection(`UserFavorites`).doc(`${this.auth.currentUser.uid}`).set({

    const currentUser = this.auth.currentUser.uid; //skickar med uid till currentuser under
    return (
      this.db
        .collection(`UserFavorites`)
        // .doc()
        // .set({
        .add({
          currentUser,
          item
        })
        .then(ref => {
          // console.log('Added document with ID: ', ref.id);
          return { currentUser: ref.id, item };
        })
    );
  }

  deleteFavorites(id) {
    //tar emot projects autogenererade id
    if (!this.auth.currentUser) {
      return alert('Not authorized');
    }

    var deleteItem = this.db.collection('UserFavorites').where('item.id', '==', id);
    deleteItem.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });
  }

  updateFavorites() {}

  async getCurrentUserQuote() {
    const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get();
    return quote.get('quote');
  }
  async GetCount() {
    this.db
      .collection('UserFavorites')
      .where('currentUser', '==', this.auth.currentUser.uid) // letar efter endast currentUser
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('ingen data matchad');
        }
        const count = snapshot.size;
        // console.log(`getcount från firebase`, count);

        return count;
      })
      .catch(err => {
        console.log('error fick ingen data', err);
      });
  }
}

export default new Firebase();
