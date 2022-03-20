import "./home.css";

import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="Sales Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
};

export default Home;
