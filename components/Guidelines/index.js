import Header from 'components/shared/Header';
import { useEffect, useState } from 'react';
import getObj from 'utils/fetchfb';
import ManageCard from './ManageCard';

const Guidelines = () => {
  const [airpotCodes, setAirportCode] = useState([]);
  const getAirportCodes = async () => {
    try {
      const result = await getObj('/AirportCodes');
      setAirportCode(Object.values(result));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAirportCodes();
  }, []);
  return (
    <div className="guidelines-body">
      <Header />
      <h1>Guidelines</h1>
      <div className="users">
        {airpotCodes.map((airpotCodes) => (
          <ManageCard airpotCodes={airpotCodes} />
        ))}
      </div>
    </div>
  );
};

export default Guidelines;
