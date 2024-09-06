let apikey = "09b7e0225f6943cd87195835242301";
let cityEle = document.querySelector(".city");
let tempEle = document.querySelector(".temp");
let iconEle = document.querySelector(".icon");
let humidEle = document.querySelector(".hum");

let input = document.querySelector(".cityInput");
let btn = document.querySelector("#search-addon");


btn.addEventListener('click',function(){
    let city = input.value;
    input.value = "";

    getData(city);
    
});


async function getData(city="gwalior"){

    let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`)
     data = await data.json();
    screenUpdate(data)
};

function screenUpdate(obj){
    let temp = obj.current.temp_c;
    let cityName = obj.location.name;
    let humidity = obj.current.humidity;
    let icon = obj.current.condition.icon;

    tempEle.innerHTML = temp ;
    cityEle.innerHTML = cityName;
    humidEle.innerHTML = humidity;
    iconEle.src = icon;
};