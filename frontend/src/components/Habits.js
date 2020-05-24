// global imports
import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

// local import
import Form from "../components/Form";

// styles
const Wrapper = tw.div`flex flex-col items-center lg:flex-row lg:justify-center mx-2 w-full`;

// Tables
const Table = tw.table`table-auto border bg-white w-full lg:w-1/2 justify-center mx-2`;
const TableHead = tw.thead`bg-blue-500 text-white`;
const TableHeading = tw.th`px-4 py-2`;
const Row = tw.td`border px-4 py-2`;
const RowHabits = styled(Row)`
  ${tw`w-32 break-words`}
`;

// components
function Habits() {
  const data = [
    "Vitamins",
    "Workout",
    "Meditate",
    "Make Bed",
    "Weekly Goals",
    "Duolingo",
    "This is a really really really long item",
  ];
  return (
    <Wrapper>
      <Form />
      <Table>
        <TableHead>
          <tr>
            <TableHeading>Habits</TableHeading>
            <TableHeading>Sun</TableHeading>
            <TableHeading>Mon</TableHeading>
            <TableHeading>Tue</TableHeading>
            <TableHeading>Wed</TableHeading>
            <TableHeading>Thu</TableHeading>
            <TableHeading>Fri</TableHeading>
            <TableHeading>Sat</TableHeading>
          </tr>
        </TableHead>
        <tbody>
          {data.map((d) => (
            <tr>
              <RowHabits>{d}</RowHabits>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <Row></Row>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}

export default Habits;
