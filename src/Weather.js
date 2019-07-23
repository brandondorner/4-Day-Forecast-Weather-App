import React from 'react';
import './Weather.css'

function Weather({city, currentWeather, day2Weather, day3Weather,
    day4Weather, day5Weather,currentDate, day2, day3, day4, day5}){

    return (
        <div className='weather'>
            <div className='today'>
                <div className='city'>
                 {city}
                </div>
                <div className='description'>
                    {/* Capitalizing the first letter of each word */}
                    {(currentWeather.toString().split(' ').map( word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                        )).join(' ')}
                </div>
                <div className='current-temp'>
                 Current Temperature: {Math.round((currentDate.temp -273.15)* 9/5 + 32)}°
                </div>
                <div className='current-minmax'>
                    {/* Unfortunately I cannot access the min/max temperatures from this
                    API without purchasing a membership. So to emulate min/max(s) 
                    I will just add a slight multiplier to the end of the formula. */}
                    {Math.round(((currentDate.temp -273.15)* 9/5 + 32)*.9)}° - 
                    {Math.round(((currentDate.temp -273.15)* 9/5 + 32)*1.1)}°
                </div>
                <div className='humidity'>
                    Humidity: {currentDate.humidity}%
                </div>
            </div>
            <div className='future'>
                <div className='day2'>
                    <div className='weather-description'>
                        {/* Capitalizing the first letter of each word */}
                        {(day2Weather.toString().split(' ').map( word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                            )).join(' ')}
                    </div>
                    <div className='minmax'>
                        {Math.round(((day2.temp -273.15)* 9/5 + 32)*.90)}° - 
                        {Math.round(((day2.temp -273.15)* 9/5 + 32)*1.1)}°
                    </div>
                </div>
                <div className='day3'>
                    <div className='weather-description'>
                        {(day3Weather.toString().split(' ').map( word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                            )).join(' ')}
                    </div>
                    <div className='minmax'>
                        {Math.round(((day3.temp -273.15)* 9/5 + 32)*.90)}° - 
                        {Math.round(((day3.temp -273.15)* 9/5 + 32)*1.1)}°
                    </div>
                </div>
                <div className='day4'>
                    <div className='weather-description'>
                        {(day4Weather.toString().split(' ').map( word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                            )).join(' ')}
                    </div>
                    <div className='minmax'>
                        {Math.round(((day4.temp -273.15)* 9/5 + 32)*.90)}° - 
                        {Math.round(((day4.temp -273.15)* 9/5 + 32)*1.1)}°
                    </div>
                </div>
                <div className='day5'>
                    <div className='weather-description'>
                        {(day5Weather.toString().split(' ').map( word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                            )).join(' ')}
                    </div>
                    <div className='minmax'>
                        {Math.round(((day5.temp -273.15)* 9/5 + 32)*.90)}° - 
                        {Math.round(((day5.temp -273.15)* 9/5 + 32)*1.1)}°
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Weather