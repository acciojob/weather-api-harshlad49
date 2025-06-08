it('should fetch and display current weather for London', () => {
  cy.intercept(
    'GET',
    'https://api.openweathermap.org/data/2.5/weather?q=London'
  ).as('getCurrentWeather');

  cy.visit(baseUrl); // Make sure baseUrl is defined in your Cypress config or before block

  cy.contains('Get Current Weather').click();

  cy.wait('@getCurrentWeather').then((interception) => {
    const response = interception.response.body;
    const weatherMain = response.weather[0].main;

    cy.get('#weatherData').should(
      'have.text',
      `Current weather in London: ${weatherMain}`
    );
  });
});
