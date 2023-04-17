import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  font-family: "Poiret One", cursive;
`;
const Links = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Logo = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  flex-basis: 50%;
  font-weight: bolder;
`;

const NeonText = styled.h1`
  animation: flicker 1.5s infinite alternate;
  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #fff, 0 0 80px #fff,
        0 0 90px #fff;
    }
    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  position: relative;
  :hover {
    transform: scale(1.2);
    transition: transform 0.2s ease-out;
  }
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #edfa00;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover {
    ::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
const Link = styled.span``;

export const Navbar = () => {
  return (
    <Container>
      <Links>
        <Logo>
          <NeonText>Batuhan Bahayetmez</NeonText>
        </Logo>
        <List>
          <ListItem>
            <Link>Who</Link>
          </ListItem>
          <ListItem>
            <Link>Who</Link>
          </ListItem>
          <ListItem>
            <Link>Who</Link>
          </ListItem>
        </List>
      </Links>
    </Container>
  );
};
