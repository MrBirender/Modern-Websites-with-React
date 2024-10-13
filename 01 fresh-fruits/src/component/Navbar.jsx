import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navBar = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Products", link: "#" },
    { id: 3, name: "About", link: "#" },
    { id: 4, name: "Shop", link: "#" },
    { id: 5, name: "Contacts", link: "#" },
  ];
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md:pt-10"
        >
          {/* logo section */}
          <div className="text-3xl flex items-center gap-2 font-bold">
            <p className="text-primary uppercase">Fruit</p>
            <p className="text-secondary uppercase">Store</p>
            <FaLeaf className="text-green-500" />
          </div>

          {/* menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 ">
              {navBar.map(({ id, name, link }) => (
                <li key={id} className="">
                  <a
                    href={link}
                    className="inline-block  py-1 px-3 hover:text-primary hover:shadow-[0px_3px_0px_-1px_#de2c4d] font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}

              {/* button section */}
              <button className="text-2xl hover:bg-primary hover:rounded-full hover:text-white p-2 ">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* mobile menu section */}
          <div className="md:hidden">
            <MdMenu onClick={() => setOpen(!open)} className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      {/* {responsive menu bar} */}
      <ResponsiveMenu open={open} />
    </>
  );
}
