const { data } = require("jquery");

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Potchefstroom&units=metric&appid=26ee4d6b109498c61f293b17bbca24f4", 
    funtion(data){
        console.log(data);

        var icon="https://openweathermap.org/img/wn/" + data.weather.icon + ".png";

        $('.icon').attr('src', icon);
});