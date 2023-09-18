import React from "react";
import { Link } from "react-router-dom";

const NavList = ({ icon, pageTitle, pagePath }) => {
  return (
    <li className="mb-5">
      <Link
        className="py-1 px-3 rounded font-medium hover:bg-gray-200 block cursor-pointer"
        to={pagePath}
      >
        <span className="inline-block">{icon}</span> <span>{pageTitle}</span>
      </Link>
    </li>
  );
};

export default NavList;
