import React from "react";
import {
  StyledTarihContainer,
  StyledTarihInput,
  StyledCurrentDate,
  StyledCurrentDateButton,
  StyledTarihContainerHeader,
} from "./styles/Tarih.styled";

export default function Tarih(props) {
  const { selectDate, resetDate, date, dateFormatter } = props;
  console.log(date);
  return (
    <StyledTarihContainer>
      <StyledTarihContainerHeader>
        Select a new date to view the APOD
      </StyledTarihContainerHeader>
      <StyledTarihInput
        type="date"
        onChange={(event) => selectDate(event.target.value)}
        value={date}
      ></StyledTarihInput>
      <StyledCurrentDate date={date} dateFormatter={dateFormatter}>
        <StyledCurrentDateButton onClick={resetDate}>
          See today's APOD
        </StyledCurrentDateButton>
      </StyledCurrentDate>
    </StyledTarihContainer>
  );
}
