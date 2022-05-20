import Header from 'components/shared/Header';
import { useEffect, useState } from 'react';
import getObj from 'utils/fetchfb';
import ManageCard from './ManageCard';
import  getTravelRestrictionsByCountry from 'containers/GuidelinesContainer';

const Guidelines = () => {
  const [countryCodes, setCountryCode] = useState([]);
  const getAirportCodes = async () => {
    try {
      const result = await getObj('/CountryCode');
      setCountryCode(Object.values(result));
      // const datasam = await getTravelRestrictionsByCountry('US');
      //console.log(datasam.data.area.name);
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
        {countryCodes.map((countryCode, index) => (
          <ManageCard  key={index} countryCode={countryCode} />
        ))}
      </div>
    </div>
  );
};

export default Guidelines;
