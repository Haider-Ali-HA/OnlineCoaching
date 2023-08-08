import React from "react";
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import Card from "./Card";
import Analytics from "./Analytics";
import Premium from "./Premium";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <Analytics />
      <Premium />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
