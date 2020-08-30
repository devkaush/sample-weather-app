import React from 'react';
import WeatherDetails from './WeatherDetails';
import WeatherGraph from './WeatherGraph';

function App() {
  const weekWeather = [{day:'Sunday', max_temp:33, min_temp:26, wind:'Southwesterly,  5.4km/h', weather:'sunny'}, 
                       {day:'Monday', max_temp:32, min_temp:24, wind:'Southwesterly,  5.4km/h', weather:'cloudy'},
                       {day:'Tuesday', max_temp:30, min_temp:24, wind:'Easterly,  3.6km/h', weather:'cloudy'},
                       {day:'Wednesday', max_temp:28, min_temp:22, wind:'Westerly,  7.4km/h', weather:'rain'},
                       {day:'Thrusday', max_temp:29, min_temp:23, wind:'Southwesterly,  4.4km/h', weather:'rain'},
                       {day:'Friday', max_temp:31, min_temp:25, wind:'Southwesterly,  5.1km/h', weather:'cloudy'},
                       {day:'Saturday', max_temp:34, min_temp:30, wind:'Westerly,  5.0km/h', weather:'sunny'}]
  return (
    <div className="weatherApp">
      <h1 className="pageHeading">One Week Weather Report</h1>
      <WeatherGraph weekWeather= {weekWeather}/>
      <WeatherDetails weekWeather= {weekWeather} />
    </div>
  );
}

export default App;
