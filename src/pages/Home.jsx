import React from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Footer from "../components/Footer";
import PopularFrined from "../components/PopularFrined";

const Home = () => {
  return (
    <>
      <Hero />
      <Search />
      <PopularFrined />
      <Footer />
    </>
  );
};

export default Home;
