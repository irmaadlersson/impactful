import React from 'react';
import '../firebase';
import firebase from '../firebase';
import Style from './style';
import MarkedHeart from 'src/assets/icons/MarkedHeart.png';
import UnMarkedHeart from 'src/assets/icons/UnMarkedHeart.svg';

class Test extends React.Component {
  state = {
    investments: [],
    favorites: true
  };

  componentDidMount() {
    const currentUser = firebase.auth.currentUser;
    if (currentUser) {
      firebase.db
        .collection('UserFavorites')
        .where('currentUser', '==', currentUser.uid) // letar efter endast currentUser
        .get() /*där fav == true visa upp*/
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('ingen data matchad');
            return;
          }

          const investments = [];
          snapshot.forEach(doc => {
            const data = doc.data();
            investments.push(data);
            // console.log(`favo i data`, data.item.favorites);

            this.setState({ investments: investments });
          });
        })
        .catch(err => {
          console.log('error fick ingen data', err);
        });
    }
  }
  handleClick(id) {
    firebase.deleteFavorites(id);
  }

  render() {
    return (
      <Style>
        <div>
          {this.state.investments &&
            this.state.investments.map((item, index) => {
              return (
                <div key={index}>
                  <table className="table">
                    <tbody>
                      <tr
                      //   className={item.uid % 2 === 0 ? 'white-row' : 'gray-row'}
                      >
                        <td className="cell" style={{ color: '#5FBEC5' }}>
                          {item.item.name} {/*item.item visar */}
                        </td>
                        <td className="cell">{item.item.expReturn}%</td>
                        <td className="cell">{item.item.maturity} months</td>

                        <td className="cell">{item.item.owner}</td>
                        <td className="cell">
                          <img
                            className="favoritesImg"
                            src={MarkedHeart}
                            onClick={() => this.handleClick(item.item.id)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
        </div>
      </Style>
    );
  }
}

export default Test;
