var currentDayEl = $('#currentDay')
var container = $(".container");

//date display
var now = dayjs('05-01-2024').format('dddd' +', '+ 'MMMM MM')
currentDayEl.text(now);

// create timeblocks
    for (var i = 9; i <= 17; i++) {
      var row = $("<div>").addClass("row");
      var hourDiv = $("<div>").addClass("col-1 hour time-block").text(i + ":00 pm");
      var textarea = $("<textarea>").attr("id", i).addClass("col-8 input textarea");
      var saveBtn = $("<button>").addClass("col-1 saveBtn").html('<i class="far fa-save"></i>');
      row.append(hourDiv, textarea, saveBtn);
      container.append(row);
        
      console.log(container)
    }
