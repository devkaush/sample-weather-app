import React from 'react'

export default function DayWeather({dayWeather}) {

    return (
        <div className='dayWeather'>
            <h2>{dayWeather.day}</h2>
            <h1>{dayWeather.max_temp} / {dayWeather.min_temp}</h1>
            <p>{dayWeather.wind}</p>
            <img src={`images/${dayWeather.weather}.png`} alt={dayWeather.weather}/>
        </div>
    )
}
