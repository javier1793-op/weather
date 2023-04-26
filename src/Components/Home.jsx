import React from "react";
import "../Css/home.scss";
import Search from "./Search";
import Widget from "./Widget";

const Home = ({setCity, handleSubmit,weather}) => {
  return (
    <div className="containerHome">
      <div className="headHome">
        <div className="date">
          <span>Abirl 2022</span>
          <span>Jueves 20</span>
        </div>
        <Search setCity={setCity} handleSubmit={handleSubmit}/>
      </div>
      <h3>today overview</h3>
      <div className="contentHome">
        <div className="widget">
          <Widget 
          mod={'1'}
          title={'wind Speed'}
          />
        </div>
        <div className="widget">
          <Widget 
          mod={'2'}
          title={'Rain Chanse'}
          />
        </div>
        <div className="widget">
          <Widget 
          mod={'3'} 
          title={'maxi temperature'}
          />
        </div>
        <div className="widget">
          <Widget 
          mod={'4'}
          title={'min temperature'}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
