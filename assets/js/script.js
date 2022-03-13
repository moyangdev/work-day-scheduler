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
    $('#9 .description').val(localStorage.getItem("9"))
    $('#10 .description').val(localStorage.getItem("10"))
    $('#11 .description').val(localStorage.getItem("11"))
    $('#12 .description').val(localStorage.getItem("12"))
    $('#13 .description').val(localStorage.getItem("13"))
    $('#14 .description').val(localStorage.getItem("14"))
    $('#15 .description').val(localStorage.getItem("15"))
    $('#16 .description').val(localStorage.getItem("16"))
    $('#17 .description').val(localStorage.getItem("17"))
}

var auditCalendar = function() {

    //variable for current timestamp
    var currentTime  = moment().hours();
    //console.log(currentTime);
    //check calendar time against current time and add color block
    $(".time-block").each(function () {
        var calendarTime = parseInt($(this).attr("id"));
        //console.log(calendarTime);
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
