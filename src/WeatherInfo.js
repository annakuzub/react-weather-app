import react from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
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
            <div className="float-left">
              <WeatherIcon code={props.info.icon} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.info.temperature} />
            </div>
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
