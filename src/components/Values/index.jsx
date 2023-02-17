import React from "react";
import { Wrapper, WrapperValues } from "./styled-index";
import { WrapperContainer } from "../../App-styled";
import { useParallax, Parallax } from 'react-scroll-parallax';
import {  } from 'react-scroll-parallax';

function Values() {
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      rotateY: [0, 360],
    };

  return (
    <WrapperValues>
      <WrapperContainer>
      {/* data-aos="fade-up" data-aos-duration="700" */}
        <Wrapper>
          <Parallax startScroll={3000} speed={2} translateX={[0, 0]}>
          <ul data-aos="fade-up" data-aos-duration='700'>
            <li>
              <div className="icon">
                <ion-icon name="logo-youtube"></ion-icon>
              </div>
              <div className="text">
                <h3>Talabalar</h3>
                <p>121212</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <ion-icon name="logo-instagram"></ion-icon>
              </div>
              <div className="text">
                <h3>Natijalar</h3>
                <p>121212</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <ion-icon name="logo-facebook"></ion-icon>
              </div>
              <div className="text">
                <h3>blablabla</h3>
                <p>121212</p>
              </div>
            </li>
          </ul>
          </Parallax>
          
        </Wrapper>
      </WrapperContainer>
    </WrapperValues>
  );
}

export default Values;
