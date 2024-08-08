import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <p>
          This project was coded by{" "}
          <a
            href="https://maliekapdev-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Malie Kapelianis
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/MalieKapDev/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
