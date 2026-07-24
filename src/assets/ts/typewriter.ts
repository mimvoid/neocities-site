/**
 * Animates elements with the "typewriter" class by adding characters at a set interval.
 */

const toAnimate = Array.from(document.getElementsByClassName("typewriter"));

toAnimate.forEach((e: Element) => {
  const delay = Number(e.getAttribute("data-speed")) || 50;

  const fullText = e.textContent;
  e.textContent = fullText.charAt(0);

  let i = 1;
  let interval = setInterval(() => {
    if (i < fullText.length) {
      e.textContent += fullText.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, delay);
});
