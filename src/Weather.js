import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import RandomQuote from "./RandomQuote";
import NewsHeadlines from "./NewsHeadlines";

import { Circles } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
      country: response.data.country,
    });
  }

  function search() {
    const apiKey = "00a47373885c7bo1ft4286f1006d1f62";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="items-center mb-3 mt-2">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="search-form-input"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="search-button" />
              </div>
            </div>
          </form>
        </div>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <div className="NewsHeadlines">
          <NewsHeadlines country={weatherData.country} />
        </div>
        <div className="random-quote">
          <RandomQuote city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        <div className="flex items-center mb-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="search-form-input"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="search-button" />
              </div>
            </div>
          </form>
        </div>

        <div className="row Loading-circles">
          <Circles
            height="100"
            width="100"
            color="#4756ca"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    );
  }
}
