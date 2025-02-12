import React from "react";
import '../Styles/landing.css';

import Header from "./Landing/Header";
import Features from "./Landing/Features";
import Security from "./Landing/Security";
import Projects from "./Landing/Projects";
import Hero from "./Landing/Hero";

const Landing = () => {
  return (
    <>
      <Header />
      <Features />
      <Security />
    </>
  );
};

export default Landing;
