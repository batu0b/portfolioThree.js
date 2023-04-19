import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import styled from "styled-components";
import { Atom } from "./Atom";
import { motion } from "framer-motion";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
`;
const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const GlassBox = styled.div`
  /* From https://css.glass */

  background: rgba(255, 255, 255, 0.36);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  width: 100%;
  height: fit-content;
  animation: flicker 1.5s infinite alternate;
  @keyframes flicker {
    from {
      box-shadow: 0 0 4px #dcff6f, 0 0 11px #dcff6f, 0 0 19px #dcff6f,
        0 0 30px #dcff6f;
    }

    to {
      box-shadow: 0 0 4px #dcff6f, 0 0 11px #dcff6f, 0 0 19px #dcff6f;
    }
  }
`;

const Left = styled.div`
  flex-basis: 50%;
  height: 300px;
  z-index: 2;
  @media only screen and (max-width: 1000px) {
    flex-basis: 100%;
  }
`;
const Absolute = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  justify-content: end;
`;

const CanvasContainer = styled.div`
  max-width: 100%;
  min-width: 50%;
  max-height: 100%;
`;

const line1 =
  "Now that I've introduced myself, we can move on to web technologies.";
const line2 = "*I generally try to build my applications on M.E.R.N ";
const line3 =
  "*But what I am really interested in is the frontend part, the backend part is in the second plan for me.";
const line4 =
  "*if you want to take a look at my projects, you can check out my GitHub account(You can reach the links to my accounts by pressing the 3 lines on the top left)";
export const Contact = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        ease: "linear",
        delay: 0,
        staggerChildren: 0.07,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <Section>
      <Container>
        {" "}
        <Left>
          <GlassBox>
            {" "}
            <Container>
              <motion.h4
                variants={sentence}
                initial="hidden"
                whileInView="visible"
              >
                {line1.split("").map((char, index) => {
                  return (
                    <motion.span
                      style={{
                        WebkitTextStrokeWidth: 1.4,
                        WebkitTextStrokeColor: "#dcff6f",
                        fontSize: 20,
                        color: "transparent",
                        letterSpacing: 1,
                      }}
                      key={char + "-" + index}
                      variants={letter}
                    >
                      {char}
                    </motion.span>
                  );
                })}
                <br />
                <br />
                {line2.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
                <br />
                <br />
                {line3.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
                <br />
                <br />
                {line4.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h4>
            </Container>
          </GlassBox>
        </Left>
        <Absolute>
          <CanvasContainer>
            <Canvas camera={{ position: [0, 0, 10] }}>
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                autoRotate={true}
              />
              <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <Atom />
              </Float>
            </Canvas>
          </CanvasContainer>
        </Absolute>
      </Container>
    </Section>
  );
};
