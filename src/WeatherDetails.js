import React from 'react'
import DayWeather from './DayWeather'

export default function WeatherDetails({weekWeather}) {
    
    function renderSquare(i){
        return <DayWeather dayWeather = {weekWeather[i]} />
    }

    const allDays = []
    for(var i=0; i<weekWeather.length; i++){
        allDays.push(renderSquare(i));
    }

    return (
        <div className="wheatherDetails">
            {/* <DayWeather dayWeather = {weekWeather[0]} /> */}
            {allDays}
        </div>
    )
}
