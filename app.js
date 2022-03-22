// 선언한 고정변수를 객체로 삼아 그 안에서 검색
const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");

const welcome = document.querySelector(".welcome");

const CLASSNAME_HIDDEN = "hidden";

const KEY_USERNAME = "username";

//인자를 적어놔야 정보를 얻어올 수 있음 event로 적는게 관행
//eventlistener가 이 함수를 실행시키면서 전달하는 event 정보
function onLoginSubmit(event) {
  //preventDefault는 기본적으로 수행되는 동작을 막는 함수
  event.preventDefault();

  //입력값을 localStorage에 저장
  const username = loginInput.value;
  localStorage.setItem(KEY_USERNAME, username);
  loginForm.classList.add(CLASSNAME_HIDDEN);
  paintWelcome(username);
}
//welcome 보이게 하는 함수
function paintWelcome(username) {
  welcome.innerText = `Welcome ${username} :)`;
  welcome.classList.remove(CLASSNAME_HIDDEN);
}

const savedUsername = localStorage.getItem(KEY_USERNAME);

//localStorage에 username이 있는지 없는지 검사
if (savedUsername === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  //onLoginSubmit 실행하면서 방금 발생한 일, 즉 submitEvent에 대한 정보를 인자로 전달
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintWelcome(savedUsername);
}
