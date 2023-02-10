import React from "react";
import { WrapperContainer } from "../../App-styled";
import HomeHero from "./Hero";
import Navbar from "./Navbar";
import { Wrapper } from "./styled-index";

function Header({textEnter, textLeave}) {
  return (
    <Wrapper>
      <Navbar textLeave={textLeave} textEnter={textEnter}/>
      <WrapperContainer>
        <HomeHero textLeave={textLeave} textEnter={textEnter} />
      </WrapperContainer>
    </Wrapper>
  );
}

export default Header;
