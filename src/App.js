import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Landing from "./Pages/Landing";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Czas trwania animacji
      easing: "ease-in-out", // Easing
      once: true, // Animacja raz
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col bg-neutral-950 min-h-screen text-white">
        <Routes>
          <Route index element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
