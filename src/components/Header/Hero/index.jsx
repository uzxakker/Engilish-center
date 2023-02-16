import React from "react";
import { useTranslation } from "react-i18next";
import Img from "../../../assets/hero/planeta.png";
import Button from "../../commons/button";
import { Wrapper, Top } from "./styled-index";
import { motion } from "framer-motion";


function HomeHero() {
  const { t, i18n } = useTranslation();

  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  };

  const textAnimation2 = {
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
    <>
      {/* <Top></Top> */}
      <Wrapper>
        <motion.div initial="hidden" whileInView="visible" className="texts">
          {/* <ul>
            <li>
              <motion.h3 custom={1} variants={textAnimation}>
                {t("Hero.0")}:
              </motion.h3>
              <motion.p custom={2} variants={textAnimation}>
                {t("Hero.3")}
              </motion.p>
            </li>
            <li>
              <motion.h3 custom={1} variants={textAnimation}>
                {t("Hero.1")}:
              </motion.h3>
              <motion.p custom={2} variants={textAnimation}>
                {t("Hero.4")}
              </motion.p>
            </li>
            <li>
              <motion.h3 custom={1} variants={textAnimation}>
                {t("Hero.2")}:
              </motion.h3>
              <motion.p custom={2} variants={textAnimation}>
                {t("Hero.5")}
              </motion.p>
            </li>
          </ul> */}
          <motion.p custom={1} variants={textAnimation} className="edulink"><span>Edulink.uz</span> online bilimlar dunyosi!</motion.p>
          <motion.h2 custom={3} variants={textAnimation2}>
            {t("Hero.6")} &   IELTS
          </motion.h2>
          <motion.p custom={4} variants={textAnimation2} className="subtext">
            {t("Hero.7")}
          </motion.p>
          <motion.p custom={4} variants={textAnimation2}>
            {t("Hero.8")}
          </motion.p>
          <Button data-aos="fade-down" data-aos-duration="700">
            {t("Hero.9")}
          </Button>
        </motion.div>
        {/* <div className="Img">
          <img src={Img} alt="photo" />
        </div> */}
      </Wrapper>
    </>
  );
}

export default HomeHero;
