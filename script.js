
function getWeather(lat, long){
  $.ajax({
    url: "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long,
    type: 'GET',
    dataType: 'json',
    success: function(data){
      $("#degree").text(data.main.temp);
      $("#degree").append("<a href='#' id='c'> \t\tC</a>");
      $(".icon").html('<img src= '+data.weather[0].icon+' alt="Weather icon" width="75px" height="75px">');
      $("#location").text(data.name + ", " + data.sys.country);
    }
  });
  return true;
}

function getLocation() {

  if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
  getWeather(position.coords.latitude, position.coords.longitude);

});
} else {
  /* geolocation IS NOT available */
  alert("Your Browser does not support Finding your location");
}
}

$(document).ready(function() {

  getLocation();

});
