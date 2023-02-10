import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Wrapper, WrapperQuestions } from "./styled-index";
import { WrapperContainer } from "../../App-styled";
import { useTranslation } from "react-i18next";

function Questions({ textEnter, textLeave }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { t, i18n } = useTranslation();
  return (
    <WrapperQuestions>
      <WrapperContainer>
        <Wrapper>
          <h2 data-aos="fade-up" data-aos-duration="700" className="text">
            {t("Ques.0")}
          </h2>
          <p data-aos="fade-up" data-aos-duration="800" className="subtext">
            {t("Ques.1")}
          </p>
          <div className="acords">
            <Accordion
              data-aos="fade-down"
              data-aos-duration="500"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              style={{
                background: "#7DBD46",
                color: "white",
                margin: "10px 0 0 0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className="s">
                  <h2
                    textLeave={textLeave}
                    textEnter={textEnter}
                    style={{ margin: 0 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </h2>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p textLeave={textLeave} textEnter={textEnter}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem recusandae magnam reiciendis assumenda eos! Quisquam!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              data-aos="fade-down"
              data-aos-duration="600"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              style={{
                background: "#7DBD46",
                color: "white",
                margin: "10px 0 0 0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className="s">
                  <h2
                    textLeave={textLeave}
                    textEnter={textEnter}
                    style={{ margin: 0 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </h2>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p textLeave={textLeave} textEnter={textEnter}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem recusandae magnam reiciendis assumenda eos! Quisquam!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
            data-aos="fade-down" data-aos-duration="700"
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              style={{
                background: "#7DBD46",
                color: "white",
                margin: "10px 0 0 0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className="s">
                  <h2
                    textLeave={textLeave}
                    textEnter={textEnter}
                    style={{ margin: 0 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </h2>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem recusandae magnam reiciendis assumenda eos! Quisquam!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
            data-aos="fade-down" data-aos-duration="800"
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              style={{
                background: "#7DBD46",
                color: "white",
                margin: "10px 0 0 0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className="s">
                  <h2
                    textLeave={textLeave}
                    textEnter={textEnter}
                    style={{ margin: 0 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </h2>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p textLeave={textLeave} textEnter={textEnter}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem recusandae magnam reiciendis assumenda eos! Quisquam!
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </Wrapper>
      </WrapperContainer>
    </WrapperQuestions>
  );
}

export default Questions;
