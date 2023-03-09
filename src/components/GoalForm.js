import React, { useState } from "react";

const GoalForm = ({ addGoal }) => {
  const [formData, setFormData] = useState({
    goal: "",
    by: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal(formData);
    setFormData({ goal: "", by: "" });
  };

  return (
    <>
      <h1>My Goals</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="goal"
          placeholder="Goal..."
          value={formData.goal}
          onChange={(e) =>
            setFormData({ ...formData, goal: e.target.value })
          }
        />
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={(e) => setFormData({ ...formData, by: e.target.value })}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default GoalForm;