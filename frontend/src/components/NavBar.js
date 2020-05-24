// global imports
import React, { useState } from "react";
import { useHistory, Link as RouterLink } from "react-router-dom";
import tw from "twin.macro";
import styled from "@emotion/styled";

// local imports
import { ReactComponent as TechLogo } from "../assets/technology.svg";
import { ReactComponent as MenuLogo } from "../assets/menu.svg";

// styles forked off tailwindcss navbar tutorial
// made to look like facebook header (May 22, 2020)
const Header = tw.header`sticky top-0 left-0 lg:flex lg:justify-between lg:items-center bg-white border-b-2 w-full`;

const NavLinks = tw.div`py-1 px-4 flex items-center justify-between border-gray-300 h-10`;

const Logo = styled(TechLogo)`
  ${tw`w-auto h-8 border-0`}
`;

const NavToggle = tw.div`lg:hidden`;

const Button = styled.button`
  ${tw`block border-0 focus:outline-none`}
  ${({ openNav }) => openNav && tw`border-b-4 border-blue-500`}
`;

const Nav = styled.nav`
  ${tw`px-2 pt-2 pb-4 lg:flex lg:p-0`}
  ${({ openNav }) => (openNav ? tw`block bg-gray-100` : tw`hidden`)}
`;

const Link = styled(RouterLink)`
  ${tw`block px-2 py-1 text-gray-900 rounded hocus:bg-gray-300`}
  ${({ selected }) => selected && tw`text-teal-500`}
`;

const Border = styled.div`
  ${tw`h-10 py-1 mx-2`}
  ${({ selected }) => selected && tw`border-b-4 border-teal-500`}
`;

const Menu = styled(MenuLogo)`
  ${tw`w-10 h-10 fill-current hocus:bg-gray-300 px-1 py-1 rounded`}
  ${({ openNav }) => openNav && tw`text-teal-500 `}
`;

// component
function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const navigationHeaders = ["Workout", "Goals", "Login"];
  const {
    location: { pathname },
  } = useHistory();

  return (
    <Header>
      <NavLinks>
        <Link selected={pathname === "/"} to="/">
          <Logo />
        </Link>
        <NavToggle>
          <Button openNav={openNav} onClick={() => setOpenNav(!openNav)}>
            <Menu openNav={openNav} />
          </Button>
        </NavToggle>
      </NavLinks>
      <Nav openNav={openNav}>
        {navigationHeaders.map((header) => (
          <Border selected={pathname === `/${header}`}>
            <Link selected={pathname === `/${header}`} to={`/${header}`}>
              {header}
            </Link>
          </Border>
        ))}
      </Nav>
    </Header>
  );
}

export default Navbar;
