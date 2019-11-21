var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var currentDay = $("#currentDay")

currentDay.text(months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear());
console.log(months[d.getMonth()])
console.log(d.getDate())
console.log(d.getFullYear())

var btn = [
    {btn9: $("#9am").val()},
    {btn10: $("#10am").val()},
    {btn11: $("#11am").val()},
    {btn12: $("#12pm").val()},
    {btn1: $("#1pm").val()},
    {btn2: $("#2pm").val()},
    {btn3: $("#3pm").val()},
    {btn4: $("#4pm").val()},
    {btn5: $("#5pm").val()}
]

$("#btn9").click(function(event){
    event.preventDefault();


    var addEvent9 = $("#9am").val();
    localStorage.setItem("addEvent9", addEvent9);
    console.log(addEvent9);
    getEvent9();

});

getEvent9();

function getEvent9() {
    var savedEvent9 = localStorage.getItem("addEvent9");
    $("#9am").val(savedEvent9);
}