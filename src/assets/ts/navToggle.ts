const navOpener = document.getElementById("nav_opener")!;
const navCloser = document.getElementById("nav_closer")!;
const nav = document.getElementsByClassName("nav-wrapper")![0] as HTMLElement;

navOpener.addEventListener("click", () => {
  nav.style.display = "block";
  nav.classList.add("box");
  nav.classList.add("window-open");
});

navCloser.addEventListener("click", () => {
  nav.classList.add("window-close");
});

nav.addEventListener("animationend", () => {
  if (nav.classList.contains("window-open")) {
    nav.classList.remove("window-open");
  } else if (nav.classList.contains("window-close")) {
    nav.classList.remove("window-close");
    nav.classList.remove("box");
    nav.style.display = "none";
  }
});
