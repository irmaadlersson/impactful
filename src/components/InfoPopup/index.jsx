import React, { useEffect, useState } from 'react';

import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Info from 'src/assets/icons/infoPopup.png';
import Exit from 'src/assets/images/exit.png';
import BackBtn from 'src/assets/icons/backBtn.png';
import Image from 'components/UI/Image';

import Style from './style';

const index = ({ closePop }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      // console.log('inside fetch');
      const entry = await getDataByEntry('2CGQH7zMEgnWkCajXSRlYc');
      // console.log(entry);
      setData(entry);
    }
    fetchData();
  }, []);
  if (!data) {
    return <Loader fullScreen />;
  } else {
    return (
      <Style>
        <div className="popUp-info">
          <div className="infoDiv">
            <Image className="infoImg" src={Info} />
          </div>
          <Image className="exit" src={Exit} onClick={closePop} />
          <Image className="backBtn" src={BackBtn} onClick={closePop} />

          {/* 
          {data.fields.infoPopup &&
            data.fields.infoPopup.map((item, id, index) => {
              console.log(`popup`, item, id, index);
              return (
                <div key={`${id}`}>
                  <h1 className="info-h1">{item.fields.title}</h1>
                  <p className="info-text"> {item.fields.text}</p>
                </div>
              );
            })} */}

          <div>
            <h1 className="info-h1">Expected return</h1>
            <p className="info-text">
              A return, also known as a financial return, in its simplest terms, is the money made
              or lost on an investment over some period of time.{' '}
            </p>
          </div>
          <div>
            <h1 className="info-h1">Maturity</h1>
            <p className="info-text">
              The maturity represents the time at what which the investor receives the repayments.
            </p>
          </div>
          <div>
            <h1 className="info-h1">Owner</h1>
            <p className="info-text">
              The invest owners are the partners of Impactful. The partners are impact investment
              platforms.
            </p>
          </div>
          <div>
            <h1 className="info-h1">Location</h1>
            <p className="info-text">
              Thanks to Impactful’s collaboration with different partners, we can offer investment
              opportunities over the whole world, where it’s needed the most.{' '}
            </p>
          </div>
          <div>
            <h1 className="info-h1">Favorites</h1>
            <p className="info-text" style={{ marginBottom: '30px' }}>
              When you have marked an investment as a favorite, it will be added to your favorite
              list in your dashboard.{' '}
            </p>
          </div>
          <hr />
          <p className="info-text" style={{ fontStyle: 'italic', marginBottom: '45px' }}>
            There is always a risk to invest and you should never invest more than you afford to
            lose.{' '}
          </p>
        </div>
      </Style>
    );
  }
};

export default index;
