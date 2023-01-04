import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Baslik from "./Baslik";
import Tarih from "./Tarih";
import axios from "axios";

function App() {
  const [APOD, setAPOD] = useState("");
  const [date, setDate] = useState("");

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

  function dateChanger(tarih) {
    let gun = new Date(tarih);
    let gercekTarih = `${gun.getFullYear()}-${gun.getMonth() +
      1}-${gun.getDate()}`;
    setDate(gercekTarih);
  }

  function dateReset() {
    setDate("");
  }

  return (
    <div className="App">
      <Header src="./images/nasa.png" />
      <Tarih className="Tarih" selectDate={dateChanger} resetDate={dateReset} />
      <Baslik baslik="NASA Astronomy Picture of the Day (APOD)" />
      <div className="NASA-section">
        {APOD !== null ? <img className="APODImg" src={APOD.url}></img> : null}
        <div className="NASA-texts">
          <h2>{APOD.title}</h2>
          <p>{APOD.copyright}</p>
          <p>{APOD.date}</p>
          <p>{APOD.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
