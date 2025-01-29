const figures = document.querySelectorAll("figure.zoomable");

figures.forEach (figure => {
  figure.addEventListener("click", () => {
    const body = document.querySelector("body");

    const zoomedFigure = figure.cloneNode(true);
    zoomedFigure.classList.add("zoomed");

    zoomedFigure.addEventListener("click", () => {
      body.removeChild(zoomedFigure);
    })

    body.appendChild(zoomedFigure);
  })
})
