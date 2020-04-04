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
$("#10am").val(localStorage.getItem("10am"));
$("#11am").val(localStorage.getItem("11am"));
$("#12pm").val(localStorage.getItem("12pm"));
$("#1pm").val(localStorage.getItem("1pm"));
$("#2pm").val(localStorage.getItem("2pm"));
$("#3pm").val(localStorage.getItem("3pm"));
$("#4pm").val(localStorage.getItem("4pm"));
$("#5pm").val(localStorage.getItem("5pm"));
//var startTime = "09:00";
var $time = moment().format("H");
var $currentDayTime = $("#currentDay").text(moment().format('LLLL'));
var $saveBtn = $(".saveBtn");
var $currentHour = $(".hour");
//var $nineAM = moment($currentHour.get(0).innerHTML , 'H:mma');

// Converting time to military to compare
var $currentTime = moment().add( 21, 'H').hours();
var $9am = moment($currentHour.get(0).innerHTML , 'H').format("H");
var $10am =  moment($currentHour.get(1).innerHTML , 'H:mma').format("H");
var $11am = moment($currentHour.get(2).innerHTML , 'H:mma').format("H");
var $12pm = moment($currentHour.get(3).innerHTML , 'H:mma').format("H");
var $1pm = moment($currentHour.get(4).innerHTML , 'H:mma').format("H");
var $2pm = moment($currentHour.get(5).innerHTML , 'H:mma').format("H");
var $3pm = moment($currentHour.get(6).innerHTML , 'H:mma').format("H");
var $4pm =  moment($currentHour.get(7).innerHTML , 'H:mma').format("H");
var $5pm = moment($currentHour.get(8).innerHTML ,'H:mma').format("H");


$saveBtn.on("click" , function(){
    console.log("Save() started");
    // var isafter = moment().isAfter($fivePM);
    // console.log(isafter);
    localStorage.setItem("9am", $("#9am").val());
    localStorage.setItem("10am", $("#10am").val());
    localStorage.setItem("11am", $("#11am").val());
    localStorage.setItem("12pm", $("#12pm").val());
    localStorage.setItem("1pm", $("#1pm").val());
    localStorage.setItem("2pm", $("#2pm").val());
    localStorage.setItem("3pm", $("#3pm").val());
    localStorage.setItem("4pm", $("#4pm").val());
    localStorage.setItem("5pm", $("#5pm").val());
    // if(($currentHour.get(0).innerHTML) <= time.format(h)){
    //         console.log("hello");
   console.log("I am edited  time: " + $currentTime);
   console.log("I am local time: "+ $time);
   
    // console.log($currentHour.get(0).innerHTML);
//    var noon  = moment($currentHour.get(3).innerHTML, 'h:mma');
//     var beginningTime = moment($currentHour.get(0).innerHTML, 'h:mma');
//     var endTime = moment('10:00am', 'h:mma');
//     console.log(beginningTime.isBefore(endTime)); 
//     console.log(noon.isBefore(endTime)); 
   
   if($1pm < $4pm ){
       console.log($9am);
   }
   if($currentTime == $9am){
    $("#9am").removeClass("past future");
    $("#10am").removeClass(" present past ");
    $("#11am").removeClass(" present past ");
    $("#12pm").removeClass(" present past ");
    $("#1pm").removeClass(" present past ");
    $("#2pm").removeClass(" present past ");
    $("#3pm").removeClass(" present past ");
    $("#4pm").removeClass(" present past ");
    $("#5pm").removeClass(" present past ");
    }else
   if($currentTime == $10am){
    $("#9am").removeClass(" present future "); //past
    $("#10am").removeClass(" past future");//present
    $("#11am").removeClass(" present past "); //future
    $("#12pm").removeClass(" present past ");
    $("#1pm").removeClass(" present past ");
    $("#2pm").removeClass(" present past ");
    $("#3pm").removeClass(" present past ");
    $("#4pm").removeClass(" present past ");
    $("#5pm").removeClass(" present past ");
   }else
   if($currentTime == $11am){
    $("#9am").removeClass(" present future ");
    $("#10am").removeClass(" present future ");
    $("#11am").removeClass(" past future");
    $("#12pm").removeClass(" present past ");
    $("#1pm").removeClass(" present past ");
    $("#2pm").removeClass(" present past ");
    $("#3pm").removeClass(" present past ");
    $("#4pm").removeClass(" present past ");
    $("#5pm").removeClass(" present past ");
   }else
   if($currentTime == $12pm){
    $("#9am").removeClass(" present future ");
    $("#10am").removeClass(" present future ");
    $("#11am").removeClass(" present future ");
    $("#12pm").removeClass(" past future");
    $("#1pm").removeClass(" present past ");
    $("#2pm").removeClass(" present past ");
    $("#3pm").removeClass(" present past ");
    $("#4pm").removeClass(" present past ");
    $("#5pm").removeClass(" present past ");

   }else
   if($currentTime == $1pm){
    $("#9am").removeClass(" present future ");
    $("#10am").removeClass(" present future ");
    $("#11am").removeClass(" present future ");
    $("#12pm").removeClass(" present future ");
    $("#1pm").removeClass(" past future");
    $("#2pm").removeClass(" present past ");
    $("#3pm").removeClass(" present past ");
    $("#4pm").removeClass(" present past ");
    $("#5pm").removeClass(" present past ");
   }else
   if($currentTime == $2pm){
    $("#9am").removeClass(" present future ");
    $("#10am").removeClass(" present future ");
    $("#11am").removeClass(" present future ");
    $("#12pm").removeClass(" present future ");
    $("#1pm").removeClass(" present future ");
    $("#2pm").removeClass(" past future");
    $("#3pm").removeClass(" present past ");
    $("#4pm").removeClass(" present past ");
    $("#5pm").removeClass(" present past ");
   }else
   if($currentTime == $3pm){
    $("#9am").removeClass(" present future ");
    $("#10am").removeClass(" present future ");
    $("#11am").removeClass(" present future ");
    $("#12pm").removeClass(" present future ");
    $("#1pm").removeClass(" present future ");
    $("#2pm").removeClass(" present future ");
    $("#3pm").removeClass(" past future");
    $("#4pm").removeClass(" present past ");
    $("#5pm").removeClass(" present past ");
   }else
   if($currentTime == $4pm){
    $("#9am").removeClass(" present future ");
    $("#10am").removeClass(" present future ");
    $("#11am").removeClass(" present future ");
    $("#12pm").removeClass(" present future ");
    $("#1pm").removeClass(" present future ");
    $("#2pm").removeClass(" present future ");
    $("#3pm").removeClass(" present future ");
    $("#4pm").removeClass(" past future");
    $("#5pm").removeClass(" present past ");
   }
   else
   if($currentTime == $5pm){
    $("#9am").removeClass(" present future ");
    $("#10am").removeClass(" present future ");
    $("#11am").removeClass(" present future ");
    $("#12pm").removeClass(" present future ");
    $("#1pm").removeClass(" present future ");
    $("#2pm").removeClass(" present future ");
    $("#3pm").removeClass(" present future ");
    $("#4pm").removeClass(" present future ");
    $("#5pm").removeClass(" past future");
   }
   
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

