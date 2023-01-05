import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Tarih from "./Tarih";
import Main from "./Main";
import axios from "axios";
import styled from "styled-components";

function App() {
  //State hooks
  const [APOD, setAPOD] = useState("");
  const [date, setDate] = useState(dateFormatter(new Date()));
  //Get Data
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=5dqIKcC152afcVcE1kaWF70uoMkXN5WlcXKV0jt5&date=" +
          date
      )
      .then((response) => {
        setAPOD(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [date]);

  //Select Date
  function dateChanger(tarih) {
    setDate(dateFormatter(tarih));
  }

  //Date Format
  function dateFormatter(tarih) {
    let gun = new Date(tarih);
    let gercekTarih = `${gun.getFullYear()}-${digitFormatter(
      gun.getMonth() + 1
    )}-${digitFormatter(gun.getDate())}`;
    return gercekTarih;
  }

  function digitFormatter(sayi) {
    let format = sayi < 10 ? `0${sayi}` : sayi;
    return format;
  }
  //Reset Date
  function dateReset() {
    setDate(dateFormatter(new Date()));
  }

  //JSX
  return (
    <div className="App">
      <Header src="./images/nasa.png" />
      <Tarih
        selectDate={dateChanger}
        resetDate={dateReset}
        date={date}
        dateFormatter={dateFormatter}
      />
      <Main data={APOD} />
    </div>
  );
}

export default App;
