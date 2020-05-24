// global imports
import React, { useState } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

// local imports
import Toggle from "./Toggle";
import Dropdown from "./Dropdown";

// styles from https://tailwindcss.com/components/forms/#app
const Wrapper = tw.div`w-full max-w-sm md:w-1/2 mx-2`;
const Form = tw.form`bg-white border rounded px-8 pt-6 pb-8 mb-4`;
const Row = tw.div`mb-4`;
const Label = tw.label`block text-gray-700  font-bold mb-2`;
const Input = tw.input`appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

// row with 2 items
const Row2 = tw.div`flex items-center justify-around`;

// end
const Button = tw.button`w-24 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;
const Reset = styled(Button)`
  ${tw`text-gray-700 bg-white hocus:bg-gray-200`}
`;

export default () => {
  const options = ["Weekly", "Daily"];

  const [frequency, setFrequency] = useState("Weekly");
  const [check, setCheck] = useState(false);

  //show and lock
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Label>Habit</Label>
          <Input placeholder="Enter your habit here" />
        </Row>
        <Row>
          <Label>Frequency</Label>
          <Row2>
            <Dropdown
              value={frequency}
              onChange={(v) => setFrequency(v)}
              options={options}
            />
            <Toggle check={check} setCheck={setCheck} />
          </Row2>
        </Row>
        <Row2>
          <Button>Submit</Button>
          <Reset>Reset</Reset>
        </Row2>
      </Form>
    </Wrapper>
  );
};
