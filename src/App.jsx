import styled from "styled-components";
import Tags from "./components/Tags/Tags";
import Timer from "./components/Tags/Timer/Timer";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import {FaCog} from "react-icons/fa";

function App() {
  

  //to open and close the Modal
  const[isOpen, setIsOpen] = useState(false);

  const onClose = () => {

    setIsOpen(false);
  }

  const onOpen = () => {

    setIsOpen(true);
  }


  return <>
  <Modal isOpen={isOpen} onClose ={onClose}></Modal>
  <Title>Pomodoro</Title>
  <Tags/>
  <Timer></Timer>
  {/* Setting Icon  */}
  <CogIcon onClick={onOpen}>
    <FaCog/>
  </CogIcon>
  </>


}

export default App;

//styled component
const Title = styled.h1`
font-size: 6rem;
padding: 2rem 0;
text-align: center; 
`;

const CogIcon = styled.div`
display:flex;
justify-content: center;
font-size:4rem;
`
