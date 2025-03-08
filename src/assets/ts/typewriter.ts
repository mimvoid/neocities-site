const toTypes = Array.from(document.getElementsByClassName("typewriter"));

toTypes.forEach((e: Element) => {
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
})
