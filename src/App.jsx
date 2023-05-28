
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'


function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

    const success = (pos) => {
    const lat = pos.coords.latitude
    const lon =pos.coords.longitude
    const API_KEY ="565197ab48ab5cb230c2af2430614c03"
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(URL)
      .then(({data}) =>{
        
        let newData = data;
        
          newData.weatherImage = '';
          if (data.weather[0].main === 'Clear'){
            newData.weatherImage = 'bg-imagen1'
          }
          if (data.weather[0].main === 'Drizzle'){
            newData.weatherImage = 'bg-imagen2'
            }
          if (data.weather[0].main === 'Clouds'){
            newData.weatherImage = 'bg-imagen3'
            }
          if (data.weather[0].main === 'Snow'){
            newData.weatherImage = 'bg-imagen4'
            }
          if (data.weather[0].main === 'Thunderstorm'){
            newData.weatherImage = 'bg-imagen5'
            } 
          if (data.weather[0].main === 'Mist'){
            newData.weatherImage = 'bg-imagen6'
            }          
          
            console.log(newData)
          setWeatherInfo(newData)
          return newData;
        })
          
      .catch((err) => console.log(err))
  }
  
useEffect(() => {
  navigator.geolocation.getCurrentPosition(success)
},[])

  return (
    <main className={`${weatherInfo?.weatherImage || ""} bg-center bg-cover min-h-screen text-black flex justify-center items-center font-principal-font p-2`}>
    <Weather weatherInfo={weatherInfo} />
    </main>
  )
}

export default App
