import React from "react";
import styled from "styled-components";
import { Test } from "./Test";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { SphereGeometry } from "three";

const data = ["a", "a", " aas"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100vh;
  position: relative;
`;
const Right = styled.div`
  flex: 1;
`;
const ListItem = styled.li`
  font-weight: bold;
  font-size: 90px;
  cursor: pointer;
  position: relative;
  color: transparent;
  -webkit-text-stroke: 3px black;
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    color: yellow;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover::after {
    animation: moveText 0.6s linear both;

    @keyframes moveText {
      to {
        width: 100%;
      }
    }
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ShapeText = styled.span`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
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
          <ShapeText>asdaasd</ShapeText>
        </Left>
        <Right>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Right>
      </Container>
    </Section>
  );
};
