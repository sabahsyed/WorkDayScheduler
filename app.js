/*
1.create all the hours rows in html
2.add the current date and time
3.enter text in <textarea> and save it (localstorage)
4. create a function with switch statements that scans which houris clicked and saves appropriate data
5. show past,present and future time differnce(use style.css for reference)
*/
$(document).ready(function(){
//localStorage.getItem("9am");
$("#9am").val(localStorage.getItem("9am"));
var $time  = moment();
var $currentTime = $("#currentDay").text($time.format("h:mm:ss a M/DD/YYYY"));
var $saveBtn = $(".saveBtn");
var $currentHour = $(".hour");
var $nineAM = moment($currentHour.get(0).innerHTML , 'h:mma');
var $tenAM = moment($currentHour.get(1).innerHTML , 'h:mma');
var $elevenAM = moment($currentHour.get(2).innerHTML , 'h:mma');
var $twelvePM = moment($currentHour.get(3).innerHTML , 'h:mma');
var $onePM = moment($currentHour.get(4).innerHTML , 'h:mma');
var $twoPM = moment($currentHour.get(5).innerHTML , 'h:mma');
var $threePM = moment($currentHour.get(6).innerHTML , 'h:mma');
var $fourPM = moment($currentHour.get(7).innerHTML , 'h:mma');
var $fivePM = moment($currentHour.get(8).innerHTML ,'h:mma');
var $current = moment().format("hA");
var $nine = $nineAM.format("hA");
console.log("$nine is :" + $nine);
console.log("9am is : " + $nineAM);
console.log("Current time is : " + $current);
$saveBtn.on("click" , function(){
    console.log("Save() started");
    // var isafter = moment().isAfter($fivePM);
    // console.log(isafter);
    console.log($("#9am").val());
    localStorage.setItem("9am", $("#9am").val());
    // if(($currentHour.get(0).innerHTML) <= time.format(h)){
    //         console.log("hello");
   
   
    // console.log($currentHour.get(0).innerHTML);
//    var noon  = moment($currentHour.get(3).innerHTML, 'h:mma');
//     var beginningTime = moment($currentHour.get(0).innerHTML, 'h:mma');
//     var endTime = moment('10:00am', 'h:mma');
//     console.log(beginningTime.isBefore(endTime)); 
//     console.log(noon.isBefore(endTime)); 
    
}); 
});




























// var lastYear = moment()
// lastYear.add(-1, 'year')

// var isBefore = lastYear.isBefore(moment())
// var diffDays = moment().diff(lastYear, 'days')
// var formattedlastYear = lastYear.format("h:mm a M/DD/YYYY")

// console.log(isBefore)
// console.log(diffDays)
// console.log(formattedlastYear)

// var todayTime = moment("13:45", "HH:mm")
// console.log(todayTime)
// console.log(todayTime.format("h:mm a"))

// var monthDay = moment("7:00 5/28/1988", "H:mm M/DD/YYYY")
// console.log(monthDay)

// document.getElementById("currentDay").innerHTML = moment();

