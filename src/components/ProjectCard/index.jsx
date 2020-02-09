import React, { useEffect, useState } from 'react';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Trine from 'src/assets/images/trine.jpg';
import Logo from 'src/assets/images/logo.png';
import Funded from 'src/assets/images/funded.png';
import Exit from 'src/assets/images/exit.png';
import BackBtn from 'src/assets/icons/blueBackBtn.svg';
import Map from 'src/assets/images/map.png';
import SDG1 from 'src/assets/images/SDG1.png';
import SDG3 from 'src/assets/images/SDG3.png';
import SDG4 from 'src/assets/images/SDG4.png';
import SDG10 from 'src/assets/images/SDG10.png';
import Image from 'components/UI/Image';
import Card from './card';

import Style from './style';

const index = ({ closePop, projectId }) => {
  const [shown, show] = useState(false);
  const [data, setData] = useState(null);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // console.log('inside fetch');
      const entry = await getDataByEntry('2CGQH7zMEgnWkCajXSRlYc');
      // console.log(entry);
      setData(entry);
    }
    fetchData();
  }, []);

  let projectList = [];

  if (!data) {
    return <Loader fullScreen />;
  } else {
    return (
      <Style>
        <div className="popUp-info">
          <div className="exit" onClick={closePop}>
            X
          </div>

          <Image className="backBtn" src={BackBtn} onClick={closePop} />
          {Card &&
            Card.filter(item => item.id === projectId).map((item, id) => {
              projectList.push(item, id);
              console.log('från json', projectList, projectId);

              return (
                <div key={item.id}>
                  <h1 className="h1">{item.name}</h1>
                  <p className="text">
                    {item.text}
                    {shown && <p>{item.textMore}</p>}
                  </p>
                  <p
                    onClick={() => show(!shown)}
                    className="text"
                    style={{ textDecoration: 'none', color: '#2B858B' }}
                  >
                    {!shown ? 'Read more' : 'Minimize'}
                  </p>

                  <div>
                    <div className="grayRow">
                      <p className="colum1">Extected return</p>
                      <p className="colum2">{item.expRet}%</p>
                    </div>
                    <div className="whiteRow">
                      <p className="colum1">Maturity</p>
                      <p className="colum2">{item.maturity} months</p>
                    </div>
                    <div className="grayRow">
                      <p className="colum1">Risk rating</p>
                      <p className="colum2" style={{ color: 'gray', fontStyle: 'italic' }}>
                        Coming soon
                      </p>
                    </div>
                    <div className="whiteRow">
                      <p className="colum1">Impact rating</p>
                      <p className="colum2" style={{ color: 'gray', fontStyle: 'italic' }}>
                        Coming soon
                      </p>
                    </div>
                    <div className="grayRow">
                      <p className="colum1">Owner</p>
                      <p className="colum2">{item.owner}</p>
                    </div>
                    <div className="whiteRow">
                      <p className="colum1">Location</p>
                      <p className="colum2">{item.location}</p>
                    </div>
                    <div className="grayRow">
                      <p className="colum1">Investment goal</p>
                      <p className="colum2">£{item.amount}</p>
                    </div>
                    <hr className="hrGray" />
                  </div>

                  <Image className="map" src={item.map} />
                  <hr className="hrGray" />
                  <Image className="logo" src={item.logo} />

                  <div className="invest">
                    <a className="textInvest" href={item.url}>
                      Go to {item.owner}
                    </a>
                  </div>
                  <p className="textEnding">
                    To be able to invest you need to go to {item.owner}’s website.
                  </p>
                </div>
              );
            })}
        </div>
      </Style>
    );
  }
};
export default index;
