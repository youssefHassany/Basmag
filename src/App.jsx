import { useState, useEffect } from "react";
import { auth } from "./configuration/firebase-config";
import Auth from "./components/authentication/Auth";
import Header from "./components/nav/Header";
import Nav from "./components/nav/Nav";
import Content from "./Content";

import Cookies from "universal-cookie";
const myCookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(myCookies.get("auth-token"));
  const [navShown, setNavShown] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <main className="max-w-screen min-h-screen bg-gray-200 overflow-x-hidden">
      <Header navShown={navShown} setNavShown={setNavShown} />
      <div className="flex">
        <Nav
          setIsAuth={setIsAuth}
          setNavShown={setNavShown}
          navShown={navShown}
        />
        <Content setNavShown={setNavShown} />
      </div>
    </main>
  );
}

export default App;
