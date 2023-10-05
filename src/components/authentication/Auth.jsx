import React from "react";
import { auth, googleProvider } from "../../configuration/firebase-config";
import { signInWithPopup } from "firebase/auth";
import logo from "../../assets/busmug.png";

import { FcGoogle } from "react-icons/fc";

import Cookies from "universal-cookie";
const myCookies = new Cookies();

const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      myCookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="w-96 h-96 p-3 rounded-2xl bg-gray-300 bg-opacity-50 shadow-lg flex flex-col items-center justify-evenly">
        <img src={logo} className="w-48" />
        <h1 className="text-2xl font-bold">Welcome To Busmug!</h1>
        {/* <h3 className="text-lg">Sign In To Join Us</h3> */}
        <button
          className="p-4 m-4 rounded-full shadow-xl bg-gray-200 hover:bg-opacity-30 duration-200 font-medium flex items-center gap-3"
          onClick={signInWithGoogle}
        >
          Sign In with Google <FcGoogle className="inline-block text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Auth;
