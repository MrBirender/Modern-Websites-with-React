import React from "react";
import BannerImg from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utils/Animation";

export default function Banner() {
  return (
    <section className=" ">
      <div className="grid bg-secondary/10 grid-cols-1 md:grid-cols-2 py-14  mb-20  space-y-6 md:space-y-0">
        {/* Banner img */}
        <div className="flex justify-center items-center">
          <img
            className="w-[300px] md:max-w-[400px] h-full object-cover"
            src={BannerImg}
            alt="bannerImg"
          />
        </div>

        {/* Banner text */}
        <div className=" flex flex-col  justify-center gap-5">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeUp(0.6)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
             
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </motion.p>

            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex gap-2 items-center">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
