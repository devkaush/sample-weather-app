import React from 'react'
import { Chart } from "react-google-charts";

export default function WeatherGraph({weekWeather}) {

    const temperature = [["Days", "Max Temp"]];
    for(var i=0; i<weekWeather.length; i++){
        temperature.push([weekWeather[i].day, weekWeather[i].max_temp]);
    }

    const options = {
      hAxis: { title: "Days"},
      vAxis: { title: "Maximum Temperature (Degree)"},
      legend: "none"
    };

    return (
        <div className="weatherGraph">
            <Chart
            className= "graph"
            chartType="LineChart"
            data={temperature}
            options={options}
          />
        </div>
    )
    
}
