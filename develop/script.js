// display current date and time
const ids = [
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];
function currentDay() {
  $("#currentDay").text(moment().format("MMMM Do, YYYY - hh:mm A"));
}

function saveEvent(eventID) {
  // eventId = 5pm... -> #5pmta
  let eventInfo = $("#" + eventID + "ta").val();
  localStorage.setItem(eventID, eventInfo);
}

// decorate the divs with colors based on time..
function checkTimes() {
  var currentTime = moment().format("ha"); // time and am/pm

  ids.forEach((id) => {
    if (id == currentTime) {
      $(`#${id}ta`).addClass("present");
    } else if (moment().isAfter(moment(id, "ha"), "hour")) {
      $(`#${id}ta`).addClass("past");
    } else {
      $(`#${id}ta`).addClass("future");
    }
  });
}

function loadData() {
  ids.forEach((id) => $(`#${id}ta`).val(localStorage.getItem(id) || ""));
}

loadData();
currentDay();
checkTimes();

// set the variables that will contain the event details
var event = {
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
};
