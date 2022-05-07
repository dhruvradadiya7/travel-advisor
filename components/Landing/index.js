import TransButton from "components/widgets/TransButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "utils/AuthContext";
import Header from "components/shared/Header";

const Landing = () => {
  return (
    <div className="landing-body">
      <Header />
      <h1>Landing Page</h1>
    </div>
  );
};

export default Landing;
