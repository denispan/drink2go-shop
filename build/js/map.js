const ZOOM_START = 18;
const LAYER_TILE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const DRINK2GO = {
  lat: 59.968344,
  lng: 30.317526
};

const pinIconMain = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const markerMain = L.marker(
  {
    lat: DRINK2GO.lat,
    lng: DRINK2GO.lng,
  },
  {
    icon: pinIconMain,
  }
);

const mapImage = document.querySelector('.map__image');
const mapCanvas = document.querySelector('.map__canvas');

const map = L.map('map-canvas');

mapImage.classList.remove('map__image--nojs');
mapCanvas.classList.remove('map__canvas--nojs');

map.setView({
  lat: DRINK2GO.lat,
  lng: DRINK2GO.lng,
}, ZOOM_START);

L.tileLayer(
  LAYER_TILE,
  {
    attribution: LAYER_ATTRIBUTION,
  },
).addTo(map);

markerMain.addTo(map);
