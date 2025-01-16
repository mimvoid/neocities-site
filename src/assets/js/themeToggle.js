// From https://reemus.dev/article/disable-css-transition-color-scheme-change

let timeoutAction;
let timeoutEnable;

// Perform a task without any css transitions
function withoutTransition(action) {
  // Clear fallback timeouts
  clearTimeout(timeoutAction);
  clearTimeout(timeoutEnable);

  // Create style element to disable transitions
  const style = document.createElement("style");
  const css = document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);
  style.appendChild(css);

  // Functions to insert and remove style element
  const disable = () => document.head.appendChild(style);
  const enable = () => document.head.removeChild(style);

  // Best method, getComputedStyle forces browser to repaint
  if (typeof window.getComputedStyle !== "undefined") {
    disable();
    action();
    window.getComputedStyle(style).opacity;
    enable();
    return;
  }

  // Better method, requestAnimationFrame processes function before next repaint
  if (typeof window.requestAnimationFrame !== "undefined") {
    disable();
    action();
    window.requestAnimationFrame(enable);
    return;
  }

  // Fallback
  disable();
  timeoutAction = setTimeout(() => {
    action();
    timeoutEnable = setTimeout(enable, 120);
  }, 120);
};

// Taken from https://whitep4nth3r.com/blog/best-light-dark-mode-theme-toggle-javascript

const button = document.querySelector("button[name=theme_toggle]");
const cord = document.getElementById("cord");

// Find the user's preferred theme
function getPreferredTheme(localStorageTheme, prefersLight) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (prefersLight.matches) {
    return "light"
  }

  return "dark"
}

const flipTheme = (theme) => (theme === "dark" ? "light" : "dark");

function setTheme(theme) {
  button.setAttribute("aria-label", `Change to ${flipTheme(theme)} theme`)
  document.querySelector("html").setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// Apply the current theme setting
const localStorageTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

let currentTheme = getPreferredTheme(localStorageTheme, prefersLight);
withoutTransition(() => setTheme(currentTheme))

// Implement the theme switcher
button.addEventListener("click", () => {
  const newTheme = flipTheme(currentTheme);

  // Trigger lampshape-style animation
  cord.classList.add("pull-down");

  // Update theme settings
  setTheme(newTheme);
  currentTheme = newTheme;
})

// Reset animation
cord.addEventListener("animationend", () => cord.classList.remove("pull-down"))
