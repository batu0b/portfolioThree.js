import React from "react";
import styled from "styled-components";
import { Test } from "./Test";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { CrossIco, MinusIco, WindowIco } from "./Icons";
import { motion } from "framer-motion";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Right = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
  align-items: center;
`;

const Box = styled.div`
  border: 2px solid #484848;
  max-width: 400px;
  min-width: 260px;
  margin: 0 10px;
  height: fit-content;
  background-color: white;
  display: flex;
  color: black;
  flex-direction: column;
  border-radius: 5px;
`;

const BoxTop = styled.div`
  max-width: 100%;
  background-color: #222222;
  height: 30px;
  display: flex;
  justify-content: end;
  gap: 12px;
  align-items: center;
  padding-right: 1rem;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const BoxTopBox = styled.div`
  background-color: ${(props) => props.BgColor};
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: ${(props) => props.textColor};
`;

const BoxContent = styled.div`
  margin: 0 20px;
`;
const Absolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const line1 = "First of all, thank you for visiting my website =]";
const line2 =
  " I am Batuhan Bahayetmez, a computer engineering student at Sakarya University.";
const line3 = " I am trying to improve myself on web development ";
export const Who = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        ease: "linear",
        delay: 0,
        staggerChildren: 0.1,
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
        <Absolute>
          <Canvas>
            <ambientLight intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              {" "}
              <MeshDistortMaterial
                color="#c8ff00"
                attach="material"
                distord={3}
                spped={3}
              />
            </Sphere>
          </Canvas>
        </Absolute>
        <Right>
          <Box>
            <BoxTop>
              <BoxTopBox BgColor="#313131" textColor="#fff">
                {" "}
                <MinusIco />
              </BoxTopBox>
              <BoxTopBox BgColor="#313131" textColor="#fff">
                <WindowIco />
              </BoxTopBox>
              <BoxTopBox BgColor="#de0404" textColor="#fff">
                {" "}
                <CrossIco />
              </BoxTopBox>
            </BoxTop>
            <BoxContent>
              <motion.h3
                variants={sentence}
                initial="hidden"
                whileInView="visible"
              >
                {line1.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
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
              </motion.h3>
            </BoxContent>
          </Box>
        </Right>
      </Container>
    </Section>
  );
};
