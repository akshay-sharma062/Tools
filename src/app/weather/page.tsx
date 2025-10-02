"use client";

import axios from "axios";
import { useState } from "react";

export default function WeatherApp() {
  const [City, setCity] = useState("");
  const [Weather, setWeather] = useState<any>(null);

  const searchWeather = async (params: any) => {
    await axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=969eacd94fd14050846105856250602&q=${City}&aqi=yes`
      )
      .then((res) => {
        console.log(res.data.current);
        setWeather(res.data.current);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-8 animate-bounce">
        🌤️ Weather App
      </h1>
  
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchWeather(e);
        }}
        className="w-full max-w-lg"
      >
        <div className="relative">
          <input
            type="search"
            id="default-search"
            onChange={(e) => setCity(e.target.value)}
            className="block w-full p-4 ps-12 text-lg text-gray-900 border border-gray-300 rounded-2xl shadow-lg outline-none bg-white/80 focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-500 transition-all duration-500"
            placeholder="🔎 Search your City..."
            required
          />
          <button
            type="submit"
            className="absolute end-2.5 bottom-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl text-sm px-5 py-2 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Search
          </button>
        </div>
      </form>
  
      {/* Weather Card */}
      {Weather && (
        <div className="mt-10 w-full max-w-md bg-white/90 rounded-3xl shadow-2xl p-6 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-purple-800/50">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {City.toUpperCase()}
          </h2>
          <div className="flex justify-center">
            <img
              src={`https:${Weather?.condition?.icon}`}
              alt="Weather Icon"
              className="h-24 w-24 drop-shadow-lg animate-pulse"
            />
          </div>
          <p className="text-4xl font-extrabold text-purple-700 mt-4">
            {Weather?.temp_c}°C
          </p>
          <p className="text-lg text-gray-700 mt-2 capitalize">
            {Weather?.condition?.text}
          </p>
  
          <div className="flex justify-around mt-6">
            <div className="bg-purple-100 rounded-xl px-4 py-2 shadow">
              <p className="text-sm text-gray-600">💨 Wind</p>
              <p className="text-lg font-bold">{Weather?.wind_kph} km/h</p>
            </div>
            <div className="bg-blue-100 rounded-xl px-4 py-2 shadow">
              <p className="text-sm text-gray-600">🌡️ Feels</p>
              <p className="text-lg font-bold">{Weather?.feelslike_c}°C</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
  
  );
}
