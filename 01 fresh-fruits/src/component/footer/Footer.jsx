import React from "react";
import { FaLeaf } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container bg-primary/10 flex justify-between items-center py-6 md:py-16">
        {/* brand logo */}
        <div className="text-xl md:text-3xl flex items-center gap-1 md:gap-2 font-bold">
          <p className="text-primary uppercase">Fruit</p>
          <p className="text-secondary uppercase">Store</p>
          <FaLeaf className="text-green-500" />
        </div>

        {/* social media handles */}
        <div className="flex items-center gap-2 md:gap-4 text-2xl md:text-3xl">
            <FaFacebook/>
            <FaInstagram/>
            <FaYoutube/>
            <FaTwitter/>
        </div>
      </div>
    </footer>
  );
}
