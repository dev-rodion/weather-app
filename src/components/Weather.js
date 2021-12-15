import React from "react";
import weatherImg from "../images/png/jdwi-cloudy-day.png";
import { FiCloud, FiCloudDrizzle, FiCloudLightning, FiCloudRain, FiDroplet, FiSun, FiWind } from "react-icons/fi";
import { HiOutlineLocationMarker, HiSearch } from "react-icons/hi";
import ForecastItem from "./ForecastItem";
import InfoItem from "./InfoItem";

function Weather({city, setCity}) {
  return (
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
  );
}

export default Weather;
