import "./App.scss";
import weatherImg from "./images/png/jdwi-cloudy-day.png";

// Icons
import { FiWind } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiCloudDrizzle } from "react-icons/fi";
import { FiCloudLightning } from "react-icons/fi";
import { FiCloudRain } from "react-icons/fi";
import { FiCloudSnow } from "react-icons/fi";
import { FiCloud } from "react-icons/fi";
import { FiDroplet } from "react-icons/fi";



function InfoItem({ icon, value }) {
  return (
    <div className="item info__item">
      {icon}
      <p className="item__text">{value}</p>
    </div>
  );
}

function ForecastItem({ day, icon, max, min }) {
  return (
    <div className="item forecast__item">
      <h6 className="item__title">{day}</h6>
      {icon}
      <p className="item__text">
        {max}° <span>{min}°</span>
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="weather">
        <div className="weather__inner">
          <form className="city">
            <div className="city__icon">Marker Icon</div>
            <input className="city__input" type="text" value="Sydney" />
            <button type="submit">Find</button>
          </form>

          <div className="info">
            <div className="info__img">
              <img src={weatherImg} alt="Weather Icon" />
            </div>

            <div className="info__temp">
              <div className="info__temp">23°</div>
              <div className="info__weather">Partly Cloudy</div>
            </div>

            <div className="info__details">
              <InfoItem icon={<FiDroplet />} value="65%" />
              <InfoItem icon={<FiCloudRain />} value="10%" />
              <InfoItem icon={<FiWind />} value="23 km/h" />
            </div>
          </div>

          <div className="forecast">
            <ForecastItem day="Tue" icon={<FiSun />} max="24" min="18" />
            <ForecastItem day="Wed" icon={<FiCloudDrizzle />} max="23" min="19" />
            <ForecastItem day="Thu" icon={<FiCloudLightning />} max="26" min="21" />
            <ForecastItem day="Fri" icon={<FiCloud />} max="27" min="22" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
