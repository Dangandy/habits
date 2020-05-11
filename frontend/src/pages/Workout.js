import React, { useState } from "react";

import Layout from "../components/Layout";

const data = [
  { "Push Ups": ["R10"] },
  { "Shoulder Press": ["R10"] },
  { "Tricep Raise": ["R15"] },
  { "Bicep Curl": ["R20"] },
  { "Ab Rolls": ["20"] },
  { "Pistol Squats": ["10"] },
];
function Workout() {
  return (
    <Layout>
      <ul>
        {data.map((excercise) => {
          console.log(Object.keys(excercise));
          return (
            <li>
              {Object.keys(excercise)} : {Object.values(excercise)}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
export default Workout;
