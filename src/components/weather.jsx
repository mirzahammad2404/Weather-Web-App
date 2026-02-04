import React, { useEffect, useRef, useState } from "react";
import "./weather.css";
import search_icon from "../assets/search.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
  };
  const search = async (city) => {
    if (city === "") {
      alert("Please enter a city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("error in fetching data");
    }
  };

  useEffect(() => {
    search("London");
  }, []);
  return (
    <div className="weather">
      <div className="searchbar">
        <input ref={inputRef} type="text" placeholder="Search"></input>
        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        ></img>
      </div>
      <img src={weatherData.icon} className="weathericon"></img>
      <p className="temperature">{weatherData.temperature}*C</p>
      <p className="location">{weatherData.location}</p>
      <div className="weatherdata">
        <div className="col">
          <img src={humidity}></img>
          <div>
            <p>{weatherData.humidity} %</p>
            <span>humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind}></img>
          <div>
            <p>{weatherData.windSpeed} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
