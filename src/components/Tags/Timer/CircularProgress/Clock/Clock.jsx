import styled from "styled-components";

import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../../../StateProvider";
 

 

const Clock = () => {
 
    const { time, setTime, isActive, setIsActive, initTime } = useContext(StateContext);

    //to make countdown we will use useEfect() hook 
    //using this we will decrease the value of time variable used in useState() hook
    useEffect(() => {
 
        //We stop the timer at 0 seconds, else it will go to -ve values
        if (isActive && time > 0) {

            //after every 1000ms means 1sec setTime() changes the time's value by 1

            const interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);

            return () => clearInterval(interval);
        }

        //Runs on the first render
        //And any time any dependency value changes
    }, [time, isActive]);
 
    //if false so true and vice versa
    const toggleClock = () => {
        setIsActive(!isActive);
    }
 
    var audio;
    //function for reset button
    const resetTime = () => {

        setTime(initTime);

        //setIsActive() is set to false so that the timer doesn't start after rest
        setIsActive(false);
    }
 
    const getTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
    }

    return (<ClockContainer> 
        <TimerText>
            {getTime(time)}
        </TimerText>
        <StartPauseButton onClick={toggleClock}>{isActive ? "Pause" : "Start"}</StartPauseButton>

        {/* Show the reset button when timer comes to 0  */}
 
        {time == 0 &&   <ResetButton onClick={resetTime}>RESET</ResetButton>}
    </ClockContainer>
    );
}

export default Clock;


//styled components
const ClockContainer = styled.div`
display: grid;
place-items: center;
`

const TimerText = styled.h3`
font-size: 10rem;
`;

const StartPauseButton = styled.button`
all:unset;
text-align: center;
font-size: 3rem;
text-transform: uppercase;
letter-spacing: 1rem;
`;

const ResetButton = styled(StartPauseButton)`
color: #E96479;

`