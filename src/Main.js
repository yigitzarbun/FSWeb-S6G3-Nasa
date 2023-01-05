import React from "react";
import {
  StyledMainContainer,
  StyledMainTextsContainer,
  StyledAPODImg,
  StyledMainTextsH2,
  StyledMainTextsCopyright,
  StyledMainTextsDate,
  StyledMainTextsExplanation,
} from "./styles/Main.styled";

export default function Main(props) {
  const { data } = props;
  return (
    <StyledMainContainer>
      {data !== null ? <StyledAPODImg src={data.url}></StyledAPODImg> : null}
      <StyledMainTextsContainer>
        <StyledMainTextsH2>{data.title}</StyledMainTextsH2>
        <StyledMainTextsCopyright>{data.copyright}</StyledMainTextsCopyright>
        <StyledMainTextsDate>Captured on: {data.date}</StyledMainTextsDate>
        <StyledMainTextsExplanation>
          {data.explanation}
        </StyledMainTextsExplanation>
      </StyledMainTextsContainer>
    </StyledMainContainer>
  );
}
