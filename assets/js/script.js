//formats current day and date
$("#currentDay").text(moment().format('dddd, MMMM Do'));

//when save button is clicked, sets hour id and description value in local storage
$(".saveBtn").on("click", function() {
var hour = $(this).parent().attr("id");
var description = $(this).siblings(".description").val();
localStorage.setItem(hour, description);
})

//retrieves calendar from local storage
var loadCalendar = function() {
    $('#9am .description').val(localStorage.getItem("9am"))
    $('#10am .description').val(localStorage.getItem("10am"))
    $('#11am .description').val(localStorage.getItem("11am"))
    $('#12pm .description').val(localStorage.getItem("12pm"))
    $('#1pm .description').val(localStorage.getItem("1pm"))
    $('#2pm .description').val(localStorage.getItem("2pm"))
    $('#3pm .description').val(localStorage.getItem("3pm"))
    $('#4pm .description').val(localStorage.getItem("4pm"))
    $('#5pm .description').val(localStorage.getItem("5pm"))
}

var auditCalendar = function() {

    //variable for current timestamp
    var currentTime  = moment().hours();

    //check calendar time against current time and add color block
    $(".time-block").each(function () {
        var calendarTime = parseInt($(this).attr("id"));
        if (calendarTime < currentTime) {
            $(this).addClass("past");
        } 
        else if (calendarTime > currentTime) {
            $(this).addClass("future");
        }
        else {
            $(this).addClass("present");
        }
    })
};

loadCalendar();
auditCalendar();
