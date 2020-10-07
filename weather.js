$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=Potchefstroom&units=metric&appid=26ee4d6b109498c61f293b17bbca24f4", 
    funtion(data),{

       /* var icon="https://openweathermap.org/img/wn/" + data.weather.icon + ".png",
        var temp= data.main.temp,
        var weather = data.weather.main,

        $(".icon").attr('src', icon),
        $(".weather").append(weather),
        $(".temp").append(temp),*/
});
