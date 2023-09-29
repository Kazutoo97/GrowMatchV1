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
    <section className="px-4 xl:max-w-6xl lg:max-w-4xl lg:px-0 max-w-sm mx-auto">
      <nav className="py-5">
        <div className="flex justify-between items-center relative">
          <MainLogo menu={menu} setMenu={setMenu} />
          <NavList menu={menu} />
          <NavMobile menu={menu} />
        </div>
      </nav>
    </section>
  );
};

export default Header;
