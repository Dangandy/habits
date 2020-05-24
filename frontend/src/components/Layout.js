import React from "react";
import tw from "twin.macro";

// local imports
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// styles
const Content = tw.div`block w-full py-4 text-xs`;

const Container = tw.div``;

function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}
export default Layout;
