// Taken from https://whitep4nth3r.com/blog/best-light-dark-mode-theme-toggle-javascript

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

const localStorageTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

let currentTheme = getPreferredTheme(localStorageTheme, prefersLight)

// Configure the theme switcher button
const button = document.querySelector("button[name=theme_toggle]");

button.addEventListener("click", () => {
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  const newText = `Change to ${newTheme === "dark" ? "light" : "dark"} theme`

  // Update theme settings
  button.setAttribute("aria-label", newText)
  document.querySelector("html").setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  currentTheme = newTheme;
})
