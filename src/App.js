import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <h1></h1>
        <Weather />
        <footer>
          This project was coded by Anna Kuzub and is{" "}
          <a
            href="https://github.com/annakuzub/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
