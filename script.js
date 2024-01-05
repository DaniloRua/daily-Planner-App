var currentDayEl = $('#currentDay')

//date display
var now = dayjs('05-01-2024').format('dddd' +', '+ 'MMMM MM')
currentDayEl.text(now);
