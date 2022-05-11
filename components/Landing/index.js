import ColoredIconBigButton from 'components/widgets/CIconBigButton';
import { useState } from 'react';
import Header from 'components/shared/Header';
import BigInput from 'components/shared/BigInput';
import AuthSidebar from 'components/shared/AuthSidebar';
import fetchAvalibaleFilghts from 'containers/SearchFlightsContainer';

const Landing = () => {
  const [departingDate, setDepartingDate] = useState('');
  const [goingToDate, setGoingToDate] = useState('');
  const [departingLocation, setDepartingLocation] = useState('');
  const [goingToLocation, setGoingToLocation] = useState('');

  const handleSearch = () => {
    console.log(departingDate, goingToDate, departingLocation, goingToLocation);
    fetchAvalibaleFilghts();
  };

  return (
    <div className="landing-body">
      <div className="landing">
        <Header reverse />
        <AuthSidebar heading="Plan your next travel experience" subHeading="Search for best flights and travel activites" />
        <div className="fccs search">
          <div className="fccc search-bar">
            <BigInput type="date" placeholder="Travel Date" title="Travel Date" onChange={setDepartingDate} />
            <BigInput type="date" placeholder="Returning Date" title="Returning Date" onChange={setGoingToDate} />
            <BigInput placeholder="From" title="From" onChange={setDepartingLocation} />
            <BigInput placeholder="To" title="To" onChange={setGoingToLocation} />
            <ColoredIconBigButton title="search" onClick={() => handleSearch()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
