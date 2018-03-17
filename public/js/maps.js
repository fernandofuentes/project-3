console.log( "maps code loaded on maps.js!" );

function initMap() {
  console.log( 'intit map started' );
  var center = { lat: 29.760202, lng: -95.369835 };
  var houston = { lat: 29.760202, lng: -95.369835 };

  var map = new google.maps.Map( document.getElementById( 'map' ), {
    zoom: 10,
    center: center
  } );
  var marker = new google.maps.Marker( {
    position: houston,
    map: map
  } );
}