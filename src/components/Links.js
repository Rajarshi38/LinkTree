import React from "react";
import links from "../lib/links";
import { LinkBody } from "./StyledContainer";

const Links = () => {
  return (
    <>
      {links.map((link) => (
        <LinkBody key={link.id} href={link.link}>
          {link.name}
        </LinkBody>
      ))}
    </>
  );
};

export default Links;
