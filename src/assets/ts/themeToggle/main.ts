import { button, setLightTheme, setDarkTheme } from "./utils";

// Set theme on page enter (dark mode is the default)
const enterTheme = localStorage.getItem("theme");

if (enterTheme === null) {
  localStorage.setItem("theme", "dark");
} else if (enterTheme === "light") {
  setLightTheme()
}

// Implement the theme switcher
button?.addEventListener("click", () => {
  localStorage.getItem("theme") === "dark" ? setLightTheme() : setDarkTheme()

  // Handle lampshade-style animation
  const cord = document.getElementById("theme_toggle_cord");
  cord?.classList.add("pull-down");
  cord?.addEventListener("animationend", () => cord.classList.remove("pull-down"))
})
