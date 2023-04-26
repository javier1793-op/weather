import React, { useEffect } from 'react'
import '../Css/widget.scss'
import { widget } from '../js/widget';
import {BsWind,BsCloudRainHeavy,BsSun} from "react-icons/bs";
import { FcCollapse} from "react-icons/fc";
import { MdOutlineSevereCold } from "react-icons/md";

const Widget = ({mod, title}) => {

const {sign}= widget()

const med= sign(mod)
const number=' -- '
  

  return (
   <div className="widgetContainer">
    {mod === '1'? <BsWind className='iconWind'/>:''}
    {mod === '2'? <BsCloudRainHeavy className='iconWind'/>:''}
    {mod === '3'? <BsSun className='iconWind'/>:''}
    {mod === '4'? <MdOutlineSevereCold className='iconWind'/>:''}
    <div className="widgetContent">
      <h3>{title}</h3>
      <div className="data">
        <h1>{`${number} ${med}`}</h1>
        <span><FcCollapse/></span>
      </div>
    </div>
   </div>
  )
}

export default Widget