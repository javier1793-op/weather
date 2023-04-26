import React, { useEffect, useRef, useState } from "react";
import "../Css/sidebar.scss";

const Sidebar = () => {
  const [temp, setTemp] = useState();
  const temp1 = 22;

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
            <span>Resistencia</span>
            <span>Chaco</span>
            </div>
            <span className="time">
              12:00 AM
            </span>
          </div>
          <div className="temp-sidebar">
          <div className="temp">
            <span>icono</span>
            <span><b>15</b> °C</span>
            </div>
            <span className="state">
              Soleado
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
