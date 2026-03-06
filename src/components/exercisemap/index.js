import React, { useState } from "react";
import DurationExercise from "./components/durationexercise";
import RepetitionExercise from "./components/RepetitionExercise";
import "./App.css";

// Main screen component that renders both types of exercises
//non-functional map component that renders the main screen with buttons for each exercise type and uses a switch statement.
function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Array of exercises
  const exercises = ["Jump Rope", "Leg Raises", "Running", "Push Ups", "Cycling", "Swimming"];

  return (
    <div className="App">
      <h1>Stay Fit</h1>

      {!selectedExercise ? (
        <div>
          {exercises.map((exercise, index) => (
            <button
              key={index}
              onClick={() => setSelectedExercise(exercise)}
            >
              {exercise}
            </button>
          ))}
        </div>

       ) : selectedExercise === "Jump Rope" || selectedExercise === "Running" ? (
        <DurationExercise name={selectedExercise} />
      ) : selectedExercise === "Leg Raises" || selectedExercise === "Push Ups" ? (
        <RepetitionExercise name={selectedExercise} />
      ) : (
        <distanceExercise name={selectedExercise} />
      )}
    </div>
  );
}

export default App;