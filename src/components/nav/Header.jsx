import React from "react";
import { auth } from "../../configuration/firebase-config";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

import logo from "../../assets/busmug.png";

const Header = ({ navShown, setNavShown }) => {
  return (
    <header className="w-screen top-0 sticky py-2 px-7 flex justify-between items-center bg-white z-50">
      <Link to="/" className="text-2xl font-bold tracking-wider">
        <img src={logo} className="w-20 inline-block" />
        <p className="inline-block">Busmug</p>
      </Link>

      {/* user */}
      <div>
        <div className="py-1 px-3 bg-gray-200 rounded-full font-medium inline-block">
          {auth.currentUser ? (
            <div className="flex justify-between items-center">
              <img
                src={auth?.currentUser?.photoURL}
                className="w-8 rounded-full"
              />
              <p className="hidden md:inline-block md:ml-3">
                {auth?.currentUser?.displayName}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>

        <button
          onClick={() => setNavShown(!navShown)}
          className="text-3xl ml-4 inline-block md:hidden"
        >
          <BiMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
