import React from "react";
import "./SeasonDisplay.css";
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr! It's chilly",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
export default function SeasonDisplay({ lat }) {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon icon-left massive ${iconName}`} />
      <h2>{text}</h2>
      <i className={`icon icon-right massive ${iconName}`} />
    </div>
  );
}
