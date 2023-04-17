import React from "react";
import styled from "styled-components";
const Section = styled.div`
  height: 100vh;
  background-color: purple;
  scroll-snap-align: center;
`;
export const Hello = () => {
  return <Section>Hello :) </Section>;
};
