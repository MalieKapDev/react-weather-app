import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import ClothingSuggestions from "./ClothingSuggestions";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="date-description">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="date-description text-capitalize">
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="weather-forecast-icon"
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 WeatherDetails">
          <ul>
            <li>
              Feels like: <span>{Math.round(props.data.feelsLike)}°C</span>
            </li>
            <li>
              Humidity: <span>{Math.round(props.data.humidity)}%</span>
            </li>
            <li>
              Wind: <span>{Math.round(props.data.wind)} km/h</span>
            </li>
          </ul>
        </div>
        <div className="ClothingSuggestions">
          <p>Suggestion:</p>
          <ClothingSuggestions
            temperature={props.data.temperature}
            uv={props.data.temperature}
            wind={props.data.wind}
            humidity={props.data.humidity}
            description={props.data.description}
          />
        </div>
      </div>
    </div>
  );
}
