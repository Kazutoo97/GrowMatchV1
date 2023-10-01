import React from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Footer from "../components/Footer";
import PopularFrined from "../components/PopularFrined";
import BeginnerFriend from "../components/BeginnerFriend";
import PopularArticle from "../components/PopularArticle";

const Home = () => {
  return (
    <>
      <Hero />
      <Search />
      <PopularFrined />
      <BeginnerFriend />
      <PopularArticle />
      <Footer />
    </>
  );
};

export default Home;
