const apikey = "e505bc6c4a5552cfc23d6de5cb6a3b77";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    if(response.status == 404){
document.querySelector(".weather").style.display="none";
document.querySelector(".error").style.display="block";
document.querySelector(".blank").style.display ="none";



}else if(response.status == 400){
    document.querySelector(".weather").style.display="none";
    document.querySelector(".error").style.display="none";
    document.querySelector(".blank").style.display ="block";

}
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
if(data.weather[0].main === "Clear"){
weathericon.src= "E:/project1/weather/sun.png";

}else if(data.weather[0].main == "Clouds"){
weathericon.src= "E:/project1/weather/cloudy.png";


}else if(data.weather[0].main == "Drizzle"){
    weathericon.src= "#";


}else if(data.weather[0].main == "Dust"){
    weathericon.src= "E:/project1/weather/dust.png";


}else if(data.weather[0].main == "Rain"){
    weathericon.src= "E:/project1/weather/rain.png";


}else if(data.weather[0].main == "Mist"){
    weathericon.src= "E:/project1/weather/mist.png";


}

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";
document.querySelector(".card").style.margin="0px auto 0";
document.querySelector(".blank").style.display ="none";

}
searchbtn.addEventListener("click",() =>{

    checkweather(searchbox.value);


})

