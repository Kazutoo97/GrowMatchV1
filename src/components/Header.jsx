import React, { useState, useEffect } from "react";
import MainLogo from "./molecules/MainLogo";
import NavList from "./molecules/NavList";
import Login from "./molecules/Login";

const Header = () => {
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${
        isNavbarFixed
          ? "bg-white bg-opacity-80 backdrop-blur-sm shadow-lg z-[99999]"
          : "bg-transparent"
      }`}
    >
      <section className="max-w-7xl mx-auto">
        <nav className="py-5">
          <div className="flex items-center">
            <MainLogo />
            <NavList />
            <Login />
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;
