import React from "react";
import "../Css/home.scss";
import Search from "./Search";
import Widget from "./Widget";

const Home = ({setCity, handleSubmit,weather,date}) => {
  return (
    <div className="containerHome">
      <div className="headHome">
        <div className="date">
          <span>{`${date.monthletters}  ${date.year}`}</span>
          <span>{`${date.dayletters}  ${date.day}`}</span>
        </div>
        <Search setCity={setCity} handleSubmit={handleSubmit}/>
      </div>
      <h3>today overview</h3>
      <div className="contentHome">
        <div className="widget">
          <Widget 
          data={weather.wind_kph}
          mod={'1'}
          title={'wind Speed'}
          />
        </div>
        <div className="widget">
          <Widget 
          data={weather.precip_mm}
          mod={'2'}
          title={'Rain Chanse'}
          />
        </div>
        <div className="widget">
          <Widget 
          data={weather.humidity}
          mod={'3'} 
          title={'humidity'}
          />
        </div>
        <div className="widget">
          <Widget 
          data={weather.sensation}
          mod={'4'}
          title={'thermal sensation'}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
