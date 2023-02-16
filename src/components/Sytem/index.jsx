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
              style={{
                borderRadius: '20px',
             }}
              data-aos="zoom-in"
              width='80%'
              height='530'
              data-aos-duration="700"
              src="https://www.youtube.com/embed/liX95VS4a14"
              title="YouTube video player"
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
