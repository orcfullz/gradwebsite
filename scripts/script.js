import { DATA } from "./data.js"

console.log("javascript loaded")

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

  const linkArray = document.querySelectorAll("a, .clickable");
  console.log(linkArray);

  linkArray.forEach(d => {
    d.addEventListener("mouseenter", (e) => {
      document.querySelector(".cursor.small").classList.add("link");
    })

    d.addEventListener("mouseleave", (e) => {
      document.querySelector(".cursor.small").classList.remove("link");
    })
  })
  
  // document.querySelector("#project-filter").addEventListener("click", (e) => {
  //   generateProjectCollection();
  // });
}

const cursor = document.querySelector('.cursor.small');
const cursorTrail = document.querySelector('.trail');

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  const width = document.getElementsByClassName('cursor')[0].offsetWidth;
   
  cursor.style.transform = `translate3d(${mouseX-width/2}px, ${mouseY-width/2}px, 0)`;
  cursorTrail.style.transform = `translate3d(${mouseX-width/2}px, ${mouseY-width/2}px, 0)`;
}


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

// let designer_page = document.querySelector("designer-content");

const openMenu = () => {
  const navMobile = document.querySelector("#navigation-list-mobile");
  navMobile.classList.add("active")
}

const closeMenu = () => {
  const navMobile = document.querySelector("#navigation-list-mobile");
  navMobile.classList.remove("active")
}


const generateDesignerCollection = () => {
  const designerFilter = document.querySelector("#designer-filter");
  // const projectFilter = document.querySelector("#project-filter");
  if (!("active" in designerFilter.classList)) {
    designerFilter.classList.add("active");
    // projectFilter.classList.remove("active");
  }

  const collections = document.querySelector("#main-page-collections");
  collections.innerHTML = "";
  
  DATA.forEach((d, i) => {
    const container = document.createElement('div');
    container.classList.add("designer-element");
    container.id = d.preferredName;

    const image_div = document.createElement("div");
    image_div.classList.add("designer-image");
    image_div.style.backgroundImage = `url(${d.picture})`;

    const text_div = document.createElement("div");
    text_div.classList.add("designer-text");
    text_div.innerHTML = d.preferredName;

    container.append(image_div, text_div);
    collections.append(container)
  })
} 

// const generateProjectCollection = () => {
//   const designerFilter = document.querySelector("#designer-filter");
//   const projectFilter = document.querySelector("#project-filter");
//   if (!("active" in projectFilter.classList)) {
//     projectFilter.classList.add("active");
//     designerFilter.classList.remove("active");
//   }

//   const collections = document.querySelector("#main-page-collections");
//   collections.innerHTML = "";
  
//   imageLinks.forEach((d, i) => {
//     const container = document.createElement('div');
//     container.classList.add("project-element");
//     container.id = d.name;

//     const image_div = document.createElement("div");
//     image_div.classList.add("project-image");
//     image_div.style.backgroundImage = `url(assets/landscape-placeholder\ 1.png)`;

//     const text_div = document.createElement("div");
//     text_div.classList.add("designer-text");
//     text_div.innerHTML = "Project Name but Two Lines";

//     container.append(image_div, text_div);
//     collections.append(container)
//   })
// } 
