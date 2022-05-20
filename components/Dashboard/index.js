import Header from 'components/shared/Header';
import { useEffect, useState } from 'react';
import { useAuth } from 'utils/AuthContext';
import { useRouter } from 'next/router';
import Tours from 'components/Landing/components/Tours';
import Flights from 'components/Landing/components/Flights';
import getObj, { createNUpdateObj } from 'utils/fetchfb';

const Dashboard = () => {
  const router = useRouter();
  const { currentUser } = useAuth();
  const [savedFlights, setSavedFlight] = useState({});
  const [savedTours, setSavedTours] = useState({});
  const [dashFlights, setDashFlights] = useState([]);
  const [dashTours, setDashTours] = useState([]);

  const getSavedFlights = async () => {
    console.log('here', currentUser?.uid);
    if (currentUser?.uid) {
      try {
        const result = await getObj(`${currentUser?.uid}/flights`);
        setSavedFlight(result);
        let data = Object.values(result);
        data = data.map((e) => JSON.parse(e));
        setDashFlights(data);
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
        let data = Object.values(result);
        data = data.map((e) => JSON.parse(e));
        setDashTours(data);
      } catch {
        setSavedTours({});
      }
    }
  };

  const validateSaveStatus = (obj) => Object.values(savedFlights).includes(JSON.stringify(obj));
  const validateTourSaveStatus = (obj) => Object.values(savedTours).includes(JSON.stringify(obj));

  const handleSaveFlights = async (flightObj) => {
    try {
      if (validateSaveStatus(flightObj)) {
        const id = Object.entries(savedFlights).find(([id, value]) => value === JSON.stringify(flightObj))?.[0];
        await createNUpdateObj(`${currentUser?.uid}/flights/${id}`, null);
      }
    } finally {
      getSavedFlights();
    }
  };

  const handleSaveTours = async (tourObj) => {
    try {
      if (validateTourSaveStatus(tourObj)) {
        const id = Object.entries(savedTours).find(([id, value]) => value === JSON.stringify(tourObj))?.[0];
        await createNUpdateObj(`${currentUser?.uid}/tours/${id}`, null);
      }
    } finally {
      getSavedTours();
    }
  };

  useEffect(() => {
    if (!currentUser.uid) {
      router.push('/');
    } else {
      getSavedFlights();
      getSavedTours();
    }
  }, [currentUser]);

  return (
    <div className="landing-body">
      <div className="landing">
        <Header />
        <div className='saved-body-content'>
          <Flights flights={dashFlights} handleSaveFlights={handleSaveFlights} validateSaveStatus={validateSaveStatus} saved />
          <Tours tours={dashTours} handleSaveTours={handleSaveTours} validateSaveStatus={validateTourSaveStatus} saved />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
