var currentDayEl = $('#currentDay')
var container = $(".container");

//date display
var now = dayjs('05-01-2024').format('dddd' +', '+ 'MMMM MM')
currentDayEl.text(now);

//color scheme
var currentHour =dayjs().format('HH')

// create timeblocks
    for (var i = 9; i <= 20; i++) {
      var row = $("<div>").addClass("row");
      var hourDiv = $("<div>").addClass("col-1 hour time-block").text(i + ":00 pm");
      var textarea = $("<textarea>").attr("id", i).addClass("col-8 input textarea");
      var saveBtn = $("<button>").addClass("col-1 saveBtn").html('<i class="far fa-save"></i>');
     
        //adding colors
        if(Number(currentHour) == textarea.attr('id')){
            textarea.addClass("present")
        } else if(Number(currentHour) < textarea.attr('id')){
            textarea.addClass("future")
        } else{
            textarea.addClass("past")
        }
        console.log(textarea.attr("id"))

      row.append(hourDiv, textarea, saveBtn);
      container.append(row);
    }

