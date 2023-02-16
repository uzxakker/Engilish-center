import React, { useState } from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../App-styled";
import img from "../../assets/traffis/roket.png";
import Button from "../commons/button";
import { Wrapper, WrapperTariffs } from "./styled-index";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import TarifModal from "./modal";

function Tariffs({ textEnter, textLeave }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [40, -40]);
  const rotateY = useTransform(x, [-100, 100], [-40, 40]);
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <WrapperTariffs id="tariffs">
        <WrapperContainer>
          <Wrapper>
            <h2 className="text">{t("Tariffs.0")}</h2>
            <div className="Cards">
              <Row className="wrappers" style={{ margin: 0 }}>
                <Col className="col" lg={6} md={12} sm={12}>
                  <Parallax translateX={[-20, 10]} speed={-2}>
                    <div className="before-div"></div>
                  </Parallax>
                  <Parallax scale={["0.75", "1"]} speed={5}>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 100 }}
                      drag
                      dragElastic={0.28}
                      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                      whileTap={{ cursor: "grabbing" }}
                      className="card"
                    >
                      <motion.img
                        style={{ x, y, rotateX, rotateY, z: 200 }}
                        src={img}
                        alt=""
                      />
                      <br />
                      <motion.button
                        style={{ x, y, rotateX, rotateY, z: 200 }}
                        className="card-text"
                      >
                        Megabayt
                      </motion.button>
                      <motion.p
                        style={{ x, y, rotateX, rotateY, z: 200 }}
                        className="card-subtext"
                      >
                        (joylar soni — ∞)
                      </motion.p>

                      <motion.ul style={{ x, y, rotateX, rotateY, z: 200 }}>
                        <li>
                          <h3>Barch o'quv darslariga kirish</h3>
                          <p>Kurs kontentiga blablablabla</p>
                        </li>
                        <li>
                          <h3>Lorem ipsum dolor sit amet.</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta, sapiente!
                          </p>
                        </li>
                        <li>
                          <h3>Lorem ipsum dolor sit amet.</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam odit placeat cum recusandae iure
                            accusantium.
                          </p>
                        </li>
                        <li>
                          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                        </li>
                      </motion.ul>
                      <div className="button">
                        <div className="btn" onClick={showModal}>
                          <Button>Ishtirok Etish</Button>
                        </div>
                      </div>
                    </motion.div>
                  </Parallax>
                </Col>

                <Col className="col1" lg={6} md={12} sm={12}>
                  <Parallax translateX={[20, -10]} speed={-2}>
                    <div className="after-div"></div>
                  </Parallax>

                  <Parallax scale={["0.75", "1"]} speed={5}>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 100 }}
                      drag
                      dragElastic={0.28}
                      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                      whileTap={{ cursor: "grabbing" }}
                      className="card"
                    >
                      <motion.img
                        style={{ x, y, rotateX, rotateY, z: 200 }}
                        src={img}
                        alt=""
                      />
                      <br />
                      <motion.button
                        style={{ x, y, rotateX, rotateY, z: 200 }}
                        className="card-text"
                      >
                        Gegabayt
                      </motion.button>
                      <motion.p
                        style={{ x, y, rotateX, rotateY, z: 200 }}
                        className="card-subtext"
                      >
                        (joylar soni — ∞)
                      </motion.p>

                      <motion.ul style={{ x, y, rotateX, rotateY, z: 200 }}>
                        <li>
                          <h3>Barch o'quv darslariga kirish</h3>
                          <p>Kurs kontentiga blablablabla</p>
                        </li>
                        <li>
                          <h3>Lorem ipsum dolor sit amet.</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta, sapiente!
                          </p>
                        </li>
                        <li>
                          <h3>Lorem ipsum dolor sit amet.</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam odit placeat cum recusandae iure
                            accusantium.
                          </p>
                        </li>
                        <li>
                          <h3 textLeave={textLeave} textEnter={textEnter}>
                            Lorem ipsum dolor sit amet consectetur.
                          </h3>
                        </li>
                      </motion.ul>
                      <div className="button">
                        <div className="btn" onClick={showModal}>
                          <Button>Ishtirok Etish</Button>
                        </div>
                      </div>
                    </motion.div>
                  </Parallax>
                </Col>
              </Row>
            </div>
            <TarifModal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} />
          </Wrapper>
        </WrapperContainer>
      </WrapperTariffs>
    </>
  );
}

export default Tariffs;
