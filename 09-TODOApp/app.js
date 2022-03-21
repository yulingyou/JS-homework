const taskInput = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn")
const ul = document.querySelector(".todo-list")
const closeBtn = document.querySelector(".closeBtn")

addBtn.addEventListener("click", function () {
  // const list = document.createElement("li")
  // list.textContent = taskInput.value
  // const list =
  // list.textContent = taskInput.value
  // console.log((ul.textContent = "12"))
  // ul.textContent = taskInput.value
  // ul.className = "close"
  // console.log(ul)
  // document
  // .querySelector("section")
  // .insertAdjacentElement("afterbegin", ul.textContent)

  if (taskInput.value.trim() !== "") {
    // const list = ul.taskInput
    // ul.insertAdjacentElement("afterbegin", list)
    ul.innerHTML =
      `<li class="todo-item">
    <span class="item">${taskInput.value}</span>
    <button class="closeBtn">X</button>
    </li>` + ul.innerHTML

    taskInput.value = ""
    taskInput.focus()

    ul.addEventListener("click", (e) => {
      if (e.target.matches("button")) e.target.parentElement.remove()
    })
  } else {
    alert("請輸入待辦事項")
  }
})

taskInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    if (taskInput.value.trim() !== "") {
      ul.innerHTML =
        ul.innerHTML +
        `<li class="todo-item">
            <span class="item">${taskInput.value}</span>
            <button class="closeBtn">X</button>
          </li>`

      taskInput.value = ""

      ul.addEventListener("click", (e) => {
        if (e.target.nodeName == "BUTTON") {
          e.target.parentElement.remove()
        }
      })
    } else {
      alert("請輸入待辦事項")
    }
  }
})
