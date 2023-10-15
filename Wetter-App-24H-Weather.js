function getOut24HWeather() {
  const weather24H = document.querySelector(".weather-24-h__collect");
  const weather24HData = forecastWeatherData.forecast.forecastday[0].hour;
  weather24H.innerHTML = "";

  for (let index = 0; index < weather24HData.length; index++) {
    const weather24HHour =
      forecastWeatherData.forecast.forecastday[0].hour[index];

    weather24H.innerHTML +=
      '<div class="weather-24-h__framework">' +
      '<div class="weather-24-h__clock"> ' +
      weather24HHour.time.slice(-5) +
      " Uhr" +
      "</div>" +
      '<div class="weather-24-h__data" >' +
      '<div class="weather-24-h__description weather-description"> ' +
      weather[weather24HHour.condition.text] +
      "</div>" +
      '<div class="weather-24-h__img weather-img"> ' +
      '<img src="' +
      weather24HHour.condition.icon +
      '" alt=""/>' +
      "</div>" +
      '<div class="weather-24-h__temperature weather-temperature">' +
      "<span>Durchschnitts<wbr/>temperature</span>" +
      "<span>" +
      weather24HHour.temp_c +
      " &deg;C" +
      "</span>" +
      "</div>" +
      '<div class="weather-24-h-wind-speed weather-wind-speed" >' +
      "<span>Wind<wbr/>geschwindig<wbr/>keit</span>" +
      "<span>" +
      weather24HHour.wind_kph +
      " Km/h" +
      "</span>" +
      "</div>" +
      "</div>" +
      "</div>";
  }
}
