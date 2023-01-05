import styled from "styled-components";
import React from "react";

export const StyledTarihContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  font-family: "Montserrat", sans-serif;
`;

export const StyledTarihContainerHeader = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StyledTarihInput = styled.input`
  width: 10%;
  margin: 1rem 0;
  background-color: white;
  border: 0.2rem solid blue;
  color: black;
  max-width: 300px;
`;

export const StyledCurrentDate = styled.div`
  display: flex;
  width: 90%;
  padding-bottom: 1rem;
  justify-content: center;
  ${(props) =>
    props.date === props.dateFormatter(new Date())
      ? `visibility: hidden`
      : `visibility: visible`}
`;

export const StyledCurrentDateButton = styled.button`
  background-color: white;
  border: none;
  color: black;
  max-width: 300px;
  width: 22%;
  font-size: 0.8rem;
  font-style: italic;
  text-decoration: underline blue 0.1rem solid;
  &:hover {
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    text-decoration: none;
    color: white;
    background-color: blue;
    width: auto;
    border-radius: 3%;
  }
`;
