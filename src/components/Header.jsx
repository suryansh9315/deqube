"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  hamCircleAnim,
  hamContentBg,
  hamLineAnim,
  hamLineAnim2,
  logo,
  logo_dark,
} from "@/anim";

const Header = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="px-10 py-8 flex justify-between items-center">
        <div className="z-10 relative top-0 left-0 h-[63px] w-[250px]">
          <AnimatePresence key="logo_dark">
            {open && (
              <motion.div
                variants={logo_dark}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute top-0 left-0 z-10 h-[63px] w-[250px]"
              >
                <Image
                  src={{ src: "/logo_dark.jpeg", height: 63, width: 250 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence key="logo">
            {!open && (
              <motion.div
                variants={logo}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Image src={{ src: "/logo.jpeg", height: 63, width: 250 }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className="group flex items-center justify-center gap-3 bg-black h-16 w-32 rounded-full text-white px-2 py-2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
        >
          <div className="text-xs uppercase font-semibold">Menu</div>
          <motion.div
            variants={hamCircleAnim}
            initial="initial"
            animate={
              open
                ? hover
                  ? "openHover"
                  : "openNotHover"
                : hover
                ? "hover"
                : "notHover"
            }
            className="flex items-center justify-center flex-col gap-[3px] bg-[#07DAC0] rounded-full z-10"
            onClick={() => setOpen(!open)}
          >
            <motion.div
              variants={hamLineAnim}
              initial="initial"
              animate={
                open
                  ? hover
                    ? "openHover"
                    : "openNotHover"
                  : hover
                  ? "hover"
                  : "notHover"
              }
              className={`bg-black rounded-full`}
            />
            <motion.div
              variants={hamLineAnim2}
              initial="initial"
              animate={
                open
                  ? hover
                    ? "openHover"
                    : "openNotHover"
                  : hover
                  ? "hover"
                  : "notHover"
              }
              className={`bg-black rounded-full`}
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={hamContentBg}
        initial="initial"
        animate={open ? "open" : "close"}
        className={`bg-black overflow-hidden text-white w-full absolute ${
          !open ? "top-0" : "bottom-0"
        }`}
      ></motion.div>
    </>
  );
};

export default Header;
