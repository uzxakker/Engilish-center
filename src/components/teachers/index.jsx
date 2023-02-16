import { motion, Variants } from "framer-motion";
import { Wrapper, WrapperTeachers } from "./styled-index";
import img from "../.../../../assets/boss/user.png";
import { WrapperContainer } from "../../App-styled";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import Card from "./card/card";
import { Col, Row } from "react-grid-system";

export default function Teachers() {
  return (
    <WrapperTeachers id="spikers">
      <WrapperContainer>
        <Wrapper>
          <h1 className="teacher-title">
            Lorem ipsum dolor, sit amet consectetur
          </h1>
          <Row className="row">
            <Col style={{marginBottom: '272px'}} lg={6} md={12} sm={12}>
              <Card />
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Card />
            </Col>
          </Row>
        </Wrapper>
      </WrapperContainer>
    </WrapperTeachers>
  );
}
