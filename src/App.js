import React, { useEffect, useState } from 'react';
import './App.css';
import Weather from './Weather'

function App() {

  
  const [results, setResults] = useState(['']);
  const [zip, setZip] = useState(['']);
  const [query, setQuery] = useState('70037')
  const [city, setCity] = useState('')
  const [currentDate, setCurrentDate] = useState([''])
  const [currentWeather, setCurrentWeather] = useState([])
  const [day2, setDay2] = useState([])
  const [day2Weather , setDay2Weather] = useState([])
  const [day3, setDay3] = useState([''])
  const [day3Weather , setDay3Weather] = useState([])
  const [day4, setDay4] = useState([''])
  const [day4Weather , setDay4Weather] = useState([])
  const [day5, setDay5] = useState([''])
  const [day5Weather , setDay5Weather] = useState([])


  

  useEffect(() => {
  const retrieveResults = async () => {
    const response = await fetch (`http://api.openweathermap.org/data/2.5/forecast?zip=${query},us&APPID=f143ffd16d6f62d6220af4584c60c90a`)
    let data = await response.json()
    setResults([data.list])
    console.log(results)
    setCity(data.city.name)
    setCurrentDate(data.list[0].main)
    setCurrentWeather(data.list[0].weather[0].description)
    setDay2(data.list[8].main)
    setDay2Weather(data.list[8].weather[0].description)
    setDay3(data.list[16].main)
    setDay3Weather(data.list[16].weather[0].description)
    setDay4(data.list[24].main)
    setDay4Weather(data.list[24].weather[0].description)
    setDay5(data.list[30].main)
    setDay5Weather(data.list[30].weather[0].description)
    console.log(day2)

    
  }

  retrieveResults()
  },[query]);


  const zipChange = (e) => {
    setZip(e.target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    setQuery(zip);
    setZip('')
  }

  
 

  return (
    <div className="App">
      Hi
      <div className='local-weather'>
        Local Weather
        <div>
        </div>
      </div>
      <form className='form' onSubmit={onSubmitForm}>
        <input 
          onChange={zipChange} 
          type='number' 
          value={zip}
          placeholder='Zip Code' 
          className='zip'
          />
        <button type='submit' className='submit'>Submit</button>
      </form>
      <div className="results">
        <Weather
          city={city}
          currentDate={currentDate}
          day2= {day2}
          day3 = {day3}
          day4 = {day4}
          day5 = {day5}
          currentWeather = {currentWeather}
          day2Weather = {day2Weather}
          day3Weather = {day3Weather}
          day4Weather = {day4Weather}
          day5Weather = {day5Weather}

        />
      </div>
    </div>
  );
}

export default App;
