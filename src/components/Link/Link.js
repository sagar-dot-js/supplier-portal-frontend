import React from "react";
import { LinkWrapper } from "./Link.style";

const Link = ({ children, color, border, href, ...restProps }) => {
  return (
    <LinkWrapper
      href={href}
      color={color}
      border={border}
      {...restProps}
    >
      {children}
    </LinkWrapper>
  );
};

export default Link;
