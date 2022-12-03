const express = require("express");
const https = require("https");
const app = express();

url = "https://api.openweathermap.org/data/2.5/weather?q=Kalyan,india&units=metric&appid=6d7f7bd69df79b564a1996e469988430";
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Kalyan,india&units=metric&appid=6d7f7bd69df79b564a1996e469988430";

    https.get(url, function(response){

    });

});

app.listen(3000, function(){
    console.log("The server has been started at port 3000");
    
});

// https.get(url,function(response){
//     console.log(response.statusCode);
    
//     response.on("data",function(data){

//         const weatherData = JSON.parse(data);
//         const temp = weatherData.main.temp;
//         const weatherDescription = weatherData.weather[0].description;
//         const icon = "http://openweathermap.org/img/wn/"+ weatherData.weather[0].icon+"@2x.png";
//         res.write("<h1>The temperature in Kalyan is "+temp+" degree celcius</h1>");
//         res.write("<h3>The weather is currently "+weatherDescription+"</h3>");
//         res.write("<img src ="+icon+">")
//         res.send();
//     });
// });