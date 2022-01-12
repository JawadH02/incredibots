const navbar = document.querySelector("#landing-page");
window.onscroll = () => {
  window.scrollY > 100
    ? navbar.classList.add("is-sticky")
    : navbar.classList.remove("is-sticky");
};

const playBtn = document.querySelector(".play__btn--wrapper");
const video = document.getElementById("play__video");
const hideContent = document.querySelector(".header__title");

document.addEventListener("click", (evt) => {
  const flyoutElement = playBtn;
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement == flyoutElement) {
      // This is a click inside. Do nothing, just return.
      video.hidden = false;
      playBtn.classList.add("play__hidden");
      hideContent.classList.add("content__hidden");
      return;
    }
    // Go up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);

  // This is a click outside.
  video.hidden = true;
  playBtn.classList.remove("play__hidden");
  hideContent.classList.remove("content__hidden");
});

// MENU BACKDROP OPEN

function openMenu() {
    document.body.classList.add("menu--open")
}

function closeMenu() {
    document.body.classList.remove("menu--open")
}