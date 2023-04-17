import styled from "styled-components";
import { Contact } from "./components/Contact";
import { Hello } from "./components/Hello";
import { Who } from "./components/Who";
import { Test } from "./components/Test";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
  background: #d502ab; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #d502ab,
    #333399
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #d502ab,
    #333399
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

function App() {
  return (
    <Container>
      <Hello />
      <Who />
      <Contact />
    </Container>
  );
}

export default App;
