import styled from "styled-components";
import { Contact } from "./components/Contact";
import { Hello } from "./components/Hello";
import { Who } from "./components/Who";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar{
    display:none;
  }

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
