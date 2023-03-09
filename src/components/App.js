import React, { useState } from "react";
import "../styles/App.css";
import GoalForm from "./GoalForm";
import ListOfGoals from "./ListOfGoals";

const App = () => {
  const [allGoals, setAllGoals] = useState([]);

  const addGoal = (newGoal) => {
    setAllGoals([...allGoals, newGoal]);
  };

  return (
    <div id="main">
      <GoalForm addGoal={addGoal} />
      <ListOfGoals goals={allGoals} />
    </div>
  );
};

export default App;