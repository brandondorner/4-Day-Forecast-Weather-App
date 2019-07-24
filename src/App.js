import React, { useEffect, useState } from 'react';
import './App.css';
import Weather from './Weather'

function App() {

  const [zip, setZip] = useState(['']);
  const [query, setQuery] = useState('70037')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')

  const [currentDate, setCurrentDate] = useState([''])  
  const [currentWeather, setCurrentWeather] = useState([])
  const [currentId, setCurrentId] = useState('')

  const [day2, setDay2] = useState([''])
  const [day2Weather , setDay2Weather] = useState([])

  const [day3, setDay3] = useState([''])
  const [day3Weather , setDay3Weather] = useState([])

  const [day4, setDay4] = useState([''])
  const [day4Weather , setDay4Weather] = useState([])


  useEffect(() => {
  const retrieveResults = async () => {
    const response = await fetch (`http://api.openweathermap.org/data/2.5/forecast?zip=${query},us&APPID=f143ffd16d6f62d6220af4584c60c90a`)
    let data = await response.json()

    if (data.list === undefined){
      alert('Please Enter A Valid U.S. Zip Code')
      return
    }

    setCity(data.city.name)
    setDate(data.list[0].dt_txt)

    setCurrentDate(data.list[0].main)
    setCurrentWeather(data.list[0].weather[0].description)
    setCurrentId(data)

    setDay2(data.list[8].main)
    setDay2Weather(data.list[8].weather[0].description)

    setDay3(data.list[16].main)
    setDay3Weather(data.list[16].weather[0].description)

    setDay4(data.list[24].main)
    setDay4Weather(data.list[24].weather[0].description) 
  }

    retrieveResults()
  
  },[query]);

  //changing search results

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
      <div className='local-weather'>
        Local Weather
      </div>
      <form className='form' onSubmit={onSubmitForm}>
        <input 
          onChange={zipChange} 
          type='text' 
          pattern="[0-9]*"
          value={zip}
          placeholder='Zip Code' 
          className='zip'
          />
        <button type='submit' className='submit'>Submit</button>
      </form>
      <div className="results">
        <Weather
          city={city}
          date={date}
          currentId={currentId}
          currentWeather = {currentWeather}
          currentDate = {currentDate}
          day2 = {day2}
          day3 ={day3}
          day4 ={day4}
          day2Weather = {day2Weather}
          day3Weather = {day3Weather}
          day4Weather = {day4Weather}
        />
      </div>
    </div>
  );
}

export default App;
