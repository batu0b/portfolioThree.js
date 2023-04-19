import styled from "styled-components";
import { Contact } from "./components/Contact";
import { Who } from "./components/Who";
import { Navbar } from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Container = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #2a2a2a,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #2a2a2a,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1.1 },
    closed: { opacity: 0 },
  };

  return (
    <Container>
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />

      <AnimatePresence>
        <motion.span animate={isOpen ? "closed" : "open"} variants={variants}>
          {" "}
          <Who />
          <Contact />
        </motion.span>
      </AnimatePresence>
    </Container>
  );
}

export default App;
