(function () {
  "use strict";

  const get = (target) => {
    return document.querySelector(target);
  };

  const $todos = get(".todos");
  const $form = get(".todo_form");
  const $todoInput = get(".todo_input");
  const $pagination = get(".pagination");
  const API_URL = "http://localhost:3000/todos";

  const limit = 5; // 한 페이지 당 나타낼 데이터의 갯수
  let currentPage = 1; // 현재 페이지
  const totalCount = 53; // 총 데이터의 갯수
  const pageCount = 5; // 화면에 나타날 페이지의 갯수

  /** 페이지네이션 */
  const pagination = () => {
    let totalPage = Math.ceil(totalCount / limit);
    let pageGroup = Math.ceil(currentPage / pageCount);

    console.log({ totalPage, pageGroup });

    let lastNumber = pageGroup * pageCount;
    if (lastNumber > totalPage) {
      lastNumber = totalPage;
    }
    let firstNumber = lastNumber - (pageCount - 1);

    const next = lastNumber + 1;
    const prev = firstNumber - 1;

    let html = "";

    if (prev > 0) {
      html += `<button class="prev" data-fn="prev">이전</button>`;
    }

    for (let i = firstNumber; i <= lastNumber; i++) {
      html += `<button class="pageNumber" id="page_${i}">${i}</button>`;
    }

    // if (lastNumber = totalPage) {
    if (next <= totalPage) {
      html += `<button class="next" data-fn="next">다음</button>`;
    }

    $pagination.innerHTML = html;

    const $currentPageNumber = get(`.pageNumber#page_${currentPage}`);
    $currentPageNumber.style.color = "#9dc0e9";

    const $currentPageNumbers = document.querySelectorAll(".pagination button");
    $currentPageNumbers.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.fn === "prev") {
          currentPage = prev;
        } else if (button.dataset.fn === "next") {
          currentPage = next;
        } else {
          currentPage = parseInt(button.innerText);
        }
        pagination();
        getTodos();
      });
    });
  };

  /** todo ele 생성 */
  const createTodoElement = (item) => {
    const { id, content, completed } = item;
    const $todoItem = document.createElement("div");
    const isChecked = completed ? "checked" : "";
    $todoItem.classList.add("item");
    $todoItem.dataset.id = id;
    $todoItem.innerHTML = `
            <div class="content">
              <input
                type="checkbox"
                class='todo_checkbox'
                ${isChecked} 
              />
              <label>${content}</label>
              <input type="text" value="${content}" />
            </div>
            <div class="item_buttons content_buttons">
              <button class="todo_edit_button">
                <i class="far fa-edit"></i>
              </button>
              <button class="todo_remove_button">
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
            <div class="item_buttons edit_buttons">
              <button class="todo_edit_confirm_button">
                <i class="fas fa-check"></i>
              </button>
              <button class="todo_edit_cancel_button">
                <i class="fas fa-times"></i>
              </button>
            </div>
      `;
    return $todoItem;
  };

  /** DOM 랜더링 */
  const renderAllTodos = (todos) => {
    $todos.innerHTML = "";
    todos.forEach((item) => {
      const todoElement = createTodoElement(item);
      $todos.appendChild(todoElement);
    });
  };

  /** 데이터 얻어오기 */
  const getTodos = () => {
    fetch(`${API_URL}?_page=${currentPage}&_limit=${limit}`)
      .then((response) => response.json())
      .then((todos) => renderAllTodos(todos))
      .catch((error) => console.error(error.message));
  };

  /** todo 추가하기 */
  const addTodo = (e) => {
    e.preventDefault();
    const todo = {
      content: $todoInput.value,
      completed: false,
    };
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then(getTodos)
      .then(() => {
        $todoInput.value = "";
        $todoInput.focus();
      })
      .catch((error) => console.error(error));
  };

  /** 완료 상태 */
  const toggleTodo = (e) => {
    if (e.target.className !== "todo_checkbox") return;
    const $item = e.target.closest(".item");
    const id = $item.dataset.id;
    const completed = e.target.checked;

    fetch(`${API_URL}/:${id}`, {
      method: "PATCH", // 부분적으로 접근
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    })
      .then(getTodos)
      .catch((error) => console.error(error));
  };

  /** 수정 및 삭제버튼 클릭 시 변경 */
  const changeEditMode = (e) => {
    const $item = e.target.closest(".item");
    const $label = $item.querySelector("label");
    const $editInput = $item.querySelector('input[type="text"]');
    const $contentButtons = $item.querySelector(".content_buttons");
    const $editButtons = $item.querySelector(".edit_buttons");
    const value = $editInput.value;

    if (e.target.className === "todo_edit_button") {
      $label.style.display = "none";
      $editInput.style.display = "block";
      $contentButtons.style.display = "none";
      $editButtons.style.display = "block";
      $editInput.focus();
      $editInput.value = "";
      $editInput.value = value;
    }

    if (e.target.className === "todo_edit_cancel_button") {
      $label.style.display = "block";
      $editInput.style.display = "none";
      $contentButtons.style.display = "block";
      $editButtons.style.display = "none";
      $editInput.value = $label.innerText;
    }
  };

  /** 수정 버튼 */
  const editTodo = (e) => {
    if (e.target.className !== "todo_edit_confirm_button") return;
    const $item = e.target.closest(".item");
    const id = $item.dataset.id;
    const $editInput = $item.querySelector('input[type="text"]');
    const content = $editInput.value;

    fetch(`${API_URL}/:${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    })
      .then(getTodos)
      .catch((error) => console.error(error));
  };

  /** 삭제 버튼 */
  const removeTodo = (e) => {
    if (e.target.className !== "todo_remove_button") return;
    const $item = e.target.closest(".item");
    const id = $item.dataset.id;

    fetch(`${API_URL}/:${id}`, { method: "DELETE" })
      .then(getTodos)
      .catch((error) => console.error(error));
  };

  /** 이벤트 처리 */
  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      getTodos();
      pagination();
    });

    $form.addEventListener("submit", addTodo);
    $todos.addEventListener("click", toggleTodo);
    $todos.addEventListener("click", changeEditMode);
    $todos.addEventListener("click", editTodo);
    $todos.addEventListener("click", removeTodo);
  };
  init();
})();
