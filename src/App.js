import "./App.scss";
import weatherImg from "./images/png/jdwi-cloudy-day.png";
import mountains from "./images/jpg/mountains.jpg";

// Icons
import { FiWind } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiCloudDrizzle } from "react-icons/fi";
import { FiCloudLightning } from "react-icons/fi";
import { FiCloudRain } from "react-icons/fi";
import { FiCloudSnow } from "react-icons/fi";
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
  return (
    <div className="app" style={{background: `url(${mountains})`}}>
      <div className="weather">
        <div className="weather__inner">
          <div className="info">
            <form className="city">
              <HiOutlineLocationMarker className="city__icon" />
              <input className="city__input" type="text" value="Sydney" />
              <button className="city__btn" type="submit"><HiSearch className="city__icon" /></button>
            </form>
          
            <div className="info__img">
              <img src={weatherImg} alt="Weather Icon" />
            </div>

            <div className="info__main">
              <h1 className="info__temp">23°</h1>
              <h2 className="info__weather">Partly Cloudy</h2>
            </div>

            <div className="info__details">
              <InfoItem icon={<FiDroplet />} value="65%" />
              <InfoItem icon={<FiCloudRain />} value="10%" />
              <InfoItem icon={<FiWind />} value="23 km/h" />
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
