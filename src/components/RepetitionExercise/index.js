import React, { useState } from "react";

// This component is for exercises that are based on repetitions (e.g. Leg raises)
function RepetitionExercise({ name }) {
//useState for tracking the number of repetitions
  const [reps, setReps] = useState(0);

  // Function to handle incrementing the repetitions
let incrementReps = () => {
  setReps(reps + 1);
  };
 //reps, reset and return button to set repetitions back to 0
  return (
    <div>
      <h2>{name}</h2>
      <p>Reps: {reps}</p>
      <button onClick={incrementReps}>Add Rep</button>
      <button onClick={() => setReps(0)}>Reset</button>
      <button onClick={() => window.location.reload()}>Return</button>
    </div>
   
  );
}

export default RepetitionExercise;