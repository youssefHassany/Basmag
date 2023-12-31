import React from "react";
import { auth } from "../../configuration/firebase-config";
import { signOut } from "firebase/auth";
import NavList from "./NavList";

import { BiExit, BiHomeAlt, BiSolidDashboard } from "react-icons/bi";
import { LuListTodo } from "react-icons/lu";
import { PiCardsBold } from "react-icons/pi";
import { MdOutlineQuiz } from "react-icons/md";

import Swal from "sweetalert2";

import Cookies from "universal-cookie";
const myCookies = new Cookies();

const Nav = ({ setIsAuth, setNavShown, navShown }) => {
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
    <nav
      onClick={() => setNavShown(false)}
      className={`fixed md:relative top-0 w-3/4 md:w-1/6 h-screen z-40 p-4 shadow-xl flex flex-col justify-center bg-white ${
        navShown ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 duration-300`}
    >
      <ul>
        <NavList icon={<BiHomeAlt />} pageTitle={"Home"} pagePath={"/"} />

        <NavList
          icon={<BiSolidDashboard />}
          pageTitle={"Dashboard"}
          pagePath={"/dashboard"}
        />

        <NavList icon={<LuListTodo />} pageTitle={"Todo"} pagePath={"/todo"} />

        <NavList
          icon={<PiCardsBold />}
          pageTitle={"Flashcards"}
          pagePath={"/flashcards"}
        />

        {/* <NavList
          icon={<MdOutlineQuiz />}
          pageTitle={"Quiz"}
          pagePath={"/quiz"}
        /> */}

        <li className="my-3">
          <button
            className="py-1 px-3 w-full rounded font-medium hover:bg-gray-200 block cursor-pointer text-left"
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "Press Log Out to confirm!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log Out!",
              }).then((result) => {
                if (result.isConfirmed) {
                  logout();
                }
              });
            }}
          >
            <BiExit className="inline-block" /> <span>Signout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
