import React from 'react';

function Weather({city, currentWeather, day2Weather, day3Weather,
    day4Weather, day5Weather, currentDate, day2, day3, day4, day5}){

    return (
        <div className='weather'>
            <div className='today'>
                <div className='city'>
                 {city}
                </div>
                <div className='description'>
                    {currentWeather}
                </div>
                <div className='current-temp'>
                 Current Temperature: {Math.round((currentDate.temp -273.15)* 9/5 + 32)}°
                </div>
                <div className='humidity'>
                    Humidy: {currentDate.humidity}%
                </div>
            </div>
            <div className='future'>
            </div>
        </div>
    )
}

export default Weather