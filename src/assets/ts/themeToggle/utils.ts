// Find the user's preferred theme
export function getPreferredTheme(localStorageTheme : string | null, prefersLight : boolean) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (prefersLight) {
    return "light"
  }

  return "dark"
}

// Switch light and dark
export const flipTheme = (theme : string) => (theme === "dark" ? "light" : "dark");

export function setTheme(button : Element | null, theme : string) {
  button?.setAttribute("aria-label", `Change to ${flipTheme(theme)} theme`)
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
