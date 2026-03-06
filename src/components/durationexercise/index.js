import React, { useState, useEffect } from "react";


// This component is for exercises that are based on duration (e.g. Jump rope, Running, etc.)
//selected exercise name is passed as a prop to this component and displayed at the top of the screen
const DurationExercise = ({ name }) => {
//useState for tracking the duration in seconds
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect to handle the timer
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // 00:00 stop watch format for duration display 
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }
 

  // Start/Stop button to toggle the timer and reset button to set duration back to 0  
  //return button back to main screen when user clicks return button
  //exercise name is displayed at the top of the screen
  return (
    <div>
      <h2>{name}</h2>
      <p>Time: {formatDuration(duration)}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={() => setDuration(0)}>Reset</button>
      <button onClick={() => window.location.reload()}>Return</button>
    </div>
  );
}
export default DurationExercise;