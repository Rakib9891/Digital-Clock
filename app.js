const hourShow = document.querySelector("#hour");
const minuteShow = document.querySelector("#minute");
const secondShow = document.querySelector("#second");
const amPm = document.querySelector("#am-pm");


function showTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    
    if (hours > 12) {
      hours = hours - 12;
      amPm.textContent = "PM";
    } else {
      amPm.textContent = "AM";
    }

  hourShow.textContent = hours;
  minuteShow.textContent = minutes;
  secondShow.textContent = seconds;
    setTimeout(showTime, 1000);
}
showTime();
