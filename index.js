const navbar = document.querySelector("#landing-page");
window.onscroll = () => {
  window.scrollY > 100
    ? navbar.classList.add("is-sticky")
    : navbar.classList.remove("is-sticky");
};

const playBtn = document.querySelector(".play__btn--wrapper");
const video = document.getElementById("play__video");

document.addEventListener("click", (evt) => {
  const flyoutElement = playBtn;
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement == flyoutElement) {
      // This is a click inside. Do nothing, just return.
      video.hidden = false;
      playBtn.classList.add("play__hidden");
      return;
    }
    // Go up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);

  // This is a click outside.
  video.hidden = true;
  playBtn.classList.remove("play__hidden");
  video.src += "";
});

// MENU BACKDROP OPEN

function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

function contact(event) {
  const form = document.querySelector(".contact__form");
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  const btnText = document.querySelector(".contact__btn--text");
  loading.classList += " modal__overlay--visible";
  btnText.classList += " contact__btn--text--visible";
  emailjs
    .sendForm(
      "service_fxac1cl",
      "template_i2g3g4s",
      event.target,
      "user_jl5VpeVakRdeOB5W1XDRJ"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      btnText.classList.remove("contact__btn--text--visible");
      success.classList += " modal__overlay--visible";
      form.reset();
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on email@email.com"
      );
    });
}
