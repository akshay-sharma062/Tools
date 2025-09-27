"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {

const [City , setCity] = useState("")
const [Weather , setWeather] = useState<any>(null);


const searchWeather = async (params:any) => {

        await axios.get(`https://api.weatherapi.com/v1/current.json?key=969eacd94fd14050846105856250602&q=${City}&aqi=yes`       
        ).then((res)=>{
          console.log(res.data.current)
          setWeather(res.data.current)

        }).catch((error)=>{
          console.log(error)
        })
  
}
  return (
    <>
    <h1>Weather APP</h1>
    <input type="text" 
    placeholder="Type your City" 
    onChange={(e)=> setCity(e.target.value)}
    
    />
    <button onClick={searchWeather}>search</button>
    <p>{City}</p>
    <p> {Weather?.temp_c}</p>
    <p>wind : {Weather?.wind_kph}</p>
    <img 
              src={`https:${Weather?.condition?.icon}`}
              alt="Weather Icon"
              className='font-medium shadow-xl shadow-black h-20  rounded-4xl'
            />
    <p>type : {Weather?.condition?.text}</p>
 
    </>
  );
}
