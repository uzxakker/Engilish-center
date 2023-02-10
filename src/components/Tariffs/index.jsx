import React from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../App-styled";
import img from "../../assets/traffis/roket.png";
import Button from "../commons/button";
import { Wrapper, WrapperTariffs } from "./styled-index";

function Tariffs({ textEnter, textLeave }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperTariffs id="tariffs">
        <WrapperContainer>
          <Wrapper>
            <h2 className="text">{t("Tariffs.0")}</h2>
            <div className="Cards">
              <Row style={{ margin: 0 }}>
                <Col lg={6} md={12} sm={12}>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="700"
                    className="card"
                  >
                    <img src={img} alt="" />
                    <br />
                    <button className="card-text">Megabayt</button>
                    <p
                      textLeave={textLeave}
                      textEnter={textEnter}
                      className="card-subtext"
                    >
                      (joylar soni — ∞)
                    </p>

                    <ul>
                      <li>
                        <h3
                          data-aos="fade-right"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Barch o'quv darslariga kirish
                        </h3>
                        <p
                          data-aos="fade-left"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Kurs kontentiga blablablabla
                        </p>
                      </li>
                      <li>
                        <h3
                          data-aos="fade-right"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Lorem ipsum dolor sit amet.
                        </h3>
                        <p
                          data-aos="fade-left"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta, sapiente!
                        </p>
                      </li>
                      <li>
                        <h3
                          data-aos="fade-right"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Lorem ipsum dolor sit amet.
                        </h3>
                        <p
                          data-aos="fade-left"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quam odit placeat cum recusandae iure
                          accusantium.
                        </p>
                      </li>
                      <li>
                        <h3
                          data-aos="fade-right"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Lorem ipsum dolor sit amet consectetur.
                        </h3>
                      </li>
                    </ul>
                    <div className="button">
                      <div className="btn">
                        <Button>Ishtirok Etish</Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <div
                    data-aos="fade-left"
                    data-aos-duration="700"
                    className="card"
                  >
                    <img src={img} alt="" />
                    <br />
                    <button className="card-text2">Gegabayt</button>
                    <p
                      textLeave={textLeave}
                      textEnter={textEnter}
                      className="card-subtext"
                    >
                      (joylar soni — ∞)
                    </p>

                    <ul>
                      <li>
                        <h3
                          data-aos="fade-right"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Barch o'quv darslariga kirish
                        </h3>
                        <p
                          data-aos="fade-left"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Kurs kontentiga blablablabla
                        </p>
                      </li>
                      <li>
                        <h3
                          data-aos="fade-right"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Lorem ipsum dolor sit amet.
                        </h3>
                        <p
                          data-aos="fade-left"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta, sapiente!
                        </p>
                      </li>
                      <li>
                        <h3
                          data-aos="fade-right"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Lorem ipsum dolor sit amet.
                        </h3>
                        <p
                          data-aos="fade-left"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quam odit placeat cum recusandae iure
                          accusantium.
                        </p>
                      </li>
                      <li>
                        <h3
                          data-aos="fade-right"
                          data-aos-duration="700"
                          textLeave={textLeave}
                          textEnter={textEnter}
                        >
                          Lorem ipsum dolor sit amet consectetur.
                        </h3>
                      </li>
                    </ul>
                    <div className="button">
                      <div className="btn">
                        <Button>Ishtirok Etish</Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Wrapper>
        </WrapperContainer>
      </WrapperTariffs>
    </>
  );
}

export default Tariffs;
