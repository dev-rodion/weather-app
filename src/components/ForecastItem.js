import React from 'react'

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

export default ForecastItem
