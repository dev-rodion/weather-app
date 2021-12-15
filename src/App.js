import { useState, useEffect } from "react";
import "./App.scss";
import mountains from "./images/jpg/mountains.jpg";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});

  const [city, setCity] = useState("Odesa");
  const [coord, setCoord] = useState({ lat: 0, lon: 0 });

  const apiKey = "79575682aba862a6a487f61e3520e0e4";
  const apiCall1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const apiCall2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;

  useEffect(async () => {
    await fetch(apiCall1)
      .then((res) => res.json())
      .then((data) => {
        setCoord({ lat: data.coord.lat, lon: data.coord.lon });
      });

    await fetch(apiCall2)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="app" style={{ background: `url(${mountains})` }}>
      <Weather data={data} city={city} setCity={setCity} />
    </div>
  );
}

export default App;
