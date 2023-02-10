import React from "react";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../App-styled";
import { Wrapper, WrapperSystem } from "./styled-index";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function System({ textAnimation }) {
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 5]);

  return (
    <>
      <WrapperSystem>
        <WrapperContainer>
          <Wrapper>
            <h2 data-aos="fade-down" data-aos-duration="1000">
              {t("System.0")}
            </h2>
            <iframe
              data-aos="zoom-in"
              data-aos-duration="700"
              style={{
                // scale,
                borderRadius: "20px",
              }}
              width="70%"
              height="430"
              src="https://www.youtube.com/embed/7Ultx3eUHCU"
              title="PSG vs Saudi All Stars 5-4 All Goals & Highlights - Ronaldo Debut 2023"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Wrapper>
        </WrapperContainer>
      </WrapperSystem>
    </>
  );
}

export default System;
