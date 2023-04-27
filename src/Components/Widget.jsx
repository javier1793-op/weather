import React, { useEffect } from 'react'
import '../Css/widget.scss'
import { widget } from '../js/widget';
import {BsWind,BsCloudRainHeavy,BsSunFill} from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { FcCollapse} from "react-icons/fc";
import { MdOutlineSevereCold } from "react-icons/md";

const Widget = ({mod, title, data}) => {

const {sign}= widget()

const med= sign(mod)
  

  return (
   <div className="widgetContainer">
    {mod === '1'? <BsWind className='iconWind'/>:''}
    {mod === '2'? <BsCloudRainHeavy className='iconWind'/>:''}
    {mod === '3'? <WiHumidity className='iconWind'/>:''}
    {mod === '4'? <BsSunFill className='iconWind'/>:''}
    <div className="widgetContent">
      <h3>{title}</h3>
      <div className="data">
        <h1>{`${data === ''?'--': data} ${med}`}</h1>
        <span><FcCollapse/></span>
      </div>
    </div>
   </div>
  )
}

export default Widget