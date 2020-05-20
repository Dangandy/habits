import React, { useState } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

// local import
import MultiSelect from "../components/Multiselect";
import Form from "../components/Form";

// dummy data
const data = [
  "write an article",
  "leetcode",
  "workout",
  "apply to 1 job app",
  "work on covid app",
  "read atomic habits",
  "read stats",
];

// styles from https://tailwindcss.com/components/forms/#app

// components
function Habits() {
  const [type, setType] = useState("Weekly");
  return (
    <>
      <Form />
    </>
  );
}

export default Habits;
