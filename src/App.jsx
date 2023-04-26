import { useEffect } from 'react';
import '../src/Css/app.scss'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
import { useWeather } from './hooks/useWeather';

function App() {

  const{
    handleSubmit,
    setCity,
    weather
  }=useWeather();

  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar
        weather={weather}
        />
      </div>
      <div className="content">
        <Home 
        weather={weather}
        handleSubmit={handleSubmit}
        setCity={setCity}
        />
      </div>
      
    </div>
  )
}

export default App
