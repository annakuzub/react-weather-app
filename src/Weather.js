import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponce(responce) {
    setWeatherData({
      temperature: responce.data.main.temp,
      humidity: responce.data.main.humidity,
      city: responce.data.name,
      loaded: true,
      date: "Friday 15:00",
      wind: responce.data.wind.speed,
      icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      desription: responce.data.westher[0].description,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.desription}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.desription}
                className="float-left"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "237d6b594df6d6326579fae6044c4fb7";
    let city = "Kyiv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.Defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponce);
    return "Loading...";
  }
}
