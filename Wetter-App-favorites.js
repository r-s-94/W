let favoritesStorage = [];
let notCityNames = "Stadtname";
let index;
let selectInput;

loadFavoritesFromStorage();

function addFavorite() {
  selectInput = document.querySelector(".weather-cityname");
  if (!selectInput.textContent || selectInput.textContent === notCityNames)
    return;

  if (favoritesStorage.includes(selectInput.textContent)) {
    popUpWindowOpen();
  } else {
    favoritesStorage.push(selectInput.textContent);
    getOutFavoritCitys();
    saveFavoritesInStorage();
    selectInput.innerHTML = "Stadtname";
  }
}

function popUpWindowOpen() {
  document.body.classList.add("no-scroll");
  document.querySelector(".popup-info__div").style.display = "block";

  if (favoritesStorage.includes(selectInput.textContent)) {
    document.querySelector(".popup-info__message").innerHTML =
      "Die eingegebene Stadt " +
      selectInput.textContent +
      " existiert bereits in der Favoriteliste.";
  }
}

function closeInfoPopUp() {
  document.querySelector(".popup-info__div").style.display = "none";
  document.body.classList.remove("no-scroll");
}

function getOutFavoritCitys() {
  document.getElementsByTagName("select")[0].innerHTML = "";
  for (index = 0; index < favoritesStorage.length; index++) {
    document.getElementsByTagName("select")[0].innerHTML +=
      "<option>" + favoritesStorage[index] + "</option>";
  }
}

function saveFavoritesInStorage() {
  const saveFavoritesStorage = JSON.stringify(favoritesStorage);
  localStorage.setItem("favoritCity", saveFavoritesStorage);
}

function loadFavoritesFromStorage() {
  const loadFavorites = localStorage.getItem("favoritCity");
  if (loadFavorites.length >= 0) {
    favoritesStorage = JSON.parse(loadFavorites);
    getOutFavoritCitys(favoritesStorage);
  }
}

function deletFavorite() {
  selectInput = document.querySelector(".weather-cityname");
  for (index = 0; index < favoritesStorage.length; index++) {
    if (selectInput.textContent === favoritesStorage[index]) {
      favoritesStorage.splice(index, 1);
      saveFavoritesInStorage();
      getOutFavoritCitys();
      selectInput.innerHTML = "Stadtname";
    }
  }
}
