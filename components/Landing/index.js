import ColoredIconBigButton from "components/widgets/CIconBigButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "utils/AuthContext";
import Header from "components/shared/Header";
import DateSelector from "components/widgets/DateSelector";
import BigInput from "components/shared/BigInput";
import ColoredIconBigButton from "components/widgets/CIconBigButton";
import { ReactComponent as Search } from 'icons/search.svg';

const Landing = () => {

  const [departingDate, setDepartingDate] = useState('');
  const [goingToDate, setGoingToDate] = useState('');
  const [departingLocation, setDepartingLocation] = useState('');
  const [goingToLocation, setGoingToLocation] = useState('');

  const handleSearch = () => {
    console.log(departingDate, goingToDate, departingLocation, goingToLocation);
  }
  return (
    <div className="landing-body">
      <div className= "landing">
      <Header reverse />
      <div className="fccs search">
        <h1>Plan your next travel experience</h1>
        <h2>Search for best flights and travel activites </h2>
        <div className="frbs search-bar">
            <BigInput type={'date'} placeholder={'Travel Date'} onChange={setDepartingDate}/>
            <BigInput type={'date'} placeholder={'Returning Date'} onChange={setGoingToDate}/>
            <BigInput placeholder={"From"} onChange={setDepartingLocation}/>
            <BigInput placeholder={"To"} onChange={setGoingToLocation}/>
            <ColoredIconBigButton title="search" onClick={() => handleSearch()}/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Landing;
