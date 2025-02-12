import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../Assets/logo.png";

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef?.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="flex justify-between items-center z-20">
      <Link className="relative hover:-rotate-12 hover:scale-105 transition-all duration-300" to="/">
        <img src={Logo} alt="" className="w-14" />
      </Link>
      <button
        onClick={() => setShowMenu(true)}
        className={width < 768 ? "flex" : "hidden"}
      >
        <MenuIcon fontSize="large" />
      </button>
      <div
        className={`!flex ${
          width < 768
            ? "absolute pointer-events-none top-0 left-0 right-0 bottom-0 hidden opacity-0"
            : "opacity-100"
        } ${
          width < 768 &&
          showMenu &&
          "opacity-100 bg-[rgba(0,0,0,0.9)] !z-50 !pointer-events-auto"
        } transition-all duration-300`}
      >
        <ul
          className={`${
            width < 768 &&
            "!flex flex-col absolute w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          } text-lg md:text-md font-medium hidden md:flex items-center gap-10`}
          ref={menuRef}
        >
          <li
            onClick={(e) => {
              setShowMenu(false);
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#features").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            <Link className="transition-all duration-300 hover:text-yellow-300">
              Features
            </Link>
          </li>
          <li
            onClick={(e) => {
              setShowMenu(false);
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#security").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            <Link className="transition-all duration-300 hover:text-yellow-300">
              Security & Trust
            </Link>
          </li>
          <li
            onClick={(e) => {
              setShowMenu(false);
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#projects").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            <Link className="transition-all duration-300 hover:text-yellow-300">
              Our Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
