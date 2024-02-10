import { useState } from "react"
import './App.css'

const App = () => {
  const[search,setSearch]=useState("")
  const[weather,setWeather]=useState({})
  const api={
    key:"e89bc024ca3fa26e18bc5290df1eb563",
    base:"https://api.openweathermap.org/data/2.5/weather"
  }
  function handleSearch(){
    fetch(`${api.base}?q=${search}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(d=>setWeather(d))
    

  }
  return (
    <div className="container">
      <section className="sec">
        <h1>Weather App</h1>
        <input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Enter Your City"/>
        <button onClick={handleSearch}>Search</button>
        {(typeof weather.main!=="undefined")?(
          <div className="p1">
            <p>{weather.name}</p>
            <p>{weather.main.temp}</p>
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
            
          </div>
          
        ):("Not Found")}
      </section>
    </div>
  )
}

export default App
