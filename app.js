const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
// 선언한 고정변수를 객체로 삼아 그 안에서 검색

const link = document.querySelector("a");

function onLoginSubmit(event) {
  //인자를 적어놔야 정보를 얻어올 수 있음 event로 적는게 관행
  event.preventDefault();
  //eventInfo는 eventlistener가 이 함수를 실행시키면서 전달하는 event 정보
  //preventDefault는 기본적으로 수행되는 동작을 막는 함수
  console.log(loginInput.value);
}
function handleLinkClick(event) {
  event.preventDefault();
}
loginForm.addEventListener("submit", onLoginSubmit);
//-> onLoginSubmit 실행하면서 방금 발생한 일, 즉 submitEvent에 대한 정보를 인자로 전달

link.addEventListener("click", handleLinkClick);
