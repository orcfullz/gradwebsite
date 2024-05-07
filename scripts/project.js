let slideIndex = [0,0];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

document.querySelectorAll(".prev").forEach((d, i) => {
    
    d.addEventListener("click", (e) => {plusSlides(-1, i)})
})

document.querySelectorAll(".next").forEach((d, i) => {
    d.addEventListener("click", (e) => {plusSlides(1, i)})
})

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n >= x.length) {slideIndex[no] = 0}
  if (n < 0) {slideIndex[no] = x.length - 1}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]].style.display = "block";
}