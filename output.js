var btn= document.querySelector('#submit');
var btn1= document.querySelector('#delhi');
var btn2= document.querySelector('#london');
var btn3= document.querySelector('#dc');
var search= document.querySelector('#search');
var temperature= document.querySelector('#temperature');
var humidity= document.querySelector('#humidity');
var description= document.querySelector('#description');
var city=document.querySelector('#city');
var main=document.querySelector('#main')
const apikey="145c59ecfa35998e1021a95af5820eb1";
const newapi="9d2d86b135a541b69b997fac68e224c7";
btn.addEventListener('click', fetchdata);
async function fetchdata(event){
    event.preventDefault();
  await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apikey}`)
    .then(response=> {return response.json()})
    .then(data=>
        {
            var name= data[`name`];
            var descp= data[`weather`][0]['description'];
            var temp= data[`main`]['temp'];
            
            city.innerHTML=name;
            temperature.innerHTML=`TEMPERATURE:${Math.round(temp-273)} \u00B0 C`;
            description.innerHTML=`WEATHER:${descp}`;  
            console.log(data);
            

}) 

await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${search.value}&key=${newapi}&units=M&days=5`)
.then(response=> {return response.json()})
    .then(days=>
        {
            var day1max = days['data'][0]['app_max_temp'];
            var day1min = days['data'][0]['app_min_temp'];
            var day2max = days['data'][0]['app_max_temp'];
            var day2min = days['data'][0]['app_min_temp'];
            var day3max = days['data'][0]['app_max_temp'];
            var day3min = days['data'][0]['app_min_temp'];
            var day4max = days['data'][0]['app_max_temp'];
            var day4min = days['data'][0]['app_min_temp'];
            var day5max = days['data'][0]['app_max_temp'];
            var day5min = days['data'][0]['app_min_temp'];

            day1.innerHTML=`DAY1: Max:${day1max} Min${day1min}`;
            day2.innerHTML=`DAY2: Max:${day2max} Min${day2min}`;
            day3.innerHTML=`DAY3: Max:${day3max} Min${day3min}`;
            day4.innerHTML=`DAY4: Max:${day4max} Min${day4min}`;
            day5.innerHTML=`DAY5: Max:${day5max} Min${day5min}`;
           
            console.log(days);
        })

        .catch(err=> alert('Invalid input'))
};
btn1.addEventListener('click', fetchdata1);
async function fetchdata1(event){
    event.preventDefault();
  await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apikey}`)
    .then(response=> {return response.json()})
    .then(data1=>
        {
            var name= data1[`name`];
            var descp= data1[`weather`][0]['description'];
            var temp= data1[`main`]['temp'];
            
            city.innerHTML=name;
            temperature.innerHTML=`TEMPERATURE:${Math.round(temp-273)} \u00B0 C`;
            description.innerHTML=`WEATHER:${descp}`;  
            console.log(data);
   


}) };

btn2.addEventListener('click', fetchdata2);
async function fetchdata2(event){
    event.preventDefault();
  await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apikey}`)
    .then(response=> {return response.json()})
    .then(data2=>
        {
            var name= data2[`name`];
            var descp= data2[`weather`][0]['description'];
            var temp= data2[`main`]['temp'];
            
            city.innerHTML=name;
            temperature.innerHTML=`TEMPERATURE:${Math.round(temp-273)} \u00B0 C`;
            description.innerHTML=`WEATHER:${descp}`;  
            console.log(data);}) };
btn3.addEventListener('click', fetchdata3);
async function fetchdata3(event){
    event.preventDefault();
  await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=washington&appid=${apikey}`)
    .then(response=> {return response.json()})
    .then(data3=>
        {
            var name= data3[`name`];
            var descp= data3[`weather`][0]['description'];
            var temp= data3[`main`]['temp'];
            
            city.innerHTML=name;
            temperature.innerHTML=`TEMPERATURE:${Math.round(temp-273)} \u00B0 C`;
            description.innerHTML=`WEATHER:${descp}`;  
            console.log(data);})};
     