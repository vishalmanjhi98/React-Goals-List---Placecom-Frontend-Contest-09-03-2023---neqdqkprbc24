import React from "react";

const ListOfGoals = ({goals}) => (
      <ul>
        {goals.map(({goal,by} ,i) => 
        (
          <li key ={i} >
          My goal is to goalName, by goalDeadline.
          </li>
        ))}
            
          
      </ul>

);

export default ListOfGoals;