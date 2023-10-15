const weather = {
  Sunny: "Sonnig",
  Clear: "Die Nacht ist klar",
  "Partly cloudy": "teilwise Bewölkt",
  Cloudy: "Bewölkt",
  Overcast: "Bedeckt",
  Mist: "Nebel",
  "Patchy rain possible": "teilweise Regen möglich",
  "Patchy snow possible": "teilweise Schnee möglich",
  "Patchy sleet possible": "teilweise Schneeregen möglich",
  "Patchy freezing drizzle possible":
    "vereinzelte Gefriestellen möglich/Glettegefahr",
  "Thunder outbreaks possible": "mögliches Gewitter",
  "Blowing snow": "Schneetreiben",
  Blizzard: "Schneetreiben",
  Fog: "Nebel",
  "Freezing fog": "gefrierender Nebel",
  "Patchy light drizzle": "leichter Nieselregen",
  "Light drizzle": "leichter Nieselregen",
  "Freezing drizzle": "gefrierender Nieselregen",
  "Heavy freezing drizzle": "starker gefrierender Nieselregen",
  "Patchy light rain": "vereinzelter leichter Regen",
  "Light rain": "leichter Regen",
  "Moderate rain at times": "zeitweise mäßiger Regen",
  "Moderate rain": "mäßiger Regen",
  "Heavy rain at times": "zeitweise starker Regen",
  "Heavy rain": "starker Regen",
  "Light freezing rain": "leichter Eisregen",
  "Moderate or heavy freezing rain": "mäßiger oder starker Eisregen",
  "Light sleet": "leichter Schneeregen",
  "Moderate or heavy sleet": "mäßiger oder starker Schneeregen",
  "Patchy light snow": "teilweise leichter Schneefall",
  "Light snow": "leichter Schneefall",
  "Patchy moderate snow": "teilweise mäßiger Schneefall",
  "Moderate snow": "mäßiger Schneefall",
  "Patchy heavy snow": "teilweise starker Schneefall",
  "Heavy snow": "starker Schneefall",
  "Ice pellets": "Eisstücke",
  "Light rain shower": "leichter Regenschauer",
  "Moderate or heavy rain shower": "mäßiger oder starker Regenschauer",
  "Torrential rain shower": "sintflutartige Regenschauer",
  "Light sleet showers": "leichte Graupelschauer",
  "Moderate or heavy sleet showers": "mäßige oder starke Graupelschauer",
  "Light snow showers": "leichter Schneeschauer",
  "Moderate or heavy snow showers": "mäßiger bis starker Schneeschauer",
  "Light showers of ice pellets": "leichter Schauer aus Eis",
  "Moderate or heavy showers of ice pellets": "mäßiger bis starker Eisschauer",
  "Patchy light rain in area with thunder":
    "Vereinzelt leichter Regen in der Gegend mit Gewitter",
  "Moderate or heavy rain in area with thunder":
    "mäßiger oder starker Regen mit Donner",
  "Patchy light snow in area with thunder":
    "vereinzelt leichter Schneefall mit Donner",
  "Moderate or heavy snow in area with thunder":
    "mäßiger oder starker Schneefall mit Gewitter",
};

let currentWeatherData;
let forecastWeatherData;
let weatherStorageInformation;
let cityName;
let loadCurrentWeatherData;
let loadForecastData;
//let changeDataFormateToAstronomyData;

function searchOptionInput() {
  cityName = document.getElementsByClassName("cityName")[0].value;
  loadData(cityName);
  document.getElementsByClassName("cityName")[0].value = "";
}

function searchOptionSelect() {
  const cityName = document.getElementsByClassName("cityName")[1].value;
  loadData(cityName);
}

async function loadData(cityName) {
  if (!cityName) return;

  loadCurrentWeatherData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=274bf7cba9584d7092f73612230206&q=${cityName}`
  );

  loadForecastData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=274bf7cba9584d7092f73612230206&days=3&q=${cityName}`
  );

  /*const loadAstronomyData = await fetch(
    `http://api.weatherapi.com/v1/astronomy.json?key=274bf7cba9584d7092f73612230206&q=${cityName}`
  );*/

  if (loadCurrentWeatherData.status === 400 || loadForecastData.status === 400)
    popUpWindowOpenERRORMessage();

  currentWeatherData = await loadCurrentWeatherData.json();
  forecastWeatherData = await loadForecastData.json();

  weatherStorageInformation = {
    currentWeatherData: {
      lastUpdated: currentWeatherData.current.last_updated.slice(0, 10),
      text: currentWeatherData.current.condition.text,
      temperature: currentWeatherData.current.temp_c,
      windSpeed: currentWeatherData.current.wind_kph,
    },
  };
  //changeDataFormateToAstronomyData = await loadAstronomyData.json();

  console.log(currentWeatherData);
  console.log(forecastWeatherData);

  //console.log(changeDataFormateToAstronomyData);

  showMeTheCurrentNameOfCity();
  callTheFunctionsCurrentWeatherAndForecastWeather();
}

function showMeTheCurrentNameOfCity() {
  document.getElementsByClassName("weather-cityname")[0].innerHTML =
    currentWeatherData.location.name;
}

function callTheFunctionsCurrentWeatherAndForecastWeather() {
  getOutCurrentWeather();
  getOutforecastWeather();
  getOut24HWeather();
}

function popUpWindowOpenERRORMessage() {
  document.body.classList.add("no-scroll");
  document.querySelector(".popup-info__div").style.display = "block";

  if (
    loadCurrentWeatherData.status === 400 ||
    loadForecastData.status === 400
  ) {
    document.querySelector(".popup-info__message").innerHTML =
      "Die Eingabe " +
      cityName +
      " ist ungültig" +
      "<br>" +
      "oder die Stadt " +
      cityName +
      " existiert nicht." +
      "<br>" +
      "Bitte korrigieren Sie ihre Eingabe.";
  }
}
