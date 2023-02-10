import React from "react";
import { WrapperContainer } from "../../App-styled";
import { Row, Col } from "react-grid-system";
import { Card, WrapperCourse, Wrapper } from "./styled-index";
import { useTranslation } from "react-i18next";
import Button from "../commons/button";
import { motion } from "framer-motion";

function Course({ textEnter, textLeave }) {
  const data = [1, 2, 3, 4, 5, 6];
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
  return (
    <>
      <WrapperCourse id="course">
        <WrapperContainer>
          <Wrapper>
            <h2 data-aos="fade-down" data-aos-duration="1000">
              {t("Course.0")}
            </h2>
            <Row style={{ margin: 0 }}>
              <Col lg={6}>
                <Card data-aos="flip-up">
                  <img
                    className="posImg"
                    src="https://static.tildacdn.com/tild6331-6336-4335-b233-353661363334/2.png"
                    alt="photo"
                  />
                  <button className="Subtext"> {t("Course.1")}</button>
                  <p textLeave={textLeave} textEnter={textEnter}>
                    {t("Course.2")}
                  </p>
                  <div className="littleCol">
                    <h3 textLeave={textLeave} textEnter={textEnter}>
                      {" "}
                      {t("Course.3")}
                    </h3>
                    <p
                      textLeave={textLeave}
                      textEnter={textEnter}
                      style={{ width: "90%" }}
                    >
                      {t("Course.4")}
                    </p>
                    <img
                      src="https://thumb.tildacdn.com/tild3366-3838-4235-b035-616536313233/-/cover/120x120/center/center/-/format/webp/photo.png"
                      alt="photo"
                    />
                  </div>
                </Card>
              </Col>
              <Col lg={6}>
                <Card data-aos="flip-up">
                  <img
                    className="posImg"
                    src="https://static.tildacdn.com/tild6331-6336-4335-b233-353661363334/2.png"
                    alt="photo"
                  />
                  <button className="Subtext"> {t("Course.1")}</button>
                  <p textLeave={textLeave} textEnter={textEnter}>
                    {t("Course.2")}
                  </p>
                  <div className="littleCol">
                    <h3 textLeave={textLeave} textEnter={textEnter}>
                      {" "}
                      {t("Course.3")}
                    </h3>
                    <p
                      textLeave={textLeave}
                      textEnter={textEnter}
                      style={{ width: "90%" }}
                    >
                      {t("Course.4")}
                    </p>
                    <img
                      src="https://thumb.tildacdn.com/tild3366-3838-4235-b035-616536313233/-/cover/120x120/center/center/-/format/webp/photo.png"
                      alt="photo"
                    />
                  </div>
                </Card>
              </Col>
              <Col lg={6}>
                <Card data-aos="flip-up">
                  <img
                    className="posImg"
                    src="https://static.tildacdn.com/tild6331-6336-4335-b233-353661363334/2.png"
                    alt="photo"
                  />
                  <button className="Subtext"> {t("Course.1")}</button>
                  <p textLeave={textLeave} textEnter={textEnter}>
                    {t("Course.2")}
                  </p>
                  <div className="littleCol">
                    <h3 textLeave={textLeave} textEnter={textEnter}>
                      {" "}
                      {t("Course.3")}
                    </h3>
                    <p
                      textLeave={textLeave}
                      textEnter={textEnter}
                      style={{ width: "90%" }}
                    >
                      {t("Course.4")}
                    </p>
                    <img
                      src="https://thumb.tildacdn.com/tild3366-3838-4235-b035-616536313233/-/cover/120x120/center/center/-/format/webp/photo.png"
                      alt="photo"
                    />
                  </div>
                </Card>
              </Col>
              <Col lg={6}>
                <Card data-aos="flip-up">
                  <img
                    className="posImg"
                    src="https://static.tildacdn.com/tild6331-6336-4335-b233-353661363334/2.png"
                    alt="photo"
                  />
                  <button className="Subtext"> {t("Course.1")}</button>
                  <p textLeave={textLeave} textEnter={textEnter}>
                    {t("Course.2")}
                  </p>
                  <div className="littleCol">
                    <h3 textLeave={textLeave} textEnter={textEnter}>
                      {" "}
                      {t("Course.3")}
                    </h3>
                    <p
                      textLeave={textLeave}
                      textEnter={textEnter}
                      style={{ width: "90%" }}
                    >
                      {t("Course.4")}
                    </p>
                    <img
                      src="https://thumb.tildacdn.com/tild3366-3838-4235-b035-616536313233/-/cover/120x120/center/center/-/format/webp/photo.png"
                      alt="photo"
                    />
                  </div>
                </Card>
              </Col>
              <Col lg={6}>
                <Card data-aos="flip-up">
                  <img
                    className="posImg"
                    src="https://static.tildacdn.com/tild6331-6336-4335-b233-353661363334/2.png"
                    alt="photo"
                  />
                  <button className="Subtext"> {t("Course.1")}</button>
                  <p textLeave={textLeave} textEnter={textEnter}>
                    {t("Course.2")}
                  </p>
                  <div className="littleCol">
                    <h3 textLeave={textLeave} textEnter={textEnter}>
                      {" "}
                      {t("Course.3")}
                    </h3>
                    <p
                      textLeave={textLeave}
                      textEnter={textEnter}
                      style={{ width: "90%" }}
                    >
                      {t("Course.4")}
                    </p>
                    <img
                      src="https://thumb.tildacdn.com/tild3366-3838-4235-b035-616536313233/-/cover/120x120/center/center/-/format/webp/photo.png"
                      alt="photo"
                    />
                  </div>
                </Card>
              </Col>
              <Col lg={6}>
                <Card data-aos="flip-up">
                  <img
                    className="posImg"
                    src="https://static.tildacdn.com/tild6331-6336-4335-b233-353661363334/2.png"
                    alt="photo"
                  />
                  <button className="Subtext"> {t("Course.1")}</button>
                  <p textLeave={textLeave} textEnter={textEnter}>
                    {t("Course.2")}
                  </p>
                  <div className="littleCol">
                    <h3 textLeave={textLeave} textEnter={textEnter}>
                      {" "}
                      {t("Course.3")}
                    </h3>
                    <p
                      textLeave={textLeave}
                      textEnter={textEnter}
                      style={{ width: "90%" }}
                    >
                      {t("Course.4")}
                    </p>
                    <img
                      src="https://thumb.tildacdn.com/tild3366-3838-4235-b035-616536313233/-/cover/120x120/center/center/-/format/webp/photo.png"
                      alt="photo"
                    />
                  </div>
                </Card>
              </Col>
            </Row>
            <div className="div">
              <div className="Butto">
                <Button>{t("Hero.9")}</Button>
              </div>
            </div>
          </Wrapper>
        </WrapperContainer>
      </WrapperCourse>
    </>
  );
}

export default Course;

// https://static.tildacdn.com/tild6331-6336-4335-b233-353661363334/2.png
