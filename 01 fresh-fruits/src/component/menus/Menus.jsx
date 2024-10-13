import React from "react";
import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";
import { delay, motion } from "framer-motion";
import { FadeLeft } from "../../utils/Animation";

const menuItems = [
  {
    id: 1,
    title: "Fresh Red Apples",
    price: "$3.99",
    link: "/",
    img: Fruit1,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    price: "$4.99",
    link: "/",
    img: Fruit2,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Avocado",
    price: "$5.99",
    link: "/",
    img: Fruit3,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    price: "$2.99",
    link: "/",
    img: Fruit4,
    delay: 1.2,
  },
];
export default function Menus() {
  return (
    <section>
      <div className="container mt-12 mb-20">
        <motion.h1
          initial={{ opacity: 0, x:-300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4}}
          className="text-2xl font-bold text-left pb-10"
        >
          OUR MENU
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {menuItems.map(({ id, title, price, link, img, delay }) => (
            <motion.div
              variants={FadeLeft(delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-3xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)] px-4 py-2 flex justify-around items-center"
              key={id}
            >
              <img
                className="w-[60px] scale-125 mb-4 transform -translate-y-6"
                src={img}
                alt=""
              />
              <div className="">
                <h1 className="text-xl font-xl font-semibold">{title}</h1>
                <p className="text-secondary font-semibold">{price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
