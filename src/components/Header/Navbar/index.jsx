import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Hamburger from "./hamburger";
import { Wrapper } from "./styled-index";
import "./styled.css";
function Navbar({ textEnter, textLeave }) {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 60
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const HendelChange = (e) => {
    window.localStorage.setItem("i18nextLng", e.target.value);
    window.location.reload();
  };
  const ValueLng = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const HendelClick = () => {
    setModal(true);
  };
  return (
    <>
      <div className="header">
        <Wrapper className="nav">
          <h1>Logo</h1>
          <ul className="nav_ul">
            <li>
              <a
                href="#course"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                {t("Navbar.0")}
              </a>
            </li>
            <li>
              <a
                href="#spikers"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                {t("Navbar.1")}
              </a>
            </li>
            <li>
              <a
                href="#tariffs"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                {t("Navbar.2")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                {t("Navbar.3")}
              </a>
            </li>
            <li>
              {ValueLng() == "uz" ? (
                <>
                  <select onChange={HendelChange}>
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                  </select>
                </>
              ) : ValueLng() == "ru" ? (
                <>
                  <select onChange={HendelChange}>
                    <option value="ru">RU</option>
                    <option value="uz">UZ</option>
                  </select>
                </>
              ) : (
                <select onChange={HendelChange}>
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                </select>
              )}
            </li>
            <li>
              <a href="#" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                {t("Navbar.4")}
              </a>
            </li>
          </ul>
          <button className="OpenIcon" onClick={HendelClick}>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </Wrapper>
      </div>
      <Hamburger
        modal={modal}
        HendelChange={HendelChange}
        ValueLng={ValueLng}
        set={setModal}
      />
    </>
  );
}

export default Navbar;
