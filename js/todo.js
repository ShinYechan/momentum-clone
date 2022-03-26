const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

const todoArray = [];

const KEY_TODOS = "todos";

function handleTodoSubmit(event) {
  event.preventDefault(); //새로고침하는 submit의 기본 속성을 막아주기
  const todoText = todoInput.value;
  todoInput.value = "";
  const todoArrayObj = {
    text: todoText,
    id: Date.now(), //각각의 todo가 서로 구분될 수 있도록 고유한 id를 포함하여 객체로 선언
  };
  displayTodo(todoArrayObj);
  todoArray.push(todoArrayObj);
  console.log(todoArray);
  saveTodo(todoArray);
}

function displayTodo(todoArrayObj) {
  const list = document.createElement("li"); //추가할 리스트 생성
  const listContent = document.createElement("span"); //그 안에 내용 생성
  const listDelete = document.createElement("button"); //그 안에 삭제버튼 생성

  listContent.classList.add("todo-list__content");
  listDelete.classList.add("todo-list__delete"); //두개 다 클래스 넣어주기
  listDelete.id = todoArrayObj.id; //인자로 받은 id로 삭제 버튼을 구별

  listContent.innerText = todoArrayObj.text;
  listDelete.innerText = "Delete"; //만든 내용, 버튼에 텍스트 넣기

  listDelete.addEventListener("click", deleteTodo); //삭제 버튼에 삭제event 추가

  list.appendChild(listContent);
  list.appendChild(listDelete);
  todoList.appendChild(list); //리스트 안에 content, button 넣고나서 html로 넣기
}

function deleteTodo(event) {
  //event가 일어나는 element(= <button>)의 parentElement(= <li>)를 삭제
  event.currentTarget.parentElement.remove(); //element 삭제는 remove()

  //삭제할 때 누른 버튼의 id와 todoArray에 들어있는 id를 비교하여 일치하는 요소를 배열에서 삭제
  for (let i = 0; i < todoArray.length; i++) {
    if (todoArray[i].id === parseInt(event.target.id)) {
      todoArray.splice(i, 1); //배열 요소 삭제하는 함수, 뒤에 요소들은 앞으로 당겨짐
      saveTodo(todoArray); //최신화된 todoArray를 localStorage에 저장
    }
  }
  //   두번째 방법, todoArray가 let으로 선언되어야 함
  //   function deleteTodoArrayObj(obj) {
  //     return obj.id !== parseInt(event.target.id);
  //   }
  //   todoArray = todoArray.filter(deleteTodoArrayObj);
  //   saveTodo(todoArray);
}

function saveTodo(todos) {
  /*localstorage에 저장할 때, value값에 들어간 것은 저장될때 문자열의 형식으로 저장된다.
    이 저장된 문자열이 배열 선언의 형식(ex ["3","4"])을 가지고 있다면 localstorage에서도 배열로 인식한다.
    하지만 배열을 getItem()으로 반환하면 저장될때와 같은 문자열의 형식으로 리턴한다.

    만약 배열 객체를 그대로 value값으로 넣으면, 대괄호와 각각의 문자열을 감싸는 ""도 저장되는 문자열에 포함되지 않는다.
    따라서 배열 객체 전체를 선언 형식 그대로 문자열화하여 value값으로 넘겨야 한다.*/
  localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
}

//새로고침 후 저장된 list출력하기
function loadTodo() {
  //먼저 localStorage에 저장된 문자열을 배열로 받아오기
  const savedTodoArray = JSON.parse(localStorage.getItem(KEY_TODOS));

  //받아온 값이 있을 때(무조건 배열임)에만 출력
  if (savedTodoArray !== null) {
    /*배열 각각의 요소마다 displayTodo 실행, 이 때 함수의 인자로는 배열값을 넘겨준다.
      여기서 배열값은 todoContent이므로 원하는 결과로 이어짐*/
    savedTodoArray.forEach(displayTodo);
    /*이전에 저장된 todoArray는 현재 비어있으므로 저장되어있던 값들을 넣어준다.
      배열 자체 재할당이 불가하므로 각각의 배열 요소들을 push로 todoArray에 넣어준다.*/
    savedTodoArray.forEach((element) => {
      todoArray.push(element);
    });
  }
}
//form은 입력한 값을 기본적으로 submit하는 속성이 있음
todoForm.addEventListener("submit", handleTodoSubmit);
loadTodo();
