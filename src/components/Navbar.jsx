import React from "react";
import styled from "styled-components";
import {
  BarsIco,
  CrossIco,
  IconGithub,
  IconLinkedin,
  MenuToggle,
} from "./Icons";
import { Canvas } from "@react-three/fiber";
import { Center, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-family: "Poiret One", cursive;
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 999;
  height: 50px;
  width: 50px;
`;
const Absolute = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Right = styled.div`
  cursor: pointer;

  height: 60%;
  width: 60%;
  display: flex;
  justify-content: center;
  z-index: 999;
  align-items: center;
  color: black;
`;

const Text = styled.div`
  font-family: "Open Sans", sans-serif;
  font-family: "Poiret One", cursive;
  display: flex;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #2a2a2a,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #2a2a2a, #000000);
  color: white;
  z-index: 22;
`;

const Links = styled.span`
  display: flex;
  gap: 12px;
  cursor: pointer;
  font-size: 32px;
  color: white;
  align-items: center;
  font-weight: bold;
`;

const variants = {
  open: {
    opacity: 1.1,
    transition: {
      delayChildren: 2,
    },
  },
  closed: { opacity: 0 },
};

const Linkvariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const ULvariants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const GetIcoName = (name) => {
  if (name === "GitHub") {
    return <IconGithub style={{ width: "100%", color: "white" }} />;
  }
  if (name === "LinkedIn") {
    return <IconLinkedin style={{ width: "100%", color: "white" }} />;
  }
};

const itemIds = [
  { name: "GitHub", link: "https://github.com/batu0b" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/batuhan-bahayetmez-610a45224/",
  },
];
export const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <motion.div animate={isOpen ? "closed" : "open"} variants={variants}>
        <Container onClick={() => setIsOpen((prev) => !prev)}>
          <Absolute>
            <Canvas>
              <ambientLight intensity={1} />
              <Sphere args={[1, 100, 200]} scale={2.7}>
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
            <BarsIco />
          </Right>
        </Container>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            style={{ zIndex: 9999, position: "fixed" }}
          >
            <Text>
              <Container onClick={() => setIsOpen((prev) => !prev)}>
                <Absolute>
                  <Canvas>
                    <ambientLight intensity={1} />
                    <Sphere args={[1, 100, 200]} scale={2.7}>
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
                  <CrossIco />
                </Right>
              </Container>

              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={ULvariants}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {itemIds.map((i) => (
                  <motion.spam
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    variants={Linkvariants}
                    style={{ listStyle: "none" }}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                      href={i.link}
                    >
                      <Links>
                        <Right>{GetIcoName(i.name)}</Right>
                        <div className="text-placeholder">{i.name}</div>
                      </Links>
                    </a>
                  </motion.spam>
                ))}
              </motion.div>
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
