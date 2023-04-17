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
        
        <div className="head-sidebar">
            aca la ciudad y lo demas
        </div>
        <div className="content-sidebar">
            aca la temperatura
        </div>
        </div>
    </>
  );
};

export default Sidebar;
