//console.log("hello world");

/* This is the javascript program for a Work Daily Scheduler*
Written by Marlon Guandique */

//Display the current date
var dateToday = moment().format(`ddd, ll`);
$("#currentDay").append(dateToday);

//audit current time
var auditTask = function() {
    for (let i = 0; i < 24; i++) {
        const $div = $("div#" + i);
        const currentHour = moment().format("H");
        console.log(currentHour);

        if (i > currentHour) {
            $($div).siblings("textarea")
            .addClass("future")
            .removeClass("description");
        }
        if (i < currentHour) {
            $($div).siblings("textarea")
            .addClass("past")
            .removeClass("description");
        }

        if (i == currentHour) {
            $($div).siblings("textarea")
            .addClass("present")
            .removeClass("description");
        }
        else {
        }
    };
};
auditTask();

//audit function to run every 30 min
setInterval(function () {
    auditTask();
}, 1800000);

var buttonClicked =$(event.target).attr('data-name');
var taskTime = buttonClicked;
var taskDescription = $("#text-area-" + buttonClicked).val().trim();
console.log(taskTime)
console.log(taskDescription);

var task = {
    id: taskTime,
    taskDescription: taskDescription
};

saveTasks(task);


//value text is changed

$("textarea").on("change", "input[type='text']", function () {
});

//save tasks in jQuery
$(".saveBtn").click(function (event) {
});

//helpers functions

function saveTasks(task) {
    var tasks =JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
        tasks = [];
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    saveTasks();

}
