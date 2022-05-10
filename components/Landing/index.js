import TransButton from "components/widgets/TransButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "utils/AuthContext";
import Header from "components/shared/Header";
import DateSelector from "components/widgets/DateSelector";
import BigInput from "components/shared/BigInput";

const Landing = () => {
  return (
    <div className="landing-body">
      <div className= "landing">
      <Header />
      <div className="fccs search">
        <h1>Plan your next travel experience</h1>
        <h3>Search for best flights and travel activites </h3>
        <div className="frbs search-bar">
            <BigInput type={'date'} placeholder={'departing from'}/>
            <BigInput type={'date'} placeholder={'going to'}/>
            <BigInput />
            <BigInput/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Landing;
