 
    async function getWeather() {
      const city = 'London';
      const apiKey = 'b861f138dc9734473f8a29e0400303a'; // Replace with your own API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=b861f138dc9734473f8a29e0400303a`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        const weatherDescription = data.weather[0].main;

        document.getElementById('weatherData').textContent =
          `Current weather in London: ${weatherDescription}`;
      } catch (error) {
        document.getElementById('weatherData').textContent =
          'Error fetching weather data';
        console.error(error);
      }
    }