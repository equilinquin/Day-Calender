var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var currentDay = $("#currentDay")

currentDay.text(months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear());
console.log(months[d.getMonth()])
console.log(d.getDate())
console.log(d.getFullYear())

var eventArr = ["addEvent9","addEvent10", "addEvent11", "addEvent12", "addEvent1", "addEvent2", "addEvent3", "addEvent4", "addEvent5"]



$(".saveBtn").click(function(event) {
    event.preventDefault();
    var textAreaId = $(this).attr("data-hour");
    var eventVar = $(this).attr("data-addEvent");
    localStorage.setItem(eventVar, $("#" + textAreaId).val());
    getEvent(); 
});

getEvent();
function getEvent () {
    var savedEvent9 = localStorage.getItem(eventArr[0]);
    $("#9-am").val(savedEvent9);
    var savedEvent10 = localStorage.getItem(eventArr[1]);
    $("#10-am").val(savedEvent10);
    var savedEvent11 = localStorage.getItem(eventArr[2]);
    $("#11-am").val(savedEvent11);
    var savedEvent12 = localStorage.getItem(eventArr[3]);
    $("#12-pm").val(savedEvent12);
    var savedEvent1 = localStorage.getItem(eventArr[4]);
    $("#13-pm").val(savedEvent1);
    var savedEvent2 = localStorage.getItem(eventArr[5]);
    $("#14-pm").val(savedEvent2);
    var savedEvent3 = localStorage.getItem(eventArr[6]);
    $("#15-pm").val(savedEvent3);
    var savedEvent4 = localStorage.getItem(eventArr[7]);
    $("#16-pm").val(savedEvent4);
    var savedEvent5 = localStorage.getItem(eventArr[8]);
    $("#17-pm").val(savedEvent5);
};

function updateHour() {
    var currentHour = moment().hours();
    console.log(currentHour)
    
    $("textarea").each(function() {

        var hourBlock = parseInt($(this).attr("id").split("-")[0]);
        console.log(hourBlock)

        if (hourBlock < currentHour) {
            $(this).addClass("past");
        }else if (hourBlock === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });

};
updateHour();