let checkMenu = false;

//funcion menu para el responsive
function openMenu() {
  const MENU = document.querySelector("#menu");

  if (checkMenu) {
    MENU.classList.replace("showMenu", "hideMenu");
    checkMenu = false;
  } else {
    MENU.classList.replace("hideMenu", "showMenu");
    checkMenu = true;
  }
}

//function donde pasamos las coordenadas de la direccion gps
function iniciarMap() {
  var coord = { lat: -27.370871, lng: -55.836835 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}

//function para que siga mostrando el menu al bajar el scroll
function clickMenu() {
  const MENU = document.querySelector("#menu");

  MENU.classList.replace("showMenu", "hideMenu");
  checkMenu = false;
}
