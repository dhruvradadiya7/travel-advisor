/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useState } from 'react';

const ManageCard = (props) => {
  const airpots = props.airpotCodes;
  const [visible, setVisible] = useState(true);

  function ShowDetail() {
    setVisible(!visible);
  }
  return (
    <div className="card">
      <div className="container">
        <div className="cnt-code">
          <p>
            { airpots.country }
            ( { airpots.code } )
          </p>
        </div>
        <div onClick={() => ShowDetail()}>
          {visible === true
            ? <p className="show-hide"> show detail</p> : <p className="show-hide">hide detail</p>}
        </div>
      </div>
      {visible === true ? visible : !visible && (
        <div>
          <p className="detail-card">{airpots.name}</p>
        </div>
      )}
    </div>
  );
};

export default ManageCard;
