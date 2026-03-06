import React from "react";

// This component is for exercises that are based on distance (e.g. Cycling, Swimming, etc.) 
// Return button to go back to the main screen
// Exercise name is displayed at the top of the screen and user can input distance in miles and submit it (functionality for submit button can be added later)
function DistanceExercise({ name }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Track how far you go!</p>

      <label>Distance (miles): </label>
      <input type="number" placeholder="Enter distance" />

      <button>Submit</button>
    
      <button onClick={() => window.location.reload()}>Return</button>;
    </div>
  );
}

export default DistanceExercise;