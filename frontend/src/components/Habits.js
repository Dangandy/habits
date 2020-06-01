// global imports
import React, { useState } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

// local import
import Form from "../components/Form";
import Checkbox from "../components/Checkbox";

// styles
const Wrapper = tw.div`flex flex-col items-center lg:flex-row lg:justify-center mx-2 w-full`;

// Tables
const Table = tw.table`select-none table-auto border bg-white w-full lg:w-1/2 justify-center mx-2`;
const TableHead = tw.thead`bg-blue-500 text-white`;
const TableHeading = tw.th`px-2 py-2`;
const Column = styled.td`
  ${({ heading }) => (heading ? tw`px-4 py-2` : tw`px-1 py-1`)}
  ${tw`border break-words`}
`;
const Row = tw.tr`even:bg-gray-200`;

// components
function Habits() {
  const [data, setData] = useState([
    "Vitamins",
    "Workout",
    "Meditate",
    "Make Bed",
    "Weekly Goals",
    "Duolingo",
    "This is a really really really long item",
  ]);

  const handleSubmit = (input, setInput) => {
    if (input) {
      setData([...data, input]);
      setInput("");
    }
  };

  const headings = ["Habits", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Wrapper>
      <Form handleSubmit={handleSubmit} />
      <Table>
        <TableHead>
          <tr>
            {headings.map((heading) => (
              <TableHeading>{heading}</TableHeading>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {data.map((d) => (
            <Row>
              {headings.map((heading) => (
                <Column heading={heading == "Habits"}>
                  {heading == "Habits" ? d : <Checkbox />}
                </Column>
              ))}
            </Row>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}

export default Habits;
