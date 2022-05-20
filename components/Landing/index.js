import ColoredIconBigButton from 'components/widgets/CIconBigButton';
import { useState, useEffect } from 'react';
import Header from 'components/shared/Header';
import BigInput, { BigInputDD } from 'components/shared/BigInput';
import AuthSidebar from 'components/shared/AuthSidebar';
import fetchAvalibaleFilghts, { fetchAvalibaleTours, fetchGuideLines } from 'containers/SearchFlightsContainer';
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
  const [searchedTours, setSearchedTours] = useState([]);
  const [searchedState, setSearchedState] = useState(false);
  const [error, setError] = useState('');
  const [savedFlights, setSavedFlight] = useState({});
  const [savedTours, setSavedTours] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchedGuideLines, setSearchedGuideLines] = useState(null);
  const { currentUser } = useAuth();

  const handleSearch = async () => {
    if (loading) {
      return null;
    } try {
      setLoading(true);
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
      const countryCode = airpotCodes.find(e => e.code === goingToLocation)?.countryCode || 'CN';
      const flights = await fetchAvalibaleFilghts(departingDate, goingToDate, departingLocation, goingToLocation);
      const tours = await fetchAvalibaleTours(goingToLocation);
      const guideLines = await fetchGuideLines(countryCode);
      setSearchedGuideLines(guideLines.data?.data);
      setSearchedFlights(flights.data);
      setSearchedTours(tours.data?.data);
      setSearchedState(true);
    } catch (e) {
      if (e.response?.data?.errors?.[0]) {
        setError(e.response.data?.errors[0]?.detail);
      }
    } finally {
      setLoading(false);
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

  const getSavedTours = async () => {
    if (currentUser?.uid) {
      try {
        const result = await getObj(`${currentUser?.uid}/tours`);
        setSavedTours(result);
      } catch {
        setSavedTours({});
      }
    }
  };

  const validateSaveStatus = (obj) => Object.values(savedFlights).includes(JSON.stringify(obj));
  const validateTourSaveStatus = (obj) => Object.values(savedTours).includes(JSON.stringify(obj));

  useEffect(() => {
    getAirportCodes();
    getSavedFlights();
    getSavedTours();
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

  const handleSaveTours = async (tourObj) => {
    if (currentUser?.uid) {
      try {
        if (!validateTourSaveStatus(tourObj)) {
          await pushObj(`${currentUser?.uid}/tours`, JSON.stringify(tourObj));
        } else {
          const id = Object.entries(savedTours).find(([id, value]) => value === JSON.stringify(tourObj))?.[0];
          await createNUpdateObj(`${currentUser?.uid}/tours/${id}`, null);
        }
      } finally {
        getSavedTours();
      }
    } else {
      setError('Signin is required to save tours!');
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
              <ColoredIconBigButton title={loading ? 'Searching....' : 'Search'} onClick={() => handleSearch()} />
            </div>
          </div>
          <Tours tours={searchedTours} handleSaveTours={handleSaveTours} validateSaveStatus={validateTourSaveStatus} />
          <Flights flights={searchedFlights?.data} carriers={searchedFlights?.dictionaries?.carriers} handleSaveFlights={handleSaveFlights} validateSaveStatus={validateSaveStatus} />
          <Guidelines data={searchedGuideLines} />
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
            <ColoredIconBigButton title={loading ? 'Searching....' : 'Search'} onClick={() => handleSearch()} />
          </div>
        </div>
      </div>
      {error && <Alert type="error" message={error} onClose={() => setError('')} />}
    </div>
  );
};

export default Landing;
