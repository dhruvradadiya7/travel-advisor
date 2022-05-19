import ColoredIconBigButton from 'components/widgets/CIconBigButton';
import { useState, useEffect } from 'react';
import Header from 'components/shared/Header';
import BigInput, { BigInputDD } from 'components/shared/BigInput';
import AuthSidebar from 'components/shared/AuthSidebar';
import fetchAvalibaleFilghts from 'containers/SearchFlightsContainer';
import getObj, { createNUpdateObj, pushObj } from 'utils/fetchfb';
import Alert from 'components/widgets/Alert';
import dayjs from 'dayjs';
import { useAuth } from 'utils/AuthContext';
import Guidelines from './components/Guidelines';
import Tours from './components/Tours';
import Flights from './components/Flights';

const Landing = () => {
  const [departingDate, setDepartingDate] = useState('');
  const [goingToDate, setGoingToDate] = useState('');
  const [departingLocation, setDepartingLocation] = useState('');
  const [goingToLocation, setGoingToLocation] = useState('');
  const [airpotCodes, setAirportCode] = useState([]);
  const [searchedFlights, setSearchedFlights] = useState({});
  const [searchedState, setSearchedState] = useState(true);
  const [error, setError] = useState('');
  const [savedFlights, setSavedFlight] = useState({});
  const { currentUser } = useAuth();

  const handleSearch = async () => {
    // validations here
    if (!(departingDate && departingLocation && goingToLocation)) {
      setError('Please enter all required fields!!');
      return;
    }

    const today = dayjs(new Date()).format('YYYY-MM-DD');
    if (dayjs(today).isAfter(departingDate)) {
      setError('Please enter travel date as today or later!!');
      return;
    }

    if (goingToDate && dayjs(departingDate).isAfter(goingToDate)) {
      setError('Please enter later returning date than travel date!!');
      return;
    }

    if (goingToLocation === departingLocation) {
      setError('Please select To location different than From!!');
    }
    try {
      const flights = await fetchAvalibaleFilghts(departingDate, goingToDate, departingLocation, goingToLocation);
      setSearchedFlights(flights.data);
      setSearchedState(true);
    } catch (e) {
      if (e.response.data?.errors?.[0]) {
        setError(e.response.data?.errors[0]?.detail);
      }
    }
  };

  const getAirportCodes = async () => {
    try {
      const result = await getObj('/AirportCodes');
      setAirportCode(Object.values(result));
    } catch (e) {
      console.log(e);
    }
  };

  const getSavedFlights = async () => {
    if (currentUser?.uid) {
      try {
        const result = await getObj(`${currentUser?.uid}/flights`);
        setSavedFlight(result);
      } catch {
        setSavedFlight({});
      }
    }
  };

  const validateSaveStatus = (obj) => Object.values(savedFlights).includes(JSON.stringify(obj));

  useEffect(() => {
    getAirportCodes();
    getSavedFlights();
  }, []);

  const handleSaveFlights = async (flightObj) => {
    if (currentUser?.uid) {
      try {
        if (!validateSaveStatus(flightObj)) {
          const segments = flightObj?.itineraries[0]?.segments;
          const updateSegments = segments.map((e) => ({ ...e, carrierCode: searchedFlights?.dictionaries?.carriers[e.carrierCode] || e.carrierCode }));
          flightObj.itineraries[0].segments = updateSegments;
          await pushObj(`${currentUser?.uid}/flights`, JSON.stringify(flightObj));
        } else {
          const id = Object.entries(savedFlights).find(([id, value]) => value === JSON.stringify(flightObj))?.[0];
          await createNUpdateObj(`${currentUser?.uid}/flights/${id}`, null);
        }
      } finally {
        getSavedFlights();
      }
    } else {
      setError('Signin is required to save flights!');
    }
  };

  if (searchedState) {
    return (
      <div className="landing-body">
        <div className="landing">
          <Header />
          <div className="fccs search-2">
            <div className="frcc search-bar-2">
              <BigInput required type="date" placeholder="Travel Date" title="Travel Date" value={departingDate} onChange={setDepartingDate} />
              <BigInput type="date" placeholder="Returning Date" title="Returning Date" value={goingToDate} onChange={setGoingToDate} />
              <BigInputDD required options={airpotCodes} placeholder="From" title="From" value={departingLocation} onChange={setDepartingLocation} />
              <BigInputDD required options={airpotCodes} placeholder="To" title="To" value={goingToLocation} onChange={setGoingToLocation} />
              <ColoredIconBigButton title="search" onClick={() => handleSearch()} />
            </div>
          </div>
          <Tours />
          <Flights flights={searchedFlights?.data} carriers={searchedFlights?.dictionaries?.carriers} handleSaveFlights={handleSaveFlights} validateSaveStatus={validateSaveStatus} />
          <Guidelines />
        </div>
      </div>
    );
  }

  return (
    <div className="landing-body">
      <div className="landing">
        <Header reverse />
        <AuthSidebar heading="Plan your next travel experience" subHeading="Search for best flights and travel activites" />
        <div className="fccs search">
          <div className="fccc search-bar">
            <BigInput required type="date" placeholder="Travel Date" title="Travel Date" value={departingDate} onChange={setDepartingDate} />
            <BigInput type="date" placeholder="Returning Date" title="Returning Date" value={goingToDate} onChange={setGoingToDate} />
            <BigInputDD required options={airpotCodes} placeholder="From" title="From" value={departingLocation} onChange={setDepartingLocation} />
            <BigInputDD required options={airpotCodes} placeholder="To" title="To" value={goingToLocation} onChange={setGoingToLocation} />
            <ColoredIconBigButton title="search" onClick={() => handleSearch()} />
          </div>
        </div>
      </div>
      {error && <Alert type="error" message={error} onClose={() => setError('')} />}
    </div>
  );
};

export default Landing;
