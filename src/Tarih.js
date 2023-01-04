import React from "react";
export default function Tarih(props) {
  const { selectDate, resetDate } = props;
  return (
    <div className="tarihSection">
      <h4>Choose a Date</h4>
      <p>Select a new date to view the APOD</p>
      <input
        type="date"
        onChange={(event) => selectDate(event.target.value)}
      ></input>
      <div className="currentDate">
        <button onClick={resetDate}>Today</button>
      </div>
    </div>
  );
}
