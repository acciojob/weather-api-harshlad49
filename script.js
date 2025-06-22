   async function getWeather() {
      const city = 'London';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${c44617db6d6bec65efe58b8e08c13d0e}`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

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