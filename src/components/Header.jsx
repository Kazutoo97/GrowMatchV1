import React, { useState, useEffect } from "react";
import MainLogo from "./molecules/MainLogo";
import NavList from "./molecules/NavList";
import NavMobile from "./molecules/NavMobile";

const Header = () => {
  const [isNavbarFixed, setNavbarFixed] = useState(false);
  const [menu, setMenu] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-[99999] ${
        isNavbarFixed
          ? "bg-white bg-opacity-80 backdrop-blur-sm shadow-lg "
          : "bg-transparent"
      }`}
    >
      <section className="px-4 xl:max-w-6xl lg:max-w-4xl lg:px-0 mx-auto">
        <nav className="py-5">
          <div className="flex justify-between items-center relative">
            <MainLogo menu={menu} setMenu={setMenu} />
            <NavList menu={menu} />
            <NavMobile menu={menu} />
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;
