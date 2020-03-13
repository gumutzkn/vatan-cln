// Containers
const slider = document.querySelector(".urunler__container");
const divs = document.querySelectorAll(
  ".urunler__container .cok_satanlar--urunler"
);

// Buttons
const prev = document.querySelector(".icon-left");
const next = document.querySelector(".icon-right");

// Counter
let sayac = 0;
const divsWidth = divs[0].clientWidth + 68;

// Button Listeners
next.addEventListener("click", () => {
  if (sayac > divs.length - 6) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  sayac++;
  slider.style.transform = "translateX(" + -divsWidth * sayac + "px)";
  console.log(sayac);
});

prev.addEventListener("click", () => {
  if (sayac === 0) return;

  slider.style.transition = "transform 0.4s ease-in-out";
  sayac--;
  slider.style.transform = "translateX(" + -divsWidth * sayac + "px)";
  console.log(sayac);
});
