// global
import React, { useState } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

// styles
const Container = tw.div`relative`;

const Select = tw.select`block px-2 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500`;

const Arrow = tw.div`inset-y-0 absolute right-0 flex items-center px-2 py-3 text-gray-700 pointer-events-none`;

const SVG = tw.svg`fill-current h-4 w-4`;

function MultiSelect() {
  return (
    <Container>
      <Select name="Weekly" id="date">
        <option>Weekly</option>
        <option>Daily</option>
      </Select>
      <Arrow>
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </SVG>
      </Arrow>
    </Container>
  );
}

export default MultiSelect;
