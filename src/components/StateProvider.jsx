import React, { createContext, useEffect, useState } from "react";

export const StateContext = createContext();


const StateProvider = ({ children }) => {

    //three states for three different timers

    //initially for 25 minutes
    const [workTime, setWorkTime] = useState(25 * 60);

    //5 minutes initially
    const [shortBreakTime, setShortBreakTime] = useState(5 * 60);


    const [longBreakTime, setLongBreakTime] = useState(30 * 60);

    //to store initial value of time
    const [initTime, setInitTime] = useState(0);
 
    const [activeTag, setActiveTag] = useState(0);

    const [progress, setProgress] = useState(70);

    const [time, setTime] = useState(120);

    //Now time should change according to the tab means each tab has its own value of time for timer

    //activeTag will have index of the tab
    useEffect(() => {
        switch (activeTag) {
            case 0:
                setTime(workTime);
                setInitTime(workTime);
                break;

            case 1:
                setTime(shortBreakTime);
                setInitTime(shortBreakTime);
                break;

            case 2:
                setTime(longBreakTime);
                setInitTime(longBreakTime);
                break;

            default:
                break;
        }

    }, [activeTag,workTime,shortBreakTime,longBreakTime]);


    //for the pause button
    const [isActive, setIsActive] = useState(false);

    return <StateContext.Provider value={{
        activeTag, setActiveTag,
        progress, setProgress,
        time, setTime,
        isActive, setIsActive, initTime, setInitTime,workTime,setWorkTime,shortBreakTime,setShortBreakTime,longBreakTime,setLongBreakTime
    }}>{children}</StateContext.Provider>
}

export default StateProvider;