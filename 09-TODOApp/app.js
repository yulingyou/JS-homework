const taskInput = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn")
const ul = document.querySelector(".todo-list")
const closeBtn = document.querySelector(".closeBtn")

addBtn.addEventListener("click", function () {
  if (taskInput.value !== "") {
    ul.innerHTML =
      `<li class="todo-item">
    <span class="item">${taskInput.value}</span>
    <button class="closeBtn">X</button>
  </li>` + ul.innerHTML

    taskInput.value = ""

    ul.addEventListener("click", (e) => {
      e.target.parentElement.remove()
    })
  } else {
    alert("請輸入待辦事項")
  }
})

taskInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    if (taskInput.value !== "") {
      ul.innerHTML =
        `<li class="todo-item">
            <span class="item">${taskInput.value}</span>
            <button class="closeBtn">X</button>
          </li>` + ul.innerHTML

      taskInput.value = ""

      ul.addEventListener("click", (e) => {
        e.target.parentElement.remove()
      })
    } else {
      alert("請輸入待辦事項")
    }
  }
})
