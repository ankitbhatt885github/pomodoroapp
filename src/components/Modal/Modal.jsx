import styled from "styled-components";
import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";
import { AnimatePresence } from "framer-motion";

const Modal = ({isOpen , onClose}) => {
    return (
        <>
    {/* To make the exit animation of modal smooth we use Animation Presence  */}

    <AnimatePresence>


    { isOpen && (
        <>
            <Backdrop/> 
        <ModalContainer isOpen={isOpen} onClose={onClose}/> 
        </>


        )}

    </AnimatePresence>

        
        
        </>
    );
};

export default Modal;