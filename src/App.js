import { GlobalStyle, Div } from "./App-styled";
import About from "./components/About";
import Categorise from "./components/categorise";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Leave from "./components/Leave";
import Online from "./components/Online";
import Questions from "./components/Questions";
import Result from "./components/Result";
import System from "./components/Sytem";
import Tariffs from "./components/Tariffs";
import Teacher from "./components/Teacher";
import Teachers from "./components/teachers";
import Values from "./components/Values";
import Watch from "./components/Watch";

import { motion, useScroll, useSpring } from "framer-motion";

import AnimatedCursor from "react-animated-cursor";

import ScrollingColorBackground from "react-scrolling-color-background";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  };
  return (
    <>
      <Div>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <GlobalStyle />
        <Header />
        <System textAnimation={textAnimation} />
        <div className="teacherss">
          <Teachers />
          <Teacher />
          <Tariffs />
        </div>
        <div className="onlines">
          <Online />
          <Result />
          <Course />
        </div>
        <Watch />
        {/* <Categorise /> */}
        <Values />
        <About />
        <Footer />

        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          color="0, 0, 0"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "p",
          ]}
        />
      </Div>
    </>
  );
}

export default App;
