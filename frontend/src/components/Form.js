import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

import Toggle from "./Toggle"
// styles
const Wrapper = tw.div`w-full max-w-xs`;

const Form = tw.form`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`;

const Row = tw.div`mb-4`;

const Label = tw.label`block text-gray-700 text-sm font-bold mb-2`;

const Input = tw.input`shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

const Row2 = tw.div`flex items-center justify-around`;

// MultiSelect Stuff
const MultiSelect = tw.div`relative`;
const Select = tw.button`block mb-1 appearance-none w-24 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;
const Icon = tw.div`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`;
const Svg = tw.svg`fill-current h-4 w-4`;
const Show = tw.div`absolute z-10 rounded`
const Selection = tw.div`block w-12 border  px-4 pr-8 leading-tight bg-white text-gray-700 text-xs py-3 border-solid border-gray-200 cursor-pointer focus:outline-none hover:bg-gray-200 hover:text-gray-900`

// end
const Button = tw.button`w-24 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;
const Reset = styled(Button)`
  ${tw`text-gray-700 bg-white hocus:bg-gray-200`}
`
export default () => {
  const options = ["Weekly", "Daily"];

  const [frequency, setFrequency] = useState("Weekly");
  const [check, setCheck] = useState(false);

  //show and lock
  const [showFrequency, setShowFrequency] = useState(false);
  const [lock, setLock] = useState(false);

  useEffect(()=>{
    if (lock) {
      setShowFrequency(true)
    } else {
      setShowFrequency(false)
    }
  }, lock)

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
            <MultiSelect
                onClick={() => setShowFrequency(!showFrequency)}
            >
              <Select >
              {frequency}</Select>
              <Icon>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </Svg>
              </Icon>
              {showFrequency &&
              <Show>
                {options.map(option =>
                <Selection onClick={() => {
                  setShowFrequency(!showFrequency)
                  setFrequency(option)
                }}>{option}</Selection>
                )}
              </Show>
              }
            </MultiSelect>
            <Toggle check={check} setCheck={setCheck}/>
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

