import styled from "styled-components";

import { useContext, useEffect, useState,useRef } from "react";
import { StateContext } from "../../../../StateProvider";
 

 

const Clock = () => {
 
    const { time, setTime, isActive, setIsActive, initTime } = useContext(StateContext);





    const [seconds, setSeconds] = useState(10);
    const [isRunning, setIsRunning] = useState(false);
    const audioRef = useRef(null);
    useEffect(() => {
        let intervalId;
    
        if (isRunning && time > 0) {
          intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }, 1000);
        } else if (time === 0) {
          // Play the sound when the countdown reaches 0
          if (audioRef.current) {
            audioRef.current.play();
          }
          // You can add additional actions or reset the timer here
          setIsRunning(false);
        }
    
        return () => clearInterval(intervalId);
      }, [isRunning, time]);
    
      const startTimer = () => {
        setIsRunning(true);
      };
    
      const resetTimer = () => {
        setIsRunning(false);
        setSeconds(time); // Set your desired initial countdown value
      };








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

    return (
    
    
    
    <ClockContainer> 

<audio ref={audioRef}>
        <source src='src/assets/alarm-tone.wav' type="audio/mp3" />
         
      </audio>





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