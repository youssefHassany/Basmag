import { useState } from "react";
import { auth } from "./configuration/firebase-config";
import Auth from "./components/authentication/Auth";
import Header from "./components/nav/Header";

import Cookies from "universal-cookie";
const myCookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(myCookies.get("auth-token"));

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  } else {
    return (
      <main>
        <Header setIsAuth={setIsAuth} />
      </main>
    );
  }
}

export default App;
