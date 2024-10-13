import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResponsiveMenu({ open }) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div 
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:-100}}
        transition={{duration:0.3}}
        className="absolute top-20 left-0 w-full h-screen  z-20">
          <div className="bg-primary text-xl m-6 py-10 text-white font-bold rounded-3xl">
            <ul className="flex flex-col gap-10 items-center">
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Shop</li>
              <li>Contacts</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
