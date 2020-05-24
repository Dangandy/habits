import React from "react";
import tw from "twin.macro";

// logos
import { ReactComponent as GithubLogo } from "../assets/github.svg";
import { ReactComponent as LinkedInLogo } from "../assets/linkedin.svg";

const Wrapper = tw.div`flex flex-col text-center`;

const Links = tw.div`flex flex-row items-center justify-center`;

const Svg = tw.div`w-12 h-12 px-2 py-2 hocus:bg-gray-300 rounded`;

function Footer() {
  const emoji = (
    <span aria-label="heart" role="img">
      ❤️
    </span>
  );
  return (
    <Wrapper>
      <span>Made with {emoji} by Andy. Follow him below:</span>
      <Links>
        <Svg>
          <a href="https://github.com/Dangandy">
            <GithubLogo />
          </a>
        </Svg>
        <Svg>
          <a href="https://www.linkedin.com/in/andy-dang-266876130/">
            <LinkedInLogo />
          </a>
        </Svg>
      </Links>
    </Wrapper>
  );
}

export default Footer;
