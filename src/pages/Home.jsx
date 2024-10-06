import React from "react";
import Header from "../components/Header";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OutPolicy from "../components/OutPolicy";
import SubscribeBox from "../components/SubscribeBox";

const Home = () => {
  return (
    <div>
      <Header />
      <LatestCollection />
      <BestSeller />
      <OutPolicy />
      <SubscribeBox />
    </div>
  );
};

export default Home;
