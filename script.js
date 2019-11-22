var btn = [
    $("#btn9"),
    $("#btn10"),
    $("#btn11"),
    $("#btn12"),
    $("#btn1"),
    $("#btn2"),
    $("#btn3"),
    $("#btn4"),
    $("#btn5")
]

var addEvent = [
    $("#9am").val(),
    $("#10am").val(),
    $("#11am").val(),
    $("#12pm").val(),
    $("#1pm").val(),
    $("#2pm").val(),
    $("#3pm").val(),
    $("#4pm").val(),
    $("#5pm").val()
]

var eventArr = ["addEvent9","addEvent10", "addEvent11", "addEvent12", "addEvent1", "addEvent2", "addEvent3", "addEvent4", "addEvent5"]


for (var i = 0; i < btn.length; i++) {
    btn[i].click(function(event) {
        event.preventDefault();

        for(var j = 0; j < addEvent.length; j++) {

            for (var k = 0; k < eventArr.length; k++) {

            if (i === j && j === k) {
                localStorage.setItem(eventArr[k], addEvent[j]);
            }
        }
    }
     getEvent();   

    })
}

getEvent();

function getEvent () {
    var savedEvent9 = localStorage.getItem(eventArr[0])
    //     {savedEvent10 = localStorage.getItem("addEvent10")}
    // ]
    //for (var i = 0; i < savedEvent.length; i++) {
        var nineAM = $("#9am");
        //var tenAM = $("#10am");

        nineAM.val(savedEvent9);
        //tenAM.val(savedEvent10);
    }

 

// $("#btn9").click(function(event){
//     event.preventDefault();


//     var addEvent9 = $("#9am").val();
//     localStorage.setItem("addEvent9", addEvent9);
//     console.log(addEvent9);
//     getEvent9();

// });

// getEvent9();

// function getEvent9() {
//     var savedEvent9 = localStorage.getItem("addEvent9");
//     $("#9am").val(savedEvent9);
// }