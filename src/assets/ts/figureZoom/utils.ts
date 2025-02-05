export function addZoomedFigure (figure: Element | EventTarget) {
  const body = document.querySelector("body");

  const zoomedFigure = figure.cloneNode(true);
  zoomedFigure.classList.add("zoomed");

  zoomedFigure.addEventListener("click", () => {
    body.removeChild(zoomedFigure);
  })

  body.appendChild(zoomedFigure);
}
