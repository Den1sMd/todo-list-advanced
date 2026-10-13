const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

console.log(input, button, ul);

addEventListener("keydown", (e) => {
        console.log(e.code);

        const newvar = input.value;
        const official_var = newvar.trim();
        if (e.code == "Enter") {
          if (official_var.length == 0) {
        return 0;
        }
        else {
          const elementdelete = document.createElement("button");
          elementdelete.innerText = "Supprimer";
          ul.classList.add("forcontainer");
          const creatediv = document.createElement("div");
          const newLi = document.createElement("li");
          const emoji = document.createElement("p");

          emoji.innerHTML = "✅";
          newLi.innerText = input.value;
          creatediv.classList.add("fordiv");
          creatediv.appendChild(emoji);
          creatediv.appendChild(newLi);
          creatediv.appendChild(elementdelete);

          ul.appendChild(creatediv);

          elementdelete.classList.add("forbutton");
          emoji.classList.add("foremoji");

          if (input.value.length != 0) {
            input.value = "";
          }

          elementdelete.addEventListener(("click"), () => {
            newLi.remove();
            emoji.remove();
            elementdelete.remove();
          })

          emoji.addEventListener(("click"), () => {
            creatediv.classList.toggle("forcontainercomplete");
          })
        }
      }
    })

button.addEventListener("click", () => {
  console.log(input.value);
  console.log(input.value.length);


  const newvar = input.value;
  const official_var = newvar.trim();


  if (official_var.length == 0) {
    return 0;
  }
  else {
    const elementdelete = document.createElement("button");
    elementdelete.innerText = "Supprimer";
    ul.classList.add("forcontainer");
    const creatediv = document.createElement("div");
    const newLi = document.createElement("li");
    const emoji = document.createElement("p");

    emoji.innerHTML = "✅";
    newLi.innerText = input.value;
    creatediv.classList.add("fordiv");
    creatediv.appendChild(emoji);
    creatediv.appendChild(newLi);
    creatediv.appendChild(elementdelete);

    ul.appendChild(creatediv);

    elementdelete.classList.add("forbutton");
    emoji.classList.add("foremoji");

    if (input.value.length != 0) {
      input.value = "";
    }

    elementdelete.addEventListener(("click"), () => {
      newLi.remove();
      emoji.remove();
      elementdelete.remove();
    })

    emoji.addEventListener(("click"), () => {
      creatediv.classList.toggle("forcontainercomplete");
    })
  }
});
