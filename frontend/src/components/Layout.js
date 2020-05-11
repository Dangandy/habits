import React from "react";
import {
  useHistory,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import styled, { keyframes } from "styled-components";

// local imports
import logo from "../assets/technology.svg";

// styles
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 300ms ease-in;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;
`;

const TopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: fit-content;
  padding: 2em 7.125rem 1em;
  > div {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const Link = styled(RouterLink)`
  font-weight: ${(props) => (props.selected ? "600" : "unset")};
  text-decoration: none;
  color: #444444;
  margin: auto;

  :nth-child(n + 2) {
    :after {
      content: "|";
      margin: 0 1rem;
    }
  }

  :last-of-type {
    ::after {
      content: "";
    }
  }
`;

const Logo = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0 1rem;
`;

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
    <Container>
      <Header>
        <TopBar>
          <div>
            <Link selected={pathname === "/"} to="/">
              <Logo src={logo} />
            </Link>
            <Link selected={pathname === "/Workout"} to="/Workout">
              Workout
            </Link>
            <Link selected={pathname === "/Login"} to="/Login">
              Login
            </Link>
          </div>
        </TopBar>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}
export default Layout;
