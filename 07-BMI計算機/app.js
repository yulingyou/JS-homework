// const height = document.querySelector("#bodyHeight")
// const weight = document.querySelector("#bodyWeight")
// const btn = document.querySelector("#button")
// console.log(btn)
// const result = document.querySelector("#resultText")

// btn.addEventListener("click", () => {
//   let w = weight.value
//   let h = height.value / 100
//   let bmiresult = w / (h * h)
//   result.textContent = bmiresult.toFixed(2)
// })

// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
const height = document.querySelector("#bodyHeight")
const weight = document.querySelector("#bodyWeight")
const btn = document.querySelector("#button")
const result = document.querySelector("#resultText")

btn.addEventListener("click", () => {
  let h = height.value / 100
  let w = weight.value
  let bmiresult = w / (h * h)
  result.textContent = bmiresult.toFixed(2)
})
