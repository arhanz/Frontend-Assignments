let hour = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let period = document.getElementById("period");
let day = document.getElementById("day");
let date = document.getElementById("date");

const clock = setInterval(function time() {
  let date_now = new Date();
  let hr = date_now.getHours();
  let min = date_now.getMinutes();
  let sec = date_now.getSeconds();
  let d = date_now.getDay();
  let ampm = hr >= 12 ? "PM" : "AM";
  if (d == 1) {
    d = "Monday";
  } else if (d == 2) {
    d = "Tuesday";
  } else if (d == 3) {
    d = "Wednesday";
  } else if (d == 4) {
    d = "Thursday";
  } else if (d == 5) {
    d = "Friday";
  } else if (d == 6) {
    d = "Saturday";
  } else if (d == 7) {
    d = "Sunday";
  }
  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  var aday = date_now.getDate();
  var month = date_now.getMonth() + 1;
  var year = date_now.getFullYear();
  if (month == 1) {
    month = "january";
  } else if (month == 2) {
    month = "February";
  } else if (month == 3) {
    month = "March";
  } else if (month == 4) {
    month = "April";
  } else if (month == 5) {
    month = "May";
  } else if (month == 6) {
    month = "June";
  } else if (month == 7) {
    month = "July";
  } else if (month == 8) {
    month = "August";
  } else if (month == 9) {
    month = "September";
  } else if (month == 10) {
    month = "October";
  } else if (month == 11) {
    month = "November";
  } else if (month == 12) {
    month = "December";
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  date.innerHTML = aday + "/" + month + "/" + year;
  hour.innerHTML = hr;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  period.innerHTML = ampm;
  day.innerHTML = d;
}, 1000);
