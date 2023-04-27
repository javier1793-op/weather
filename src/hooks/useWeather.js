import { useEffect, useState } from "react";

export const useWeather = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState({
    hour:'',
    day:'',
    dayletters:'',
    monthletters:'',
    year:''
  })
  const [weather, setWeather] = useState({
    city: "",
    region: "",
    temperature: 0,
    conditionText: "",
    icon: "",
    wind_kph: "",
    precip_mm: "",
    humidity: "",
    sensation: "",
  });

  const api = `https://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_APY_KEY
  }&lang=es&q=`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (!city.trim())  throw { message: "El campo ciudad es obligatorio" };
      const resp = await fetch(api + city);
      const data = await resp.json();
      if (data.error) {
        throw { message: data.error.message };
      }
  
      console.log(data.location)
      setWeather({
        city: data.location.name,
        region: data.location.region,
        temperature:data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
        wind_kph: data.current.wind_kph,
        precip_mm: data.current.precip_mm,
        humidity: data.current.humidity,
        sensation: data.current.feelslike_c,
      })

    } catch (error) {
    console.log(error);
    
    }
   
  };

  const calcDay=()=>{
  const hora = new Date().getHours()
  const minuto = new Date().getMinutes()

  var horaImprimible = hora + " : " + minuto
  
  var diasSemana = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  var diaLetras = diasSemana[new Date().getDay()];

  var meses = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
  var mesLetras = meses[new Date().getMonth()];

  var diaMes = (new Date().getDate());
  var year = new Date().getFullYear();
  
  setDate({
    hour:horaImprimible,
    day:diaMes,
    dayletters:diaLetras,
    monthletters:mesLetras,
    year:year
  })

  }

setInterval(calcDay,60000)


useEffect(() => {
 calcDay()
}, [])

 
  


  return {
    handleSubmit,
    setCity,
    weather,
    date
  };
};
