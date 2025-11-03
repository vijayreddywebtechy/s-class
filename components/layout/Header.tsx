"use client";

import React, { useState } from "react";
import TopHeader from "./HeaderComponents/Topheader";
import Navigation from "./HeaderComponents/Navigation";
import Filtermenu from "./HeaderComponents/Filtermenu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <TopHeader onMenuClick={handleMenuClick} />
      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        onMobileMenuClose={handleMobileMenuClose} 
      />
      <Filtermenu />
    </header>
  );
};

export default Header;
