const apiKey = "da65a04eb840248b4688e52c8bd6cb97";
let input = document.querySelector(".cityInput");
let btn = document.querySelector(".search-addon");


btn.addEventListener('click',function(){
    var city = input.value;
    // console.log(city);
    input.value = "";

    ckechWeather(city);
    
});

async function ckechWeather(city ="Gwalior") {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
    var data = await response.json();

    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity+"%";
    document.querySelector(".wind").innerHTML =data.wind.speed;
}