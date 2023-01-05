import styled from "styled-components";
export const StyledMainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  margin: 0 auto;
  column-gap: 5rem;
  @media (width < 1000px) {
    dislay: flex;
    flex-direction: column;
  }
`;

export const StyledMainTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  border: 0.3rem solid black;
  box-sizing: border-box;
`;

export const StyledAPODImg = styled.img`
  width: 50%;
  @media (width < 1000px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const StyledMainTextsH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

export const StyledMainTextsCopyright = styled.p`
  font-family: "Montserrat", sans-serif;
  color: blue;
`;

export const StyledMainTextsDate = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-size: 0.7rem;
`;

export const StyledMainTextsExplanation = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #2c3639;
`;
