import React from "react";
import styled from "styled-components";
import { Test } from "./Test";

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
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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

export const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <Test />
        </Right>
      </Container>
    </Section>
  );
};
