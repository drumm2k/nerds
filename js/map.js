var map;
function initMap() {
  
  var myLatLng = {lat: 59.9388, lng: 30.32305};
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.9391, lng: 30.3198},
    zoom: 17
  });
  
  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Nerds'
  });
}
