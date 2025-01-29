const figures = document.querySelectorAll("figure.zoomable");

figures.forEach (figure => {
  figure.addEventListener("click", (event) => {
    event.target.matches("img")
      ? figure.classList.add("zoomed")
      : figure.classList.remove("zoomed")
  })
})
