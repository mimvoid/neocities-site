import { button, setLightTheme, setDarkTheme } from "./utils";

// Get an updated value with each call
const localTheme = () => localStorage.getItem("theme");

// Set local theme
if (localTheme() === null) {
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  localStorage.setItem("theme", prefersLight ? "light" : "dark");
}

// Set theme on page enter (dark mode is the default)
if (localTheme() === "light") setLightTheme()

// Implement the theme switcher
button?.addEventListener("click", () => {
  localTheme() === "dark" ? setLightTheme() : setDarkTheme()

  // Handle lampshade-style animation
  const cord = document.getElementById("theme_toggle_cord");
  cord?.classList.add("pull-down");
  cord?.addEventListener("animationend", () => cord.classList.remove("pull-down"))
})
