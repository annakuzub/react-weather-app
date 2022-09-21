import react from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.desription}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.info.icon} />
            <span className="temperature">
              {Math.round(props.info.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind:{props.info.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
