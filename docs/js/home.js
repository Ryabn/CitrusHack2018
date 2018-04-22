var xhr = new XMLHttpRequest;
var latitude, longitude, place, temp, temp_min, temp_max, weather, wind;

function load(){
    getLocation();
}

function apiCall(url, returnFunction){
    xhr.onload = function() {
        if(xhr.readyState === xhr.DONE){
            if(xhr.status === 200){
                returnFunction(JSON.parse(xhr.responseText));
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function weatherInfo(){
    var apiKey = '490a6699d3550adf6d9465b4a0e50162';
    var zipCode = '91007';
    //var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&appid=' + apiKey;
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
    
    apiCall(apiUrl, extractWeatherData);
}

function extractWeatherData(serverResponse){
    temp = kelvinToFahrenheit(serverResponse['main']['temp']);
    temp_min = kelvinToFahrenheit(serverResponse['main']['temp_min']);
    temp_max = kelvinToFahrenheit(serverResponse['main']['temp_max']);
    wind = serverResponse['wind']['speed'];
    weather = serverResponse['weather'][0]['main'];
    place = serverResponse['name'];
    displayWeather();
}

function kelvinToFahrenheit(kelvin){
    return ( kelvin - 270 ) * 9 / 5 + 32;
}

function displayWeather(){
    //document.getElementById('weather-display').insertAdjacentHTML('beforeend', weatherData);
    document.getElementById('temperature').innerHTML = parseInt(temp);
    document.getElementById('temperature-information-desc').innerHTML = 'Location: ' + place 
        + '<br><br>Weather: ' + weather 
        + '<br><br>Wind Speed: ' + wind + 'mph';
    setTimeout(function(){
        document.getElementById('loading-wrapper').style.display = 'none';
    }, 1000);
}

function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLocation);
    }
}

function setLocation(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    weatherInfo();
}