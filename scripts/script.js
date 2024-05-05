import { DATA } from "./data.js"

window.onload = () => {
  generateDesignerCollection();

  document.querySelector("#designer-filter").addEventListener("click", (e) => {
    generateDesignerCollection();
  });

  document.querySelector(".menu-icon").addEventListener("click", (e) => {
    openMenu();
  })

  document.querySelector(".navigation-button").addEventListener("click", (e) => {
    closeMenu();
  })

  document.querySelector(".close-to-des").addEventListener("click", (e) => {
    closeMenu();
  })

  window.addEventListener('mousemove', moveCursor)

  const linkArray = document.querySelectorAll("a, .clickable, .designer-element, #arrow-down, #arrow-right");

  linkArray.forEach(d => {
    d.addEventListener("mouseenter", (e) => {
      document.querySelector(".cursor.small").classList.add("link");
    })

    d.addEventListener("mouseleave", (e) => {
      document.querySelector(".cursor.small").classList.remove("link");
    })
  })
  
  let navMenu = document.getElementById("navigation-menu");

  document.querySelector("#arrow-down").addEventListener('click', function (e) {
    document.querySelector("#arrow-down-drag").classList.add("move-down");
    setTimeout(function () {
      document.querySelector("#arrow-down-drag").classList.remove("move-down");
    }, 700);
    welcomePageAnimation();
    });

  document.querySelector("#arrow-right").addEventListener('click', function (e) {
    document.querySelector("#arrow-right-drag").classList.add("move-right");
    setTimeout(function () {
      document.querySelector("#arrow-right-drag").classList.remove("move-right");
    }, 700);
    welcomePageAnimation();
    })
    document.querySelector(".defaultOpen").click();
}

const cursor = document.querySelector('.cursor.small');
// const cursorTrail = document.querySelector('.trail');

let mouse = {
  x: 0,
  y: 0
};

const moveCursor = (e) => {
    console.log("huh");
  mouse.y = e.clientY;
  mouse.x = e.clientX;

  const width = document.getElementsByClassName('cursor')[0].offsetWidth;
   
  cursor.style.transform = `translate3d(${mouse.x-width/2}px, ${mouse.y-width/2}px, 0)`;
  // cursorTrail.style.transform = `translate3d(${mouse.x-width/2}px, ${mouse.y-width/2}px, 0)`;
}


const delta = 20;
let startX;
let startY;

// let element = document.getElementById("arrow-down");
let navMenu = document.getElementById("navigation-menu");

// document.querySelector("#arrow-down").addEventListener('click', function (e) {
//     navMenu.style.display = "flex";
//     alert("unlocked");
//     element.classList.add("move-down")
//     document.querySelector("#main-page").scrollIntoView({behavior: "smooth"});
// })

// element.addEventListener('mousedown', function (event) {
//   startY = event.pageY;
// });

// element.addEventListener('mouseup', function (event) {
//   const diffY = Math.abs(event.pageY - startY);

//   if (diffY > delta) {
//     alert("unlocked");
//     navMenu.style.display = "flex";
//   }
// });

// let designer_page = document.querySelector("designer-content");

const openMenu = () => {
  const navMobile = document.querySelector("#navigation-list-mobile");
  navMobile.scrollIntoView({behavior: "smooth"});
  navMobile.classList.add("active")
}

const closeMenu = () => {
  const navMobile = document.querySelector("#navigation-list-mobile");
  navMobile.classList.remove("active")
}