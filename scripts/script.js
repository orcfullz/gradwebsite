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

  mouse = {
    x: 0,
    y: 0
  };

  window.addEventListener('mousemove', moveCursor)

  const linkArray = document.querySelectorAll("a, .clickable, .designer-element, #arrow-down, #arrow-right");
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
}

function welcomePageAnimation() {
  setTimeout(function () {
    document.querySelector("#main-page").scrollIntoView();
  }, 1000);
  setTimeout(function () {
    document.querySelectorAll(".animated-circle").forEach(d => {
      d.classList.add("enlarge");
    });
  }, 300)
  setTimeout(function () {
    document.querySelectorAll(".animated-circle").forEach(d => {
      d.classList.remove("enlarge");
    });
  }, 1000)
}

const cursor = document.querySelector('.cursor.small');
// const cursorTrail = document.querySelector('.trail');

const moveCursor = (e)=> {
  mouse.y = e.clientY;
  mouse.x = e.clientX;

  const width = document.getElementsByClassName('cursor')[0].offsetWidth;
   
  cursor.style.transform = `translate3d(${mouse.x-width/2}px, ${mouse.y-width/2}px, 0)`;
  // cursorTrail.style.transform = `translate3d(${mouse.x-width/2}px, ${mouse.y-width/2}px, 0)`;
}


const delta = 20;
let startX;
let startY;

let element = document.getElementById("arrow-down");
let navMenu = document.getElementById("navigation-menu");

// document.querySelector("#arrow-down").addEventListener('click', function (e) {
//     navMenu.style.display = "flex";
//     alert("unlocked");
//     element.classList.add("move-down")
//     document.querySelector("#main-page").scrollIntoView({behavior: "smooth"});
// })

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
  navMobile.scrollIntoView({behavior: "smooth"});
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
    container.classList.add("designer-element-animation");
    // container.classList.add("event-image");
    container.id = d.preferredName.split(" ")[0] + "-" + i;

    const image_div = document.createElement("div");
    const filter_div = document.createElement("div");
    image_div.classList.add("designer-image");
    image_div.style.backgroundImage = `url(${d.picture})`;
    filter_div.classList.add("designer-image-filter")
    image_div.append(filter_div);

    const text_div = document.createElement("div");
    text_div.classList.add("designer-text");
    text_div.innerHTML = d.preferredName;

    container.addEventListener("click", (e) => {
        window.location.href = `./page.html?id=${container.id}`;
    });

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

// cursor trail 
// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var dots = [],
mouse = {
  x: 0,
  y: 0
};
const color_points = ["#11212B", "#2C3558", "#465A85", "#608FAF", "#79B4D9", "#8DCEE4", "#A1E9EF", "#B6F7F6", "#C4F9F4", "#D3FBF2", "#E1FDF0", "#EBFF6B"];

// The Dot object used to scaffold the dots
var Dot = function() {
        this.x = 0;
        this.y = 0;
        this.opacity = 1;
        this.node = (function(){
            var n = document.createElement("div");
            n.className = "trail-array";
            n.classList.add("cursor");
            document.body.appendChild(n);
            return n;
        }());
};
    // The Dot.prototype.draw() method sets the position of 
    // the object's <div> node
Dot.prototype.draw = function() {
    this.node.style.left = 0 + "px";
    this.node.style.top = 0 + "px";
    this.node.style.opacity = this.opacity;
    const width = document.getElementsByClassName('trail-array')[0].offsetWidth;
    this.node.style.transform = `translate3d(${this.x-width/2}px, ${this.y-width/2}px, 0)`
};

    // Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
    var d = new Dot();
    dots.push(d);
}

    // This is the screen redraw function
function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x, y = mouse.y;

    // This loop is where all the 90s magic happens
    dots.forEach(function(dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.opacity = 1/dots.length * (dots.length - index);
        dot.draw();
        x += (nextDot.x - dot.x) * .6;
        y += (nextDot.y - dot.y) * .6;

        });
}

addEventListener("mousemove", function(event) {
    //event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
// function animate() {
//     draw();
//     requestAnimationFrame(animate);
// }

// // And get it started by calling animate().
// animate();