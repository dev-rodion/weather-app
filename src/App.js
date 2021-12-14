import "./App.scss";
import weatherImg from "./images/png/jdwi-cloudy-day.png";

function InfoItem({ icon, alt, value }) {
  return (
    <div className="item info__item">
      <img className="item__img" src={icon} alt={alt} />
      <p className="item__text">{value}</p>
    </div>
  );
}

function ForecastItem({ day, weather, max, min }) {
  const icon = "";

  return (
    <div className="item forecast__item">
      <h6 className="item__title">{day}</h6>
      <img className="item__img" src={icon} alt={weather} />
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
            <button type="submit">Find Icon</button>
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
              <InfoItem icon="" alt="Img" value="65%" />
              <InfoItem icon="" alt="Img" value="10%" />
              <InfoItem icon="" alt="Img" value="23 km/h" />
            </div>
          </div>

          <div className="forecast">
            <ForecastItem day="Tue" weather="Img" max="24" min="18" />
            <ForecastItem day="Wed" weather="Img" max="23" min="19" />
            <ForecastItem day="Thu" weather="Img" max="26" min="21" />
            <ForecastItem day="Fri" weather="Img" max="27" min="22" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
