import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  column-gap: 1rem;
  font-size: calc(10px + 2vmin);
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  background-color: #282a3a;
`;

export const StyledAppLogo = styled.img`
  height: 15vh;
  pointer-events: none;
  max-width: 100%;
`;

export const StyledHeaderTitle = styled.h1`
  color: #eff5f5;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;
