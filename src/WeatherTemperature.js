import react, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showtoFarinheit(event) {
    event.preventDefault();
    setUnit("farinheit");
  }
  function showtoCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function farinheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|{" "}
          <a href="/" onClick={showtoFarinheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farinheit())}</span>
        <span className="unit">
          <a href="/" onClick={showtoCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
