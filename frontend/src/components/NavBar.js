// global imports
import React, { useState } from "react";
import {
  useHistory,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import tw from "twin.macro";
import styled from "@emotion/styled";

// local imports
import { ReactComponent as TechLogo } from "../assets/technology.svg";
import { ReactComponent as MenuLogo } from "../assets/menu.svg";
import { ReactComponent as CloseLogo } from "../assets/close.svg";

// styles forked off tailwindcss navbar tutorial
const Header = tw.header`sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3`;

const NavLinks = tw.div`flex items-center justify-between px-4 py-3 sm:p-0`;

const Link = styled(RouterLink)`
  svg {
    ${tw`w-auto h-8 hocus:opacity-50`}
  }
`;

const NavToggle = styled.div`
  ${tw`sm:hidden`}
  button {
    ${tw`block border-0 cursor-pointer`}

    svg {
      ${tw`w-6 h-6 fill-current hocus:text-gray-500`}
    }
  }
`;

const Nav = styled.nav`
  ${tw`px-2 pt-2 pb-4 sm:flex sm:p-0`}
  ${(props) => (props.openNav ? tw`block` : tw`hidden`)}
`;

const PrimaryLink = styled(RouterLink)`
  ${tw`block px-2 py-1 font-semibold text-gray-900 no-underline hover:underline hocus:text-gray-500`}
`;

const OtherLinks = styled(RouterLink)`
  ${tw`mt-1 block px-2 py-1 text-gray-900 font-semibold hocus:text-gray-500 hover:underline sm:items-center sm:mt-0 sm:ml-2 no-underline`}
`;

// component
function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const {
    location: { pathname },
  } = useHistory();

  return (
    <Header>
      <NavLinks>
        <Link selected={pathname === "/"} to="/">
          <TechLogo />
        </Link>
        <NavToggle>
          <button onClick={() => setOpenNav(!openNav)}>
            {openNav ? <CloseLogo /> : <MenuLogo />}
          </button>
        </NavToggle>
      </NavLinks>
      <Nav openNav={openNav}>
        <PrimaryLink selected={pathname === "/Workout"} to="/Workout">
          Workout
        </PrimaryLink>
        <OtherLinks>Daily Goals</OtherLinks>
        <OtherLinks selected={pathname === "/Login"} to="/Login">
          Login
        </OtherLinks>
      </Nav>
    </Header>
  );
}

export default Navbar;
