import styled from "styled-components";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa"
import { Formik, Form, Field } from 'formik';
import { useContext } from "react";
import { StateContext } from "../StateProvider";





const ModalContainer = ({ isOpen, onClose }) => {


    //import from global state
    const { workTime, setWorkTime, shortBreakTime, setShortBreakTime, longBreakTime, setLongBreakTime } = useContext(StateContext);




    return <Container>
        <ModalContent initial={{ y: "-100vh", scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: "-100vh", scale: 0 }}>
            <ModalHeader>
                <ModalTitle>Settings (time in minutes)</ModalTitle>
                <ModalCloseButton onClick={onClose}><FaWindowClose fontSize="5rem" /></ModalCloseButton>
            </ModalHeader>

            <ModalBody>

                <Formik initialValues={{ work: workTime / 60, short: shortBreakTime / 60, long: longBreakTime / 60 }} onSubmit={(values) => {

                    setWorkTime(values.work * 60);
                    setShortBreakTime(values.short * 60);
                    setLongBreakTime(values.long * 60);
                    onClose();

                    //close the modal after applying


                }}>
                    <Form>

                        <InputWrapper>

                            <FormControl>
                                <label htmlFor="work">Work</label>
                                <Field name="work" min="1" max="60" />
                            </FormControl>

                            <FormControl>
                                <label htmlFor="short">Short break</label>
                                <Field name="short" min="1" max="60" />
                            </FormControl>

                            <FormControl>
                                <label htmlFor="long">Long break</label>
                                <Field name="long" min="1" max="60" />
                            </FormControl>

                        </InputWrapper>

                        <ButtonWrapper>
                            <ApplyButton type="submit">Apply</ApplyButton>
                        </ButtonWrapper>



                    </Form>
                </Formik>


            </ModalBody>
        </ModalContent>
    </Container>
}

export default ModalContainer;

const ButtonWrapper = styled.div`
display:flex;
justify-content: flex-end;
padding:2rem;`;


const ApplyButton = styled.button`

all:unset;
padding: 1rem 4rem;

font-size: 2rem;
 
background-color: #2E4F4F;

border-radius: 0.5rem;`

const InputWrapper = styled.div`
display: flex;
gap:2rem;
padding: 1rem;`;

const FormControl = styled.div`
flex: 1;

display:flex;
flex-direction: column;
color: black; 
gap:0.7rem;
label{
    font-size: 2rem;
}
input{
    color: white;
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid black;
    background: #0E8388;
}`;

const Container = styled.div`
height: 100vh;
width: 100vw;
position: absolute;
display: grid;
place-items: center;
z-index: 150;
`;

const ModalContent = styled(motion.div)`

width: 60rem;
height: 40rem;
background-color: #CBE4DE;

@media (max-width: 600px) {
    width: 90%;
    padding:1rem;
}
`;

const ModalHeader = styled.div`
color:black;
padding: 2rem;
display:flex;
justify-content: space-between;
border-bottom: 1px solid black;
`;

const ModalTitle = styled.h3`
font-size: 4rem;
`;

const ModalCloseButton = styled.div`
all : unset;
`;
const ModalBody = styled.div`
`;

