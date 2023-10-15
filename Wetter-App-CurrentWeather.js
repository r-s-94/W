function getOutCurrentWeather() {
  const getTimeData = new Date();
  const getDate = getTimeData.toLocaleDateString();

  document.querySelector(".current-weather").innerHTML =
    '<div class="current-weather__date">' +
    getDate +
    "</div>" +
    '<div class="current-weather__data"> ' +
    '<div class="current-weather__description weather-description">' +
    weather[weatherStorageInformation.currentWeatherData.text] +
    "</div> " +
    '<div class="current-weather__img weather-img">' +
    '<img src="' +
    currentWeatherData.current.condition.icon +
    '" alt=""/></div>' +
    '<div class="current-weather__temperature weather-temperature">' +
    "<span>Durchschnitts<wbr />temperature</span>" +
    "<span>" +
    weatherStorageInformation.currentWeatherData.temperature +
    " &deg;C" +
    "</span>" +
    "</div>" +
    '<div class="current-weather__wind-speed weather-wind-speed" >' +
    "<span>Wind<wbr />geschwindig<wbr />keit</span>" +
    "<span>" +
    weatherStorageInformation.currentWeatherData.windSpeed +
    " Km/h" +
    "</span>" +
    "</div>" +
    "</div>";
}
