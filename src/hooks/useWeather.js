import { useState } from "react";

export const useWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    localtime: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
    wind_kph: "",
    precip_mm: "",
    maxtemp_c: "",
    mintemp_c: "",
  });

  const api = `http://api.weatherapi.com/v1/current.json?key=${
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

      console.log(data);
    } catch (error) {
    console.log(error);
    
    }
  };

  return {
    handleSubmit,
    setCity,
    weather,
  };
};
