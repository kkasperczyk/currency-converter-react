import React from "react";
import { StyledHeader, StyledHeaderTitle } from "./styled";

const Header = ({ title }) => (
  <StyledHeader>
    <StyledHeaderTitle>{title}</StyledHeaderTitle>
  </StyledHeader>
);

export default Header;
