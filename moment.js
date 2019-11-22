var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var currentDay = $("#currentDay")

currentDay.text(months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear());
console.log(months[d.getMonth()])
console.log(d.getDate())
console.log(d.getFullYear())