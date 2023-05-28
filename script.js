// dropdown menu
const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

// coockie alert
window.onload = () => {
  let container = document.createElement("div");
  container.classList.add("coockie");

  let span = document.createElement("span");
  
  let p = document.createElement("p");
  p.innerHTML = '<i class="fa-solid fa-cookie-bite"></i> This website used coockie to ensure you to get the best experience on our website.';
  span.appendChild(p);
  
  let btn = document.createElement("button");
  let div = document.createElement("div");
  div.innerHTML = "OKAY";
  btn.appendChild(div);
  span.appendChild(btn)

  container.appendChild(span);

  document.querySelector("body").appendChild(container);
  
  btn.addEventListener("click", () => container.remove() );
}

// dynamic page title 

if(document.querySelector("main.articles header > h2")) {
  const articleTitle = document.querySelector("main.articles header > h2");
  document.title += " " + articleTitle.innerText;
}