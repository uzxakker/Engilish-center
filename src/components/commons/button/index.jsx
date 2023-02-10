import React from "react";
import { Btn } from "./styled-index";
import "./style.css";
import { motion } from "framer-motion";

function Button({ children }) {
  const buttonAnime = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
  };
  return (
    <motion.button
      custom={5}
      variants={buttonAnime}
      className="custom-btn btn-12"
    >
      <span>
        <i class="bx bx-chevron-right"></i>
        {children}
      </span>
      <span>
        <i class="bx bx-chevron-right"></i>
        {children}
      </span>
    </motion.button>
  );
}

export default Button;
