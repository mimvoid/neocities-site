function addZoomedFigure(figure: Element) {
  const zoomedFigure = figure.cloneNode(true) as Element;
  zoomedFigure.classList.add("zoomed");
  zoomedFigure.classList.remove("polaroid");

  zoomedFigure.addEventListener("click", () => {
    document.body.removeChild(zoomedFigure);
  });

  document.body.appendChild(zoomedFigure);
}

for (const gallery of document.querySelectorAll(".gallery-content")) {
  gallery.addEventListener("click", (event) => {
    if (
      event.target instanceof Element &&
      (event.target.nodeName == "IMG" || event.target.nodeName == "FIGCAPTION")
    ) {
      addZoomedFigure(event.target.parentElement);
    }
  });
}

for (const figure of document.querySelectorAll("figure.zoomable")) {
  figure.addEventListener("click", () => addZoomedFigure(figure));
}
