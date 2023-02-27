let API_KEY = 'a8e71c9932b20c4ceb0aed183e6a83bb'


getWeatherData = async (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const completeURL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  try {
    const response = await fetch(completeURL);
    return await response.json();
  } catch (error) {
    return console.error(error);
  }
}

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
    .then(data => showWeatherData(data))
    .catch(error => console.error(error));
}

const showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerHTML = weatherData.name;
  document.getElementById("weather-type").innerHTML = weatherData.weather[0].description;
  document.getElementById("temp").innerHTML = weatherData.main.temp;
  document.getElementById("min-temp").innerHTML = weatherData.main.temp_min;
  document.getElementById("max-temp").innerHTML = weatherData.main.temp_max;
}
