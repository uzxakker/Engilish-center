import React from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../App-styled";
import Button from "../commons/button";
import VideoModa from "./modal";
import { Wrapper, WrapperResult, Card } from "./styled-index";

function Result({ textEnter, textLeave }) {
  const data = [1, 2, 3, 4, 5, 6];
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <WrapperResult>
        <WrapperContainer>
          <Wrapper>
            <h2 data-aos="fade-right" data-aos-duration="700">
              {t("Result.0")}
            </h2>
            <h2 data-aos="fade-right" data-aos-duration="700">
              {t("Result.1")}
            </h2>
            <div className="Cards">
              <Row style={{ margin: 0 }}>
                {data.map(() => (
                  <Col lg={6}>
                    <Card>
                      <div className="headr">
                        <div className="video">
                          <i
                            onClick={handleOpen}
                            class="bx bx-play-circle bx-tada"
                          ></i>
                          <img
                            className="imgP"
                            src="https://thumb.tildacdn.com/tild3462-3632-4461-b964-636338396239/-/format/webp/TV.png"
                            alt="photo"
                          />
                        </div>
                      </div>
                      <div className="texts">
                        <p textLeave={textLeave} textEnter={textEnter}>
                          {t("Course.2")}
                        </p>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <VideoModa
              open={open}
              setOpen={setOpen}
              handleClose={handleClose}
            />
            <div className="button">
              <div className="btn">
                <Button href={"#tariffs"}>{t("Result.3")}</Button>
              </div>
            </div>
          </Wrapper>
        </WrapperContainer>
      </WrapperResult>
    </>
  );
}

export default Result;
