const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

console.log(input, button, ul);

button.addEventListener("click", () => {
  console.log(input.value);
  const newLi = document.createElement("li");
  newLi.innerText = input.value;
  ul.appendChild(newLi);
});
