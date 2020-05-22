// global
import React, { useEffect, useState, useRef } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

// styles
// code from here https://codesandbox.io/s/9o3lw5792w?file=/src/Dropdown.js
const Container = tw.div`relative`;

const Select = tw.button`block mb-1 appearance-none w-32 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;

const Icon = tw.div`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`;

const Svg = tw.svg`fill-current h-4 w-4`;

const Show = tw.div`absolute z-10 border rounded`;
const Selection = tw.div`block w-32 px-6 pr-8 leading-tight bg-white text-gray-700 py-3 border-solid border-gray-200 cursor-pointer focus:outline-none hover:bg-gray-200 hover:text-gray-900 first:border-b-2`;

function Dropdown({ value, options, placeholder = "Select", onChange }) {
  // variables
  const node = useRef();
  const [open, setOpen] = useState(false);

  // handlers
  const handleClickOutside = (e) => {
    console.log("clicking outside");
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    setOpen(false);
  };
  const handleChange = (selectedValue) => {
    onChange(selectedValue);
    setOpen(false);
  };

  // hooks
  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // return
  return (
    <Container ref={node}>
      <Select onClick={() => setOpen(!open)}>{value || placeholder}</Select>
      <Icon>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </Svg>
      </Icon>
      {open && (
        <Show>
          {options.map((opt) => (
            <Selection onClick={() => handleChange(opt)}>{opt}</Selection>
          ))}
        </Show>
      )}
    </Container>
  );
}

export default Dropdown;
