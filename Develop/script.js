/* This is the javascript program for a Daily Scheduler*
Written by Marlon Guandique */

//Display the current date
var dateToday = moment().format(`LLLL`);
$("#currentDay").append(dateToday);

$("#saveBtn").on('click', function(e) {
    alert ("I was clicked, going to save")
    let textinput = $("textArea").val()
    alert("")
})