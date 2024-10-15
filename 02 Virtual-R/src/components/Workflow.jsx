import React from "react";
import WorkflowImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CheckCircle2 } from "lucide-react";

export default function Workflow() {
  return (
    <div className="sm:mt-20 mt-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-center mt-6 ">
        Acelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          coding workflow
        </span>
      </h1>
      {/* coding img and checklist */}
      <div className="flex sm:flex-row flex-col flex-wrap justify-center items-center mt-10">
        <div className="p-2 w-full sm:w-1/2">
          <img src={WorkflowImg} alt="workflowimg" />
        </div>
        <div className="sm:p-12 sm:mt-0 mt-6 w-full sm:w-1/2">
          {checklistItems.map(({ title, description }, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 flex justify-center items-center rounded-full mx-6 h-10 w-10 p-2 bg-neutral-900">
                <CheckCircle2 />
              </div>
              <div className="leading-7">
                <h5 className="mt-1 mb-2 text-xl">{title}</h5>
                <p className="text-md text-neutral-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
