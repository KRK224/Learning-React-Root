setInterval(logClockTime, 1000);

function logClockTime() {
  var time = getClockTime();

  console.clear();
  console.log(time);
}

function getClockTime() {
  // 현재 시간을 얻는다
  var date = new Date();
  var time ="";

  // 시간을 직렬화한다.
  var time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM"
  }

  // 상용시로 변환한다
  if(time.hours == 12) {
    time.ampm = "PM";
  } else if (time.hours> 12){
    time.ampm = "PM";
    time.hours -= 12;
  }

  // 시간을 두 글자로 만들기 위해 앞에 0을 붙인다.
  if (time.hours <10) {
    time.hours = "0" + time.hours;
  }

  if(time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }

  if(time.seconds < 10){
    time.seconds = "0" + time.seconds;
  }

  // "hh:mm:ss tt 형식의 문자열을 만든다"
  return time.hours +":" +time.minutes +":" + time.seconds + " " + time.ampm;

}