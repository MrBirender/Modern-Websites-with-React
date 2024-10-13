import React from "react";
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "../../utils/Animation";
import Plate2 from "../../assets/fruit-plate2.png";

export default function Banner2() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 mb-20">
        {/* banner2 text */}
        <div className="flex items-center ">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Online Fruit Store
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
                Download The App
              </button>
            </motion.div>
          </div>
        </div>

        {/* banner2 img */}
        <div className="flex items-center justify-center">
            <motion.img
             initial =  {{opacity:0, x:200, rotate:75}} 
             whileInView = {{opacity:1, x:0, rotate:0}}
             transition={{duration:1, delay:0.2}}  
             className="w-[300px] md:w-[400px] " src={Plate2} alt="plate2" />
        </div>
      </div>
    </section>
  );
}
