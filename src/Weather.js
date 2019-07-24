import React from 'react';
import './Weather.css'

function Weather({city, date, currentWeather, currentId,  day2Weather, day3Weather,
    day4Weather,currentDate, day2, day3, day4,}){

    //setting up date arrays
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    date= new Date(date);


    // Converting date data into something more readable
    const FullDate = (date) => {
       return(
           (days[date.getDay()-1] + ', ' +
           months[date.getMonth()]) + ' ' + 
           date.getDate())
    }

    //Iterating through days of the week
    const FutureDate = (num) => {
        let bracketNum = date.getDay() + num
        let dayOfWeek = bracketNum > 6 ? bracketNum-7 : bracketNum 
        return days[dayOfWeek]
    }

    //img src
    const Icons = (imgID) => {
        return `http://openweathermap.org/img/wn/${imgID}@2x.png`
    }     

    return (
        <div className='weather'>
            <div className='today'>
                <div className='city'>
                 {city}
                </div>
                <div className='date'>
                    {FullDate(date)}
                </div>
                <div className="current-icon">
                    <img id='current-img' src={Icons(currentId ? currentId.list[0].weather[0].icon : null)} alt='' />
                </div>
                <div className='current-temp'>
                 {Math.round((currentDate.temp -273.15)* 9/5 + 32)}°
                </div>
                <div className='current-description'>
                    {/* Capitalizing the first letter of each word */}
                    {(currentWeather.toString().split(' ').map( word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                        )).join(' ')}
                </div>
                <div className='current-minmax'>
                    {/* Unfortunately I cannot access the min/max temperatures from this
                    API without purchasing a membership. So to emulate min/max(s) 
                    I will just add a slight multiplier to the end of the formula. */}
                    {Math.round(((currentDate.temp -273.15)* 9/5 + 32)*.9)}° | { } 
                    {Math.round(((currentDate.temp -273.15)* 9/5 + 32)*1.1)}°
                </div>
                <div className='humidity'>
                    Humidity: {currentDate.humidity}%
                </div>
            </div>
            <div className='future'>
                <div className='day2'>
                    <div className='future-date'>
                        {FutureDate(0)}
                    </div>
                    <div className="icon">
                        <img src={Icons(currentId ? currentId.list[8].weather[0].icon : null)} alt='' />
                    </div>
                    <div className='weather-description'>
                        {/* Capitalizing the first letter of each word */}
                        {(day2Weather.toString().split(' ').map( word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                            )).join(' ')}
                    </div>
                    <div className='minmax'>
                        {Math.round(((day2.temp -273.15)* 9/5 + 32)*.90)}° | { }
                        {Math.round(((day2.temp -273.15)* 9/5 + 32)*1.1)}°
                    </div>
                </div>
                <div className='border'/>
                <div className='day3'>
                    <div className='future-date'>
                        {FutureDate(1)}
                    </div>
                    <div className="icon">
                        <img src={Icons(currentId ? currentId.list[16].weather[0].icon : null)}  alt='' />
                    </div>
                    <div className='weather-description'>
                        {(day3Weather.toString().split(' ').map( word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                            )).join(' ')}
                    </div>
                    <div className='minmax'>
                        {Math.round(((day3.temp -273.15)* 9/5 + 32)*.90)}° | { }
                        {Math.round(((day3.temp -273.15)* 9/5 + 32)*1.1)}°
                    </div>
                </div>
                <div className='border'/>
                <div className='day4'>
                    <div className='future-date'>
                        {FutureDate(2)}
                    </div>
                    <div className="icon">
                        <img src={Icons(currentId ? currentId.list[24].weather[0].icon : null)} alt=''/>
                    </div>
                    <div className='weather-description'>
                        {(day4Weather.toString().split(' ').map( word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                            )).join(' ')}
                    </div>
                    <div className='minmax'>
                        {Math.round(((day4.temp -273.15)* 9/5 + 32)*.90)}° | { }  
                        {Math.round(((day4.temp -273.15)* 9/5 + 32)*1.1)}°
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather