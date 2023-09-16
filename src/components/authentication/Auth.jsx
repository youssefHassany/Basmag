import React from "react";
import { auth, googleProvider } from "../../configuration/firebase-config";
import { signInWithPopup } from "firebase/auth";

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
    <div>
      <button
        className="p-4 m-4 rounded-lg shadow-lg border-black border-2"
        onClick={signInWithGoogle}
      >
        SignIn with Google
      </button>
    </div>
  );
};

export default Auth;
