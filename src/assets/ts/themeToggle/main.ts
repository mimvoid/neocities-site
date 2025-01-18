import { getPreferredTheme, flipTheme, setTheme } from "./utils";
import noTransition from "./noTransition";

// Based on https://whitep4nth3r.com/blog/best-light-dark-mode-theme-toggle-javascript

const button = document.getElementById("theme_toggle");
const cord = document.getElementById("theme_toggle_cord");

// Find the preferred theme
const localStorageTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
let currentTheme = getPreferredTheme(localStorageTheme, prefersLight);

// Set the theme
noTransition(() => setTheme(button, currentTheme))

// Implement the theme switcher
button?.addEventListener("click", () => {
  const newTheme = flipTheme(currentTheme);

  // Trigger lampshape-style animation
  cord?.classList.add("pull-down");

  // Update theme settings
  setTheme(button, newTheme);
  currentTheme = newTheme;
})

// Reset animation
cord?.addEventListener("animationend", () => cord.classList.remove("pull-down"))
