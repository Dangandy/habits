import React from "react";
import tw from "twin.macro";

// local imports
import Navbar from "../components/NavBar";

// styles
const Content = tw.div`block flex w-full py-4 px-4`;

const Container = tw.div``;

function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
    </Container>
  );
}
export default Layout;
