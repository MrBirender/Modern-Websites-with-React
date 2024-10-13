import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="top-0 sticky z-50 border-b border-neutral-750/80 py-3 backdrop-blur-lg">
      <div className="container px-4 mx-auto relative text-sm ">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center flex-shrink-0">
            <img className="h-10 w-10" src={Logo} alt="logoImg" />
            <span className="text-xl tracking-tight">VirtulaR</span>
          </div>
          {/* large screens */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map(({ label, index, href }) => (
              <li key={index}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <a href="#" className="px-3 py-2 border rounded-md">
              Sign in
            </a>
            <a
              href="#"
              className="px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md"
            >
              Create an account
            </a>
          </div>
          {/* small screens */}
          <div className="lg:hidden flex ">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile drawer */}
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full py-12 px-8 flex flex-col justify-center items-center lg:hidden ">
          {/* nav items */}
          <ul>
            {navItems.map(({ label, index, href }) => (
              <li key={index} className="py-4">
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          {/* buttons */}

          <div className="flex space-x-6 ">
            <a href="#" className="px-3 py-2 border rounded-md">Sign in</a>
            <a href="#" className="px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800 border rounded-md">Create an account</a>
          </div>
        </div>
      )}
    </nav>
  );
}
