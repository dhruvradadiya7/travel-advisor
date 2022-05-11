/* eslint-disable react/button-has-type */
import Header from 'components/shared/Header';
import { useEffect, useState, useRef } from 'react';
import { ReactComponent as Add } from 'icons/add.svg';
import getObj, { createNUpdateObj } from 'utils/fetchfb';
import BigInput from 'components/shared/BigInput';
import Alert from 'components/widgets/Alert';


const Admin = () => {
  const [data, setData] = useState({});
  const [airportCard, setAirportCard] = useState({});
  const [visible, setVisible] = useState(false);
  const [aircode, setAircode] = useState('');
  const [airname, setAirname] = useState('');
  const [airCountry, setAirCountry] = useState('');
  const [error, setError] = useState('');

  const getData = async () => {
    const result = await getObj('/users');
    setData(result);
    // console.log(result);
  };
  const blockUser = (uid, userState) => {
    console.log(uid, !userState);
    createNUpdateObj('/users/' + uid + '/blocked', !userState);
    getData();
  };
  async function getCard() {
    try {
      airportCard.push([{aircode,airname, airCountry}])
      setAirportCard(airportCard);
      setVisible(!visible);
    } catch (e) {
     console.log('Something went wrong, please try again!');
    }
  } 
  // const getAirport = async () => {
  //   const air_result = await getObj('/airport');
  //   console.log(air_result, "airport");
  // };
  
  console.log(airportCard);
  useEffect(() => {
    getData();
    // getAirport();
  }, []);
  return (
    <div className="admin-body">
      <Header />
      <h1>Admin Dashboard</h1>
      <div className="airport-header">
        <div>
          <h1>Manage Airport</h1>
        </div>
        <div>
          <button className="new-btn" onClick={() => setVisible(!visible)}>
            <Add className="add-btn" />
            <h2 className="add-lbl">Add New</h2>
          </button>
        </div>
      </div>
      <div className="user-card">
      <div className="airport-container ">
            <div className="Airport Airport-code">
              <h2>Code</h2>
            </div>
            <div className=" Airport Airport-name">
              <h2>Airport Name</h2>
            </div>
            <div className="Airport country">
              <h2>Country</h2>
            </div>
            <div className="Airport Airport-action">
              <h2>Action</h2>
            </div>
          </div>
        {Object.entries(airportCard).map(([code,airport], index) => (
          <div className="airport-container " key={code}>
            <div className="Airport Airport-code">
              <p>{airport.aircode}</p>
            </div>
            <div className=" Airport Airport-name">
              <p>{airport.airname}</p>
            </div>
            <div className="Airport country">
              <p>{airport.airCountry}</p>
            </div>
            <div className="Airport Airport-action">
              <h2>Action</h2>
            </div>
          </div>
        ))}
      </div>
      {visible && (
        <div className="user-card">
          <div className="airport-container ">
            <div className="Airport Airport-code">
              <BigInput
                title="Code"
                type="text"
                placeholder="Code"
                required
                value={aircode}
                onChange={setAircode}
              />
            </div>
            <div className=" Airport Airport-name">
            <BigInput
                title="Airport"
                type="text"
                placeholder="Airport"
                required
                value={airname}
                onChange={setAirname}
              />
            </div>
            <div className="Airport country">
            <BigInput
                title="Country"
                type="text"
                placeholder="Country"
                required
                value={airCountry}
                onChange={setAirCountry}
              />
            </div>
            <div className="Airport Airport-action">
              <h2>Action</h2>
            </div>
              <button onClick={() => getCard()}>Save</button>
            </div>
          </div>
        
      )}
      
     
      {/* Manage User */}
      <div className="manage-user">
        <h1>Manage User</h1>
      </div>
      <div className="user-card">
        <div className="user-container ">
          <div className="user id">
            <h2>#</h2>
          </div>
          <div className="user name">
            <h2>Name</h2>
          </div>
          <div className="user email">
            <h2>Role</h2>
          </div>
          <div className="user action">
            <h2>Action</h2>
          </div>
        </div>

        {Object.entries(data).map(([id, user], index) => (
          <div className="user-container" key={id}>
            <div className="user id">
              <p>{index + 1}</p>
            </div>
            <div className="user name">
              <p>{user.name}</p>
            </div>
            <div className="user email">
              <p>{user.role}</p>
            </div>
            <div className="user action">
              <div className={` ${user.blocked ? 'notblocked' : 'blocked'}`} onClick={() => blockUser(id, user.blocked)}>
                {user.blocked ? <h4>Blocked</h4> : <h4>UnBlocked</h4>}
              </div>
            </div>
          </div>
        ))}
      </div>
      {error && (
        <Alert type="error" message={error} onClose={() => setError('')} />
      )}
    </div>
  );
};

export default Admin;