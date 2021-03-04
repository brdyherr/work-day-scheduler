function currentDay() {
  $("#currentDay").text(moment().format("MMMM Do, YYYY - hh:mm A"));
}

currentDay();
