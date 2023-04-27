import React, { useEffect, useRef, useState } from "react";
import "../Css/sidebar.scss";

const Sidebar = ({date,weather,setCity, handleSubmit}) => {
  const [temp, setTemp] = useState();
  const temp1 = weather.temperature;

  console.log(date)

  useEffect(() => {
    if (temp1 >= 18 && temp1 <= 25) return setTemp("templado");
    if (temp1 < 18) return setTemp("frio");
    if (temp1 > 25) return setTemp("caluroso");
  }, [temp1]);

  return (
    <>
      <div className={`container-sidebar ${temp}`}>
        <div className="content-sidebar">
          <div className="head-sidebar">
            <div className="city">
            <span>{weather.city}</span>
            <span>{weather.region}</span>
            </div>
            <span className="time">
              {`${date.hour} hr`}
            </span>
          </div>
          <div className="temp-sidebar">
          <div className="temp">
            <span>
              </span>
            <span><b>{weather.temperature}</b> °C</span>
            </div>
            <span className="state">
              {weather.conditionText}
            </span>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Sidebar;
