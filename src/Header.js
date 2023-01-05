import React from "react";
import {
  StyledHeader,
  StyledHeaderTitle,
  StyledAppLogo,
} from "./styles/Header.styled";

export default function(props) {
  const { src } = props;
  return (
    <StyledHeader>
      <StyledAppLogo src={src}></StyledAppLogo>
      <StyledHeaderTitle>Astronomy Picture of the Day (APOD)</StyledHeaderTitle>
    </StyledHeader>
  );
}
