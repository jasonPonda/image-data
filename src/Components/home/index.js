import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
