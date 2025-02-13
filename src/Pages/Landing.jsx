import React from "react";
import '../Styles/landing.css';

import Header from "./Landing/Header";
import Features from "./Landing/Features";
import Security from "./Landing/Security";
import Projects from "./Landing/Projects";
import FAQ from "./Landing/FAQ";

const Landing = () => {
  return (
    <>
      <Header />
      <Features />
      <Security />
      <Projects />
      <FAQ />
    </>
  );
};

export default Landing;
