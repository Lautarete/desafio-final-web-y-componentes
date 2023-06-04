//funcion para montar

function showOptionsWindow() {
  const showWindowButtonEl = document.querySelector(".header__button");
  const optionsWindowEl = document.querySelector(".header__options-window");

  showWindowButtonEl.addEventListener("click", (e) => {
    optionsWindowEl.style.display = "block";
  });
}

function closeOptionsWindow() {
  const closeWindowButtonEl = document.querySelector(
    ".header__options-window-button"
  );
  const optionsWindowEl = document.querySelector(".header__options-window");

  closeWindowButtonEl.addEventListener("click", (e) => {
    optionsWindowEl.style.display = "none";
  });
}
