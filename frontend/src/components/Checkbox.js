// global import
import React, { useState } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

// local import
import { ReactComponent as Checkmark } from "../assets/checkmark.svg";

// styles
const Container = tw.div`
hover:bg-blue-200 active:bg-blue-500 rounded-full
`;
const Toggle = styled(Checkmark)`
  ${({ check }) => (check ? tw`visible` : tw`invisible`)}
  ${tw`fill-current text-blue-500 active:text-white rounded-full`}
`;

function Checkbox({}) {
  const [check, setCheck] = useState(false);

  return (
    <Container onClick={() => setCheck(!check)}>
      <Toggle check={check} />
    </Container>
  );
}

export default Checkbox;
