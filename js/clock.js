const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  let hour = String(date.getHours()).padStart(2, "0");
  let minute = String(date.getMinutes()).padStart(2, "0");
  let second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${second}`;
}
getClock();
//1초 기다린후, 1초마다 계속 호출
setInterval(getClock, 1000);
