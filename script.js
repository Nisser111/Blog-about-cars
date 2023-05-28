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
  span.appendChild(btn);

  container.appendChild(span);

  document.querySelector("body").appendChild(container);

  btn.addEventListener("click", () => container.remove());
};

// dynamic page title

if (document.querySelector("main.articles header > h2")) {
  const articleTitle = document.querySelector("main.articles header > h2");
  document.title += " " + articleTitle.innerText;
}

// color theme switch
const switchThemeBtn = document.querySelector(".switch-theme");
switchThemeBtn.addEventListener("click", () => {
  if (switchThemeBtn.innerHTML == '<i class="fa-solid fa-sun"></i>') {
    // light mode on
    switchThemeBtn.style.background = "var(--black)";
    switchThemeBtn.innerHTML = '<i class="fa-sharp fa-solid fa-moon"></i>';
    // for all
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    body.style.background = "var(--page-bg)";
    main.style.background = "none";
    main.style.color = "var(--black)";
    footer.style.borderTop = "none";

    // home
    if (main.classList == "all-categories") {
      const singleArticle = document.querySelectorAll(".single-article");
      const singleArticleP = document.querySelectorAll(".single-article p");

      singleArticle.forEach((el) => (el.style.background = "#fff"));
      singleArticleP.forEach((el) => (el.style.color = "var(--black)"));
    }

    // about us
    if (main.classList == "about-us") {
      const aboutUsLogo = document.querySelector("main.about-us > .logo");
      const aboutUsTeam = document.querySelector("main.about-us .team");

      main.style.background = "#fff";
      aboutUsLogo.style.color = "var(--black)";
      aboutUsTeam.style.background = "#fff";
    }

    // contact
    if (main.classList == "contact") {
      const contactH2 = document.querySelector("main.contact header h2");
      const contactFormulage = document.querySelector(
        "main.contact .formulage"
      );
      const contactContactInformation = document.querySelector(
        "main.contact .contact-information"
      );

      contactH2.style.color = "var(--black)";
      contactFormulage.style.background = "#fff";
      contactFormulage.style.borderColor = "#fff";
      contactContactInformation.style.borderColor = "#fff";
    }

    // articles
    if (main.classList == "articles") {
      main.style.background = "#fff";
    }
  } else {
    // dark mode on
    switchThemeBtn.style.background = "#fff";
    switchThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    // for all
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    body.style.background = "var(--black)";
    main.style.background = "var(--black2)";
    main.style.color = "#fff";
    footer.style.borderTop = "5px solid var(--light-grey-2)";

    // home
    if (main.classList == "all-categories") {
      const singleArticle = document.querySelectorAll(".single-article");
      const singleArticleP = document.querySelectorAll(".single-article p");

      main.style.background = "none";
      singleArticle.forEach((el) => (el.style.background = "var(--black2)"));
      singleArticleP.forEach((el) => (el.style.color = "#fff"));
    }

    // about us
    if (main.classList == "about-us") {
      const aboutUsLogo = document.querySelector("main.about-us > .logo");
      const aboutUsTeam = document.querySelector("main.about-us .team");

      aboutUsLogo.style.color = "#fff";
      aboutUsTeam.style.background = "var(--black)";
    }

    // contact
    if (main.classList == "contact") {
      const contactH2 = document.querySelector("main.contact header h2");
      const contactFormulage = document.querySelector(
        "main.contact .formulage"
      );
      const contactContactInformation = document.querySelector(
        "main.contact .contact-information"
      );

      main.style.background = "none";
      contactH2.style.color = "#fff";
      contactFormulage.style.background = "var(--black2)";
      contactFormulage.style.borderColor = "var(--black2)";
      contactContactInformation.style.borderColor = "var(--black2)";
    }
  }
});
