import React from "react";

const data = [
  "write an article",
  "leetcode",
  "workout",
  "apply to 1 job app",
  "work on covid app",
  "read atomic habits",
  "read stats",
];
function Habits() {
  return (
    <ul>
      {data.map((habit) => (
        <li>{habit}</li>
      ))}
    </ul>
  );
}

export default Habits;
