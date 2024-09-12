import React, { useState, useEffect } from 'react';
import './App.css';  // Pou estil CSS ou yo

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Chapeco');
  const apiKey = '86ad380062ccb36c9e1aca187f4206ba';  // Mete kle API ou isit la 

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},BR&units=metric&appid=${apiKey}`);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error('Error: ', response.status);
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Solisyon Tan</h1>
        <marquee style={{ color: 'yellow' }}>Ki tan li fè jodi ya</marquee>
      </header>

      <div>
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Antre vil la" 
        />
        <button onClick={fetchWeatherData}>Chèche</button>

        <h2>Rezilta Meteo pou {city}</h2>
        {weatherData ? (
          <div>
            <h3>Tanperati: {weatherData.main.temp}°C</h3>
            <p>Chalè: {weatherData.main.feels_like}°C</p>
            <p>Imidite: {weatherData.main.humidity}%</p>
            <p>Vant: {weatherData.wind.speed} km/h</p>
            <p>Tanperati (°F): {(weatherData.main.temp * 9/5 + 32).toFixed(2)}°F</p>
            <img 
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
              alt="Kondisyon Meteo" 
            />
          </div>
        ) : (
          <p>Chaje done meteo...</p>
        )}
      </div>

      <br/>
      <footer>
        <p>Tout dwa rezève Solisyon Tan</p>
        <p>Politik Konfidansyalite</p>
        <p style={{ fontSize: '6px' }}>Aplikasyon kreye pa Robensonn Pierre</p>
        <p>kontak whatsapp: +5549999931125/+5549989063764/+50937327180</p>
        <p>kontak email: pierrerobensonn7@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
