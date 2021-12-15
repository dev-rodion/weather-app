import { useState, useEffect } from "react";
import "./App.scss";
import weatherImg from "./images/png/jdwi-cloudy-day.png";
import mountains from "./images/jpg/mountains.jpg";

// Icons
import { FiWind } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiCloudDrizzle } from "react-icons/fi";
import { FiCloudLightning } from "react-icons/fi";
import { FiCloudRain } from "react-icons/fi";
// import { FiCloudSnow } from "react-icons/fi";
import { FiCloud } from "react-icons/fi";
import { FiDroplet } from "react-icons/fi";

import { HiSearch } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

function InfoItem({ icon, value }) {
  return (
    <div className="item item_info">
      {icon}
      <p className="item__text">{value}</p>
    </div>
  );
}

function ForecastItem({ day, Icon, max, min }) {
  return (
    <div className="item item_forecast">
      <h5 className="item__title">{day}</h5>
      {/* <Icon className="item"/> */}
      <Icon />
      <p className="item__text">
        {max}° <span>{min}°</span>
      </p>
    </div>
  );
}

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
      <div className="weather">
        <div className="weather__inner">
          <div className="info">
            <form className="city">
              <HiOutlineLocationMarker className="city__icon" />
              <input
                className="city__input"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button className="city__btn" type="submit">
                <HiSearch className="city__icon" />
              </button>
            </form>

            <div className="info__img">
              <img src={weatherImg} alt="" />
            </div>

            <div className="info__main">
              <h1 className="info__temp">30°</h1>
              <h2 className="info__weather">Sunny</h2>
            </div>

            <div className="info__details">
              <InfoItem icon={<FiDroplet />} value={`60%`} />
              <InfoItem icon={<FiCloudRain />} value={`10%`} />
              <InfoItem icon={<FiWind />} value={`25 km/h`} />
            </div>
          </div>

          <div className="forecast">
            <ForecastItem day="Tue" Icon={FiSun} max="24" min="18" />
            <ForecastItem day="Wed" Icon={FiCloudDrizzle} max="23" min="19" />
            <ForecastItem day="Thu" Icon={FiCloudLightning} max="26" min="21" />
            <ForecastItem day="Fri" Icon={FiCloud} max="27" min="22" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
