import React from "react";
import Nav from "./Nav";

const Header = ({ setIsAuth }) => {
  return (
    <header className="fixed w-screen top-0 p-4 shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold">Basmag</h1>
      <Nav setIsAuth={setIsAuth} />
    </header>
  );
};

export default Header;
