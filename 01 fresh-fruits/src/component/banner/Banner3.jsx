import React from "react";
import Banner3Img from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeUp } from "../../utils/Animation";

const bgStyle = {
  backgroundImage: `url(${Banner3Img})`,
};
export default function Banner3() {
  return (
    <section className="container ">
      <div
        style={bgStyle}
        className=" bg-center bg-cover bg-no-repeat  grid grid-cols-1 md:grid-cols-2 py-14  mb-16 h-[400px] md:h-[500px]   space-y-6 md:space-y-0 rounded-3xl "
      >
        {/* blank div */}
        <div></div>
        {/* Banner text */}
        <div className=" flex flex-col md:justify-center   gap-5">
          <div className="text-center md:text-left space-y-5 -mt-8 md:mt-0 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold uppercase"
            >
              Get Fresh Fruits Today
            </motion.h1>

            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-gray-950"
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
              <button className="primary-btn flex gap-2 items-center capitalize">
                order now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
