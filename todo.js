const input = document.querySelector("input")
const button = document.querySelector("button")
const ul = document.querySelector("ul")

console.log(input, button, ul)

button.addEventListener("click", ()=>{
    console.log(input.value);
})