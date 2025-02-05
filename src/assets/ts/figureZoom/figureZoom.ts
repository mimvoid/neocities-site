import { addZoomedFigure } from "./utils";

const figures = document.querySelectorAll("figure.zoomable");

figures.forEach (figure => {
  figure.addEventListener("click", () => addZoomedFigure(figure))
})
