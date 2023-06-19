import { useContext, useEffect, useState } from "react";
import styled


from "styled-components";
import Clock from "./Clock/Clock";
import { StateContext } from "../../../StateProvider";
const CircularProgress = () => {

    const {progress,setProgress,time,initTime} = useContext(StateContext);


    //useEffect() is dependant on the variable passed in the dependancy array 
    
    useEffect(() => {

        //we want to increase the progress by some factor
        setProgress(time/ (initTime/100));
    },[setProgress,time])






    return (
        <OuterCircle progress={progress}>
            <InnerCircle >
                <Clock></Clock>
            </InnerCircle>
        </OuterCircle>
    );
}

export default CircularProgress;

//styled components for Outer and Inner Circle
const OuterCircle = styled.div`
width: 35rem;
height: 35rem;

margin: 2rem auto;
border-radius: 50%;
display: grid;
place-items: center;

// We can change the value of this gradient by javascript and it will look like timer 

background: conic-gradient(#0E8388 ${({progress}) => progress}%, transparent ${({progress}) => progress}%);
`

const InnerCircle = styled.div`
width: 33rem;
height: 33rem;
background: #2E4F4F;

border-radius: 50%;
display: grid;
place-items: center;
`