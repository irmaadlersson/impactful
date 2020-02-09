import React, { createContext } from 'react';
import firebase from '../components/firebase';
import 'firebase/auth';
import { AuthContext } from 'Auth';
import app from 'firebase/app';

// import { toggleFavorite, getFavoritesStore, removeFavorites } from 'helpers/state/favorites.mjs';

const FavoritesContext = createContext({
  count: []
});

export class FavoritesProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      count: [],
      auth: app.auth()
    };
  }

  componentDidMount() {
    if (this.auth.currentUser.uid) {
      firebase.db
        .collection('UserFavorites')
        .where('currentUser', '==', firebase.auth.currentUser.uid) // letar efter endast currentUser
        .get() /*där fav == true visa upp*/
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('ingen data matchad');
          }
          const count = snapshot.size;
          if (count === 0) {
            this.setState({ count: '' });
          } else {
            this.setState({ count: count });
            // console.log(`sätts count i context`, this.state.count);
          }
          // console.log(`firebase count userfavorites i context`, this.state.count);
        })
        .catch(err => {
          console.log('error fick ingen data', err);
        });
    }
  }

  render() {
    return (
      <FavoritesContext.Provider value={this.state}>
        {this.props.children}
      </FavoritesContext.Provider>
    );
  }
}

export const FavoritesConsumer = FavoritesContext.Consumer;
