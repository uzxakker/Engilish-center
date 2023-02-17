import { motion, Variants } from "framer-motion";
import { Wrapper, WrapperTeachers } from "./styled-index";
import img from "../.../../../assets/boss/user.png";
import { WrapperContainer } from "../../App-styled";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import Card from "./card/card";
import { Col, Row } from "react-grid-system";
import { Parallax } from "react-scroll-parallax";
import { useMotionValue, useTransform } from "framer-motion";

export default function Teachers() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [40, -40]);
  const rotateY = useTransform(x, [-100, 100], [-40, 40]);
  return (
    <WrapperTeachers id="spikers">
      <WrapperContainer>
        <Wrapper>
          <h1
            data-aos="fade-down"
            data-aos-duration="900"
            className="teacher-title"
          >
            Lorem ipsum dolor, sit amet consectetur
          </h1>
          <Row className="row">
            <Col
              data-aos="fade-up-right"
              data-aos-duration="700"
              className="col1"
              lg={6}
              md={12}
              sm={12}
            >
              <Parallax translateX={[-20, 10]}  speed={-2}>
                <div className="before-div"></div>
              </Parallax>
              <Card />
            </Col>
            <Col
              data-aos="fade-up-left"
              data-aos-duration="700"
              lg={6}
              md={12}
              sm={12}
            >
              <Parallax translateX={[20, -10]}  speed={10}>
                <div className="after-div"></div>
              </Parallax>
              <Card />
            </Col>
          </Row>
        </Wrapper>
      </WrapperContainer>
    </WrapperTeachers>
  );
}
