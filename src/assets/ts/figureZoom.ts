const figures = document.querySelectorAll("figure.zoomable");

figures.forEach (figure => {
  figure.addEventListener("dblclick", () => figure.classList.add("zoomed"));
  figure.addEventListener("click", () => figure.classList.remove("zoomed"));
})
