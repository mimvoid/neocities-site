import { addZoomedFigure } from "./utils";

const galleries = document.querySelectorAll(".gallery-content");

galleries.forEach(gallery => {
  gallery.addEventListener("click", (event) => {
    console.log(event.target)
    if (event.target.matches("img") || event.target.matches("figcaption")) {
      addZoomedFigure(event.target.parentElement);
    }
  })
})
