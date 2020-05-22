import React from "react";
import tw from "twin.macro";

// styles
const Wrapper = tw.div`flex flex-col`;

// toggle
const Label = tw.label`items-center inline-flex items-center cursor-pointer`;
const ToggleWrapper = tw.span`relative cursor-default`;
const SpanOuter = tw.span`block w-10 h-6 bg-gray-400 rounded-full shadow-inner`;
const ToggleText = tw.span`text-gray-900 ml-3 text-sm select-none`;

// unchecked
const Unchecked = tw.span`absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out`;
const SpanInput = tw.input`absolute opacity-0 w-0 h-0`;

// checked
const Checked = tw.span`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-purple-600 transform translate-x-full`;

// toggle component
function Toggle({ check, setCheck }) {
  return (
    <Wrapper>
      <Label>
        <ToggleWrapper onClick={() => setCheck(!check)}>
          <SpanOuter />
          {check ? (
            <Checked>
              <SpanInput type="checkbox" />
            </Checked>
          ) : (
            <Unchecked>
              <SpanInput type="checkbox" />
            </Unchecked>
          )}
        </ToggleWrapper>
        <ToggleText>Repeatable</ToggleText>
      </Label>
    </Wrapper>
  );
}

export default Toggle;
