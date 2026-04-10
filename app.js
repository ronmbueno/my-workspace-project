
function getForecast(city, days) {
    console.log(`Fetching ${days}-day forecast for ${city}...`);
    return {
        city: city,
        days: days,
        summary: 'Mostly sunny with a chance of rain on day 3'
    };
}

const forecast = getForecast('Seattle', 5);
console.log(`Forecast: ${forecast.summary}`);
