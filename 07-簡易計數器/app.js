// 程式碼寫在這裡
document.addEventListener("DOMContentLoaded", function () {
  const plus = document.querySelector("#plus")
  const minus = document.querySelector("#minus")
  const count = document.querySelector("#counter")

  plus.addEventListener("click", () => {
    count.value++
  })

  minus.addEventListener("click", () => {
    if (count.value > 0) {
      count.value--
    }
  })
})
