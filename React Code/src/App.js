
import { useState, useEffect } from 'react';
import './App.css'
import bgImage from './images/bg.jpg';
function App() {

  const [weather, setWeather ] = useState('');
  const [currentLocation, setCurrentLocation ] = useState('');

  const onClick = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&unit=metric&APPID=c0d573b18729da9019711dcbacf8458d`)
      .then(response => response.json())
      .then(json => setWeather(json))
  }

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let currentLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        setCurrentLocation(currentLocation)
      });
    } else {
      alert('Geolcation is not available');
    }
  }, [])
  
console.log(currentLocation)
  return (
    <div className='weatherApp'>
      {/* <img src={bgImage} style={{height: '100%', width: '100%'}}/> */}
      <h1>Delhi</h1>
      <h1>IN</h1>
      <p>Time : 3:30 M</p>
    </div>
  );
}

export default App;
