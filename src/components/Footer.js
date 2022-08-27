import React from "react";
import { SiLinktree } from "react-icons/si";
import { StyledFooter } from "./StyledContainer";
const Footer = () => {
  return (
    <StyledFooter>
      <span>
        <SiLinktree size={20} />
      </span>
      <span>Linktree</span>
    </StyledFooter>
  );
};

export default Footer;
