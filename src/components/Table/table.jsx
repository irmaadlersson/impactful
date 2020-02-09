import React from 'react';
import '../firebase';
import firebase from '../firebase';
import Style from './style';
import MarkedHeart from 'src/assets/icons/MarkedHeart.png';
import UnMarkedHeart from 'src/assets/icons/UnMarkedHeart.svg';
import ProjectCard from 'components/ProjectCard';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investments: null,
      userFavo: [],
      favorites: false,
      showPopup: false,
      doc: null,
      newfavorites: false,
      projectId: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    firebase.db
      .collection('Investments')
      .orderBy('id')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('ingen data matchad');
          return;
        }
        const investments = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          investments.push(data);
          this.setState({ investments: investments });
        });
      })
      .catch(err => {
        console.log('error fick ingen data', err);
      });

    firebase.db
      .collection('UserFavorites')
      .where('currentUser', '==', this.props.name) // letar efter endast currentUser
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('ingen data matchad');
          return;
        }
        const userFavo = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          userFavo.push(data);
          /* console.log(
            `USERFAVO FAVO:TRUE EL FALSE ITEM ID:`,
            doc.data().item.favorites,
            doc.data().item.id
          );*/

          this.setState({ doc: doc.data().item.id });
          //console.log(`CURRENT DOC STATE`, this.state.doc);
        });
        this.setState({ userFavo: userFavo });
      })
      .catch(err => {
        console.log('error fick ingen data', err);
      });
  }

  handleClick(item) {
    //onClick add item
    //console.log(this.state.userFavo);

    let _this = this;
    var test = function() {
      firebase
        .addFavorites(item)
        .then(function(itemAdded) {
          //  console.log(_this.state.userFavo);
          _this.setState(prevState => ({
            userFavo: [...prevState.userFavo, itemAdded]
          }));
        })
        .catch(function(error) {
          console.log(error.message);
        });
    };

    test();
  }
  alreadyClicked() {
    console.log(`already clicked heart`);
    alert('In favorites');
  }
  sendId(projectId) {
    return projectId;
  }

  render() {
    let userFavorites = [];

    this.state.userFavo &&
      this.state.userFavo.map((item, i) => {
        userFavorites.push(item.item.id, item.currentUser);
      });

    return (
      <Style>
        <div>
          <div>
            <table className="table">
              <tbody>
                {this.state.investments &&
                  this.state.investments.map(item => {
                    return (
                      <tr
                        key={`${item.name}`}
                        className={item.id % 2 === 0 ? 'gray-row' : 'white-row'}
                      >
                        <td
                          className="cell"
                          style={{ color: '#5FBEC5', cursor: 'pointer', paddingLeft: '2%' }}
                          onClick={() => this.setState({ showPopup: true, projectId: item.id })}
                        >
                          {item.name}
                        </td>
                        <td className="cell">{item.expReturn}%</td>
                        <td className="cell">{item.maturity} months</td>

                        <td className="cell">{item.owner}</td>

                        <td className="cell">
                          <img
                            className="favoritesImg"
                            onClick={
                              userFavorites.includes(item.id)
                                ? () => this.alreadyClicked()
                                : () => this.handleClick(item)
                            }
                            src={userFavorites.includes(item.id) ? MarkedHeart : UnMarkedHeart}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        {this.state.showPopup && (
          <ProjectCard
            projectId={this.state.projectId}
            closePop={() => {
              this.setState({ showPopup: false });
            }}
          />
        )}
      </Style>
    );
  }
}

export default Test;
