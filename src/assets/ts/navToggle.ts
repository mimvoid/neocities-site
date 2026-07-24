/**
 * Animates the opening and closing of the navigation on mobile.
 */

const navOpener = document.getElementById("nav_opener");
const navCloser = document.getElementById("nav_closer");
const navWrapper = document.getElementById("nav_wrapper");

if (navOpener && navCloser && navWrapper) {
  navOpener.addEventListener("click", () => {
    navWrapper.style.display = "block";
    navWrapper.classList.add("window-open");
  });

  navCloser.addEventListener("click", () => {
    navWrapper.classList.add("window-close");
  });

  navWrapper.addEventListener("animationend", () => {
    if (navWrapper.classList.contains("window-open")) {
      navWrapper.classList.remove("window-open");
    } else {
      navWrapper.classList.remove("window-close");
      navWrapper.style.removeProperty("display"); // Reset to what the CSS says.
    }
  });
}
