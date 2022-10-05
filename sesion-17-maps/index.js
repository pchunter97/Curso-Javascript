let map;

function initMap() {
  const posicion = {
    lat: 24.363,
    lng: 2900.044,
  };

  const posicion2={
    lat: -24.363,
    lng: 2100.044,
  }
  const posicion3={
    lat: 24.363,
    lng: 431.044,
  }
  map = new google.maps.Map(document.getElementById("map"), {
    center: posicion,
    zoom: 1,
  });

  const marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Posición Inicial",
  });

  const marker2 = new google.maps.Marker({
    position: posicion2,
    map,
    title: "Posición Inicial",
  });

  const marker3 = new google.maps.Marker({
    position: posicion3,
    map,
    title: "Posición Inicial",
  });
}
