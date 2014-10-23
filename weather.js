var weather;
var handleWeatherResponse = function(data) {
  weather = data;
  console.log(weather);
}
var getTheWeather = function() {
  $.ajax({
    type: 'GET',
    url: 'https://api.forecast.io/forecast/YOUR_API_KEY/42.056459,-87.675267?callback=?',
    dataType: 'jsonp',
    contentType: "application/json",
    success: handleWeatherResponse
  });
}
