var lastYear = moment()
lastYear.add(-1, 'year')

var isBefore = lastYear.isBefore(moment())
var diffDays = moment().diff(lastYear, 'days')
var formattedlastYear = lastYear.format("h:mm a M/DD/YYYY")

console.log(isBefore)
console.log(diffDays)
console.log(formattedlastYear)

var todayTime = moment("13:45", "HH:mm")
console.log(todayTime)
console.log(todayTime.format("h:mm a"))

var monthDay = moment("7:00 5/28/1988", "H:mm M/DD/YYYY")
console.log(monthDay)


// $(".fas").on("click", function(){
//     console.log(this)
// })

// function $(val){
//     return new _$(val)
// }

// function _$(val){
//     // "#myDIv"
//     // ".btns"
//     this.id = val[0] === "#";
//     this.class = val[0] === ".";
//     this.el;

//     // "#mydiv"
//     // [#,m,y,d,i,v]
//     // [m,y,d,i,v]
//     // mydiv
//     if(this.id || this.class){
//         this.el = val.split("").splice(1).join("")
//     }

//     this.on = function(event, callback){
//         if(this.id){
//             return document.getElementById(this.el).addEventListener(event, callback)
//         }
//         else if(this.class){
//             var temp = document.getElementsByClassName(this.el);
//             for(var el of temp){
//                 el.addEventListener(event, callback)
//             }
//         }
//     }
// }