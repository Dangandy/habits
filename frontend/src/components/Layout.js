import React from "react";
import {
  useHistory,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import styled, { keyframes } from "styled-components";

// local imports
import Navbar from "../components/NavBar";

// styles
const Content = styled.div`
  display: block;
  flex: 1;
  width: 100%;
`;

function Layout({ children }) {
  const {
    location: { pathname },
  } = useHistory();

  return (
    <>
      <Navbar />
      <Content>{children}</Content>
    </>
  );
}
export default Layout;
