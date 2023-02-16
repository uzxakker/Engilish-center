import React from "react";
import { Row, Col } from "react-grid-system";
import "./card.css";

// import framer hooks
import { useMotionValue, useTransform, motion } from "framer-motion";

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = [
    { value: "#185bca" },
    { value: "#272425" },
    { value: "#617453" },
    { value: "#f2c758" },
    { value: "#ffffff" },
  ];

  return (
    // <Row>
    //   <Col lg={6} md={12} sm={12}>

    //   </Col>
    //   <Col lg={6} md={12} sm={12}>
    //     <div className="card-wrapper" style={{ perspective: 2000 }}>
    //       {/* card */}
    //       <motion.div
    //         style={{ x, y, rotateX, rotateY, z: 100 }}
    //         drag
    //         dragElastic={0.18}
    //         dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
    //         whileTap={{ cursor: "grabbing" }}
    //         className="cards"
    //       >
    //         <motion.div
    //           className="card-name"
    //           style={{ x, y, rotateX, rotateY, z: 100 }}
    //         >
    //           <h1
    //             className="card-titles"
    //             style={{ x, y, rotateX, rotateY, z: 50 }}
    //           >
    //             Xurrambek Rustamov
    //           </h1>
    //         </motion.div>
    //         <motion.div
    //           className="card-contents"
    //           style={{ x, y, rotateX, rotateY, z: 100 }}
    //         >
    //           <div className="card-job">
    //             <h3 className="card-job-title">Maktab asoschisi</h3>
    //           </div>
    //           <p style={{ x, y, rotateX, rotateY, z: 100, color: "#000" }}>
    //             Tadbirkor va Khurramʼs Group Asoschisi: Jamoasida 50 dan ortiq
    //             odamlar bilan ishlab kelmoqda va 7 tadan ortiq maktablarni
    //             muvaffaqiyatli yaratgan Khurramʼs group jamoasida nafaqat
    //             Oʻzbekistondan balki Yevropa va Rossiya davlatlaridan ham
    //             ishlayotgan xodimlar boshlig’i Oʻtgan yil va shu yillar davomida
    //             mijozlar, hamkorlar va talabalarga jami 500 ming dollardan ortiq
    //             aylanma mablagʻlarini keltirgan.
    //           </p>
    //         </motion.div>

    //         <motion.div
    //           style={{ x, y, rotateX, rotateY, z: 100000 }}
    //           className="card-img"
    //         >
    //           <img
    //             src="https://thumb.tildacdn.com/tild6464-3233-4563-b435-393661313235/-/resize/380x/-/format/webp/IMG_8772_1.png"
    //             alt=""
    //             width="300"
    //             height="300"
    //             draggable="false"
    //           />
    //         </motion.div>
    //       </motion.div>
    //     </div>
    //   </Col>
    // </Row>
    <>
      <div className="card-wrapper">
        <div className="cards">
          <div className="card-name">
            <h1 className="card-titles">Xurrambek Rustamov</h1>
          </div>
          <div className="card-contents">
            <div className="card-job">
              <h3 className="card-job-title">Maktab asoschisi</h3>
            </div>
            <p style={{ x, y, rotateX, rotateY, z: 100, color: "#000" }}>
              Tadbirkor va Khurramʼs Group Asoschisi: Jamoasida 50 dan ortiq
              odamlar bilan ishlab kelmoqda va 7 tadan ortiq maktablarni
              muvaffaqiyatli yaratgan Khurramʼs group jamoasida nafaqat
              Oʻzbekistondan balki Yevropa va Rossiya davlatlaridan ham
              ishlayotgan xodimlar boshlig’i Oʻtgan yil va shu yillar davomida
              mijozlar, hamkorlar va talabalarga jami 500 ming dollardan ortiq
              aylanma mablagʻlarini keltirgan.
            </p>
          </div>
          <div className="card-img">
            <img
              src="https://thumb.tildacdn.com/tild6464-3233-4563-b435-393661313235/-/resize/380x/-/format/webp/IMG_8772_1.png"
              alt=""
              width="300"
              height="300"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
