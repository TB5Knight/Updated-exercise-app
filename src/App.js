import React, { useState } from "react";
import DurationExercise from "./components/durationexercise";
import RepetitionExercise from "./components/RepetitionExercise";
import DistanceExercise from "./components/DistanceExercise";
import "./App.css";

//chatgpt reference for help with the switch statement: https://chatgpt.com/?oai-dm=1

// Main screen component that renders both types of exercises
function App() {
//useState to track the current exercise type (duration or repetition)
const [selectedExercise, setSelectedExercise] = useState(null);

//the component should render that exercise's component based on the type, with the three exercise name at the top of the screen.
//exercise name is passed as a prop to the exercise component and displayed at the top of the screen
  return (
    <div className="App">
      <h1>Stay Fit</h1>
      {!selectedExercise ? (
        <div>
          <button onClick={() => setSelectedExercise("Push Ups")}>
           Push Ups
          </button>

          <button onClick={() => setSelectedExercise("Jump Rope")}>
           Jump Rope
          </button>

          <button onClick={() => setSelectedExercise("Leg Raises")}>
            Leg Raises 
          </button>

          <button onClick={() => setSelectedExercise("Running")}>
            Running
          </button>

          <button onClick={() => setSelectedExercise("Cycling")}>
            Cycling
          </button>

          <button onClick={() => setSelectedExercise("Swimming")}>
            Swimming
          </button>
        </div>

//switch statement to render the appropriate component based on the selected exercise type
      ) : selectedExercise === "Jump Rope" || selectedExercise === "Running" ? (
        <DurationExercise name={selectedExercise} />
      ) : selectedExercise === "Leg Raises" || selectedExercise === "Push Ups" ? (
        <RepetitionExercise name={selectedExercise} />
      ) : (
        <DistanceExercise name={selectedExercise} />
      )}
    </div>

  );
}
//map function to render the appropriate component based on the selected exercise type

export default App;