import React from 'react'

function InfoItem({ icon, value }) {
  return (
    <div className="item item_info">
      {icon}
      <p className="item__text">{value}</p>
    </div>
  );
}

export default InfoItem
