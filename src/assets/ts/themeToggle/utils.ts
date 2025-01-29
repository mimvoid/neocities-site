export const button = document.getElementById("theme_toggle");

function setTheme(theme: string) {
  document.documentElement.setAttribute("data-theme", theme);
  button?.setAttribute("aria-label", `Change to ${theme === "dark" ? "light" : "dark" } theme`)
  localStorage.setItem("theme", theme);
}

export const setDarkTheme = () => setTheme("dark")
export const setLightTheme = () => setTheme("light")
