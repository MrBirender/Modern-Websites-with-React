import React from "react";
import { features } from "../constants";

export default function Features() {
  return (
    <div className="relative mt-16 border-b border-neutral-800  min-h-[800px]">
      <div className="text-center">
        <span className="uppercase text-sm bg-neutral-900 rounded-full px-4 py-2 text-orange-500 h-6 ">
          Features
        </span>
        <h1 className="mt-10 lg:mt-20 text-4xl md:text-5xl lg:text-6xl tracking-wide">
          Eaisly Build
          {}{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800  bg-clip-text text-transparent">
            your code
          </span>
        </h1>
      </div>

      {/* features card */}
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map(({ icon, text, description, index }) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex justify-center items-center h-10 w-10 p-2 mx-6 text-orange-700 bg-neutral-900 rounded-full ">
                {icon}
              </div>
              <div>
                <h5 className="mt-1 sm:mb-6 mb-2 text-xl">{text}</h5>
                <p className="text-md p-2 sm:mb-20 mb-10 leading-7 text-neutral-500">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
