import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

export default function PriceSection() {
  return (
    <div className="mt-10 sm:mt-20">
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl mb-8">
        Pricing
      </h1>
      <div className="flex flex-wrap">
        {/* pricing cards */}
        {pricingOptions.map(({ title, features, price }, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="sm:p-10 p-8 border border-neutral-700 rounded-xl">
              <p className="text-4xl  mb-4 ">
                {title}
                {title === "Pro" && (
                  <span className="text-orange-500 text-xl mx-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-4xl font-semibold mt-6 mr-2 ">
                  {price}
                </span>
                <span className="text-neutral-500 tracking-tight">/Month</span>
              </p>

              <ul>
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center mt-8">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex items-center justify-center text-center h-12 p-5 sm:mt-20 mt-10 bg-gradient-to-r from-orange-500 to-orange-800 border border-orange-900 rounded-lg w-full text-xl transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
