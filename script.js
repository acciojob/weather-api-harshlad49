function getWeather() {
  const apiKey = 'YOUR_API_KEY'; // <-- Replace this with your real OpenWeatherMap API key
  const city = 'London';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const weatherMain = data.weather[0].main;
      document.getElementById('weatherData').innerText = `Current weather in London: ${weatherMain}`;
    })
    .catch((error) => {
      document.getElementById('weatherData').innerText = `Error: ${error.message}`;
    });
}
