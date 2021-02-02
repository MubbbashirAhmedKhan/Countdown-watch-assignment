var countDownDate = new Date().getTime();
var x = setInterval(function(){
var now = new Date().getTime();
var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
var minutes = Math.floor((distance  % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / (1000));

document.getElementById("day").innerHTML =  Days;
document.getElementById("hour").innerHTML =  Hours;
document.getElementById("minute").innerHTML =  Minutes;
document.getElementById("seconds").innerHTML =  Seconds;


});

