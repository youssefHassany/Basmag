import React from "react";
import { auth } from "../../configuration/firebase-config";
import { signOut } from "firebase/auth";

import Cookies from "universal-cookie";
const myCookies = new Cookies();

const Nav = ({ setIsAuth }) => {
  const logout = async () => {
    try {
      await signOut(auth);
      myCookies.remove("auth-token");
      setIsAuth(false);
    } catch (error) {
      console.error(err);
    }
  };
  return (
    <nav>
      <ul>
        <li className="inline-block">
          <p className="py-1 px-3 inline-block mr-3 rounded-full border shadow">
            {auth.currentUser ? auth.currentUser.displayName : ""}
          </p>
          <a className="mr-5">Feed</a>
          <a className="mr-5">About</a>
          <a className="mr-5">Settings</a>
          <button onClick={logout}>Signout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
