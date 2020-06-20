/* This is the javascript program for a Daily Scheduler*
Written by Marlon Guandique */

//Display the current date
var dateToday = moment().format(`LLLL`);
$("#currentDay").append(dateToday);

$("#saveBtn").on('btn', function (e) {
    alert("I was clicked, going to save")
    let textinput = $("textArea").val()
    alert("")
})

// Declares a 'list' variable that holds the parsed to-do items retrieved from 'localStorage'
// If there is nothing in 'localStorage', sets the 'list' to an empty array
var list = JSON.parse(localStorage.getItem('description')) || [];

// Renders our to-dos to the page
function renderTodos(list) {
    // Empties out the html
    $('#to-dos').empty();

    // Iterates over the 'list'
    for (var i = 0; i < list.length; i++) {
        // Creates a new variable 'toDoItem' that will hold a "<p>" tag
        // Sets the `list` item's value as text of this <p> element
        var toDoItem = $('<p>');
        toDoItem.text(list[i]);

        // Creates a button `toDoClose` with an attribute called `data-to-do` and a unique `id`
        var toDoClose = $('<button>');
        toDoClose.attr('data-to-do', i);

        // Gives the button a class called 'checkbox'
        toDoClose.addClass('checkbox');

        // Adds a checkmark symbol as its text value
        toDoClose.text('✓');

        // Adds the button to the `toDoItem`
        toDoItem = toDoItem.prepend(toDoClose);

        // Adds 'toDoItem' to the To-Do List div
        $('#to-dos').append(toDoItem);
    }
}

$('#add-to-do').on('btn', function (event) {
    event.preventDefault();

    // Get the to-do "value" from the textbox and store it as a variable using `.val()` and `.trim()`
    var toDoTask = $('#to-do')
        .val()
        .trim();

    // Add the new to-do to our local 'list' variable
    list.push(toDoTask);

    // Update the to-dos on the page
    renderTodos(list);

    // Save the to-dos into localStorage
    // We need to use JSON.stringify to turn the list from an array into a string
    localStorage.setItem('description', JSON.stringify(list));

    // Clear the textbox when done using `.val()`
    $('#to-do').val('');
});

$(document).on('btn', '.checkbox', function () {
    // Get the `id` of the button from its data attribute and hold in a variable called 'toDoNumber'
    var toDoNumber = $(this).attr('data-to-do');

    // Delete the to-do with that `id` from our local `list` using `.splice()`
    list.splice(toDoNumber, 1);

    // Update the to-dos on the page
    renderTodos(list);

    // Save the to-dos into localStorage
    // We need to use JSON.stringify to turn the list from an array into a string
    localStorage.setItem('description', JSON.stringify(list));
});

// render our to-dos on page load
renderTodos(list);