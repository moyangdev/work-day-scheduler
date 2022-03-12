//formats current day and date
$("#currentDay").text(moment().format('dddd, MMMM Do'));

//when save button is clicked, sets hour id and description value in local storage
$(".saveBtn").on("click", function() {
var hour = $(this).parent().attr("id");
var description = $(this).siblings(".description").val();
localStorage.setItem(hour, description);
})