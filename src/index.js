const sections = document.getElementsByTagName("section");

// window.addEventListener("scroll"... should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this dependency-free.

window.addEventListener("scroll", () => {
  const fromTop = window.scrollY + 66;
  // NOTE: This follows the original site's pattern of waiting until the section reaches the top to set the active NavBar state.
  Array.prototype.forEach.call(sections, section => {
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      document.getElementById(`liNav_${section.id}`).classList.add("active");
      document.getElementById(`aNav_${section.id}`).classList.add("active");
    } else {
      document.getElementById(`liNav_${section.id}`).classList.remove("active");
      document.getElementById(`aNav_${section.id}`).classList.remove("active");
    }
  });
});

const imageArray = [
  { src: "images/hero--sabinebe.jpg", alt: "sabine be Slide" },
  { src: "images/hero-alainmikli.jpg", alt: "Alain Mikli Slide" },
  { src: "images/hero-gucci.jpg", alt: "Gucci Slide" },
  { src: "images/hero-igreenkids.jpg", alt: "iGreen Slide" },
  { src: "images/hero-lafont.jpg", alt: "Lafont Slide" },
  { src: "images/hero-menizzi.jpg", alt: "Menizzi Slide" },
  { src: "images/hero-oliverpeoples.jpg", alt: "Oliver Peoples Slide" },
  { src: "images/hero-tomford.jpg", alt: "Tom Ford Slide" },
];
let currentImage = 0;

function slideShow() {
  document.slide.src = imageArray[currentImage].src;
  document.slide.alt = imageArray[currentImage].alt;

  if (currentImage < imageArray.length - 1) {
    currentImage += 1;
  } else {
    currentImage = 0;
  }

  setTimeout(slideShow, 5000);
}

window.onload = slideShow;
