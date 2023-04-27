import { useEffect } from 'react';
import '../src/Css/app.scss'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
import { useWeather } from './hooks/useWeather';

function App() {

  const{
    handleSubmit,
    setCity,
    weather,
    date
  }=useWeather();

  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar
        weather={weather}
        date={date}
        />
      </div>
      <div className="content">
        <Home 
        weather={weather}
        handleSubmit={handleSubmit}
        setCity={setCity}
        date={date}
        />
      </div>
      
    </div>
  )
}

export default App
