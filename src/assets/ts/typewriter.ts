/**
 * Animates elements with the "typewriter" class by adding characters at a set interval.
 */

const toAnimate = Array.from(document.getElementsByClassName("typewriter"));

toAnimate.forEach((e: Element) => {
  const delay = Number(e.getAttribute("data-speed")) || 50;

  const fullText = e.innerHTML;
  e.innerHTML = fullText.charAt(0);

  let x = 1;
  let interval = setInterval(() => {
    if (x < fullText.length) {
      e.innerHTML += fullText.charAt(x);
      x++;
    } else {
      clearInterval(interval);
    }
  }, delay);
});
