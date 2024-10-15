import React from "react";
import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center mt-6 lg:mt-20">
      <h1 className="text-[33px] sm:text-6xl lg:text-8xl tracking-wide text-center">
        VirtualR build tool
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
          {" "}
          for developers
        </span>
      </h1>

      <p className="lg:mt-10 mt-6 text-lg  text-center text-neutral-500  max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      <div className="flex items-center justify-center mt-10 ">
        <a
          href="#"
          className="px-3 py-2 border  rounded-md bg-gradient-to-r from-orange-500 to-orange-800 "
        >
          Start for free
        </a>
        <a href="#" className="px-3 py-2 border rounded-md lg:mx-6 mx-3  ">
          Documentation
        </a>
      </div>

      <div className="flex sm:flex-row flex-col items-center justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg sm:w-1/2 mx-2 my-4 border border-orange-700 shadow-orange-400"
        >
          <source src={Video1} type="video/mp4" />
          Your browser doesn't support HTML5 video.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg sm:w-1/2 mx-2 my-4  border border-orange-700 shadow-orange-400"
        >
          <source src={Video2} type="video/mp4" />
          Your browser doesn't support HTML5 video.
        </video>
      </div>
    </div>
  );
}
