ymaps.ready(init);
var myMap,
  myPlacemark;

function init(){
  myMap = new ymaps.Map ("map", {
    center: [59.939136, 30.320000],
      zoom: 17
  });

  myPlacemark = new ymaps.Placemark([59.939483, 30.322645], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/map_point.png",
    iconImageSize: [231, 190]
  });

  myMap.geoObjects.add(myPlacemark);
}