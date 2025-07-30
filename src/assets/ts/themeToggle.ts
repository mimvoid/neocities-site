const button = document.getElementById("theme_toggle");

function setTheme(themeName: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", themeName);
  button?.setAttribute(
    "aria-label",
    `Change to ${themeName === "dark" ? "light" : "dark"} theme`,
  );
  localStorage.setItem("theme", themeName);
}

function switchTheme() {
  setTheme(localStorage.getItem("theme") === "dark" ? "light" : "dark");
}

// Set theme on page enter (dark mode is the default)
switch (localStorage.getItem("theme")) {
  case null:
    localStorage.setItem("theme", "dark");
    break;
  case "light":
    button?.setAttribute("aria-label", "Change to dark theme");
  default:
    break;
}

// Setup extra theme toggle animations
const cord = document.getElementById("theme_toggle_cord");
cord?.addEventListener("animationend", () =>
  cord.classList.remove("pull-down"),
);
const icon = document.getElementById("theme_toggle_icon");
icon?.addEventListener("animationend", () => icon.classList.remove("spin"));

// Implement the theme switcher
button?.addEventListener("click", () => {
  if (document.startViewTransition) {
    document.startViewTransition(switchTheme);
  } else {
    // Currently view transitions aren't in stable FireFox, very sad :(
    switchTheme();
  }

  cord?.classList.add("pull-down"); // Lampshade-style animation
  icon?.classList.add("spin"); // Icon spin animation
});
