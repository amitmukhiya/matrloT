import React from "react";
import mainLogo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4">
        <Link to="/"><div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            className="fill-current h-8 w-8 mr-2"
            src={mainLogo}
            alt="logo"
          />
          <span className="font-semibold text-xl tracking-tight">
            {" "}
            Just for FUN
          </span>
        </div></Link>
      </nav>
    </div>
  );
}
