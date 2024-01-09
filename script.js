var currentDayEl = $('#currentDay');
var container = $(".container");

// Date display
var now = dayjs('05-01-2024').format('dddd' + ', ' + 'MMMM DD');
currentDayEl.text(now);
var currentHour = dayjs().format('HH');

//create timeblocks using a function and id
for (var i = 9; i <= 17; i++) {
    createRow(i);
}

// Function to create a row with ID
function createRow(id) {
    //get the values from localStorage before create rows
    var storedValue = localStorage.getItem(id);

    var row = $("<div>").addClass("row");
    var hourDiv = $("<div>").addClass("col-1 hour time-block").text(id + ":00 pm");
    var textarea = $("<textarea>").attr("id", id).addClass("col-8 input textarea").val(storedValue);
    var saveBtn = $("<button>").addClass("col-1 saveBtn").html('<i class="far fa-save"></i>');

    // Adding colors
    if (Number(currentHour) == id) {
        textarea.addClass("present");
    } else if (Number(currentHour) < id) {
        textarea.addClass("future");
    } else {
        textarea.addClass("past");
    }
    // Save button click event
    saveBtn.on('click', function () {
        saveLocalStorage(textarea);
    });

    row.append(hourDiv, textarea, saveBtn);
    container.append(row);
}

// Function save local storage
function saveLocalStorage(textarea) {
    var textareaId = textarea.attr('id');
    var textareaValue = textarea.val();

    localStorage.setItem(textareaId, textareaValue);
}

// save buttons event
container.on('click', '.saveBtn', function () {
    var textarea = $(this).prev();
    saveLocalStorage(textarea);
});
