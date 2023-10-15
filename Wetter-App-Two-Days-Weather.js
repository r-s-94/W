let forecastWeather;
function getOutforecastWeather() {
  const twoDaysWeather = document.querySelector(".two-days-weather__collect");
  forecastWeather = forecastWeatherData.forecast.forecastday;

  twoDaysWeather.innerHTML = "";

  for (let index = 1; index < forecastWeather.length; index++) {
    const forecastWeatherDay = forecastWeather[index].day;
    const getTimeData = new Date();
    getTimeData.setTime(forecastWeather[index].date_epoch * 1000);
    const forecastWeatherdate = getTimeData.toLocaleDateString();

    twoDaysWeather.innerHTML +=
      '<div class="two-days-weather__part">' +
      '<div class="two-days-current__weather">' +
      '<div class="two-days-weather__date">' +
      forecastWeatherdate +
      "</div>" +
      '<div class="two-days-weather__data">' +
      '<div class="two-days-weather__description weather-description">' +
      weather[forecastWeatherDay.condition.text] +
      "</div>" +
      ' <div class="two-days-weather__img weather-img">' +
      '<img src="' +
      forecastWeatherDay.condition.icon +
      '" alt="" />' +
      " </div>" +
      '<div class="two-days-weather__temperature weather-temperature">' +
      "<span>Durchschnitts<wbr />temperature</span>" +
      "<span>" +
      forecastWeatherDay.avgtemp_c +
      " &deg;C" +
      "</span>" +
      "</div>" +
      '<div class="two-days-weather__wind-speed weather-wind-speed">' +
      "<span>Wind<wbr />geschwindig<wbr />keit</span>" +
      "<span>" +
      forecastWeatherDay.maxwind_kph +
      " Km/h" +
      "</span>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  }
}
