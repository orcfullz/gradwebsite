console.log("javascript loaded")

const delta = 20;
let startX;
let startY;

let element = document.getElementById("arrow-down");
let navMenu = document.getElementById("navigation-menu");

document.querySelector("#arrow-down").addEventListener('click', function (e) {
    navMenu.style.display = "flex";
    alert("unlocked");
    element.classList.add("move-down")
})

element.addEventListener('mousedown', function (event) {
  startY = event.pageY;
});

element.addEventListener('mouseup', function (event) {
  const diffY = Math.abs(event.pageY - startY);

  if (diffY > delta) {
    alert("unlocked");
    navMenu.style.display = "flex";
  }
});

let designer_page = document.querySelector("designer-content");

const generateDesignerContent = (data) => {
  
} 
