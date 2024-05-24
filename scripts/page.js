import { DATA, FINAL_DATA } from "./data.js";
let index = 0;

window.onload = () => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("id")) {
        index = parseInt(params.get("id").split("-")[1]);
    }

    loadContent(index);

    document.querySelector(".menu-icon").addEventListener("click", (e) => {
        openMenu();
    })

    document.querySelector(".navigation-button").addEventListener("click", (e) => {
        closeMenu();
    })

    document.querySelector(".close-to-des").addEventListener("click", (e) => {
        closeMenu();
    })

    document.querySelector(".designer-project-snippet").addEventListener("click", (e) => {
        window.location.href = window.location.href.replace("designer.html", "project.html");
    })

    handlePicResize();

    window.addEventListener("resize", handlePicResize);

    window.addEventListener('mousemove', moveCursor);

    const linkArray = document.querySelectorAll("a, .clickable");

    linkArray.forEach(d => {
        d.addEventListener("mouseenter", (e) => {
        document.querySelector(".cursor.small").classList.add("link");
        })

        d.addEventListener("mouseleave", (e) => {
        document.querySelector(".cursor.small").classList.remove("link");
        })
    })

    
    window.addEventListener('resize', documentHeight)
    documentHeight();
}

const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
   }

const cursor = document.querySelector('.cursor.small');
// const cursorTrail = document.querySelector('.trail');

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  const width = document.getElementsByClassName('cursor')[0].offsetWidth;
   
  cursor.style.transform = `translate3d(${mouseX-width/2}px, ${mouseY-width/2}px, 0)`;
//   cursorTrail.style.transform = `translate3d(${mouseX-width/2}px, ${mouseY-width/2}px, 0)`;
}

const openMenu = () => {
    const navMobile = document.querySelector("#navigation-list-mobile");
    navMobile.scrollIntoView({behavior: "smooth"});
    navMobile.classList.add("active")
  }

const closeMenu = () => {
    const navMobile = document.querySelector("#navigation-list-mobile");
    navMobile.classList.remove("active")
}


const loadContent = (index) => {
    const linkImg = {
        "linkedin": "./assets/linkedin.svg",
        "behance": "./assets/Behance.svg",
        "instagram": "./assets/instagram.svg",
        "portfolio": "./assets/link.svg",
        "email": "./assets/email.png",
    }

    const name = document.querySelector(".designer-name")
    name.innerHTML = FINAL_DATA[index].preferredName;

    const description = document.querySelector(".designer-description-text").querySelector("p")
    description.innerHTML = FINAL_DATA[index].description;

    const links = document.querySelector(".designer-links");
    const designerLinks = FINAL_DATA[index];

    Object.getOwnPropertyNames(linkImg).forEach((k) => {
        if (designerLinks.hasOwnProperty(k)) {
            const link = document.createElement("a");
            const img = document.createElement("img");
            img.src = linkImg[k];
            img.classList.add("designer-link-logo");
            if (k === "email") {
                link.href = `mailto:${designerLinks[k]}`;
            } else {
                link.href = designerLinks[k];
            }
            link.target = "_blank";
            link.append(img);
            links.append(link);
        }
    })

    const designerSnippetImage = document.querySelector(".designer-project-snippet-img");
    designerSnippetImage.style.backgroundImage = `url(${FINAL_DATA[index]["projectImgDesktop"]})`
    
    const designerSnippetText = document.querySelector(".designer-project-snippet-text");
    designerSnippetText.innerHTML = `${FINAL_DATA[index]["projectTitle"]}`
    
    
}

const handlePicResize = (e) => {
    const mQuery = window.matchMedia('(max-width: 840px)');

    const designerPic = document.querySelector(".designer-splash");

    if (mQuery.matches) {
        designerPic.style.backgroundImage = `url(${FINAL_DATA[index]["mobileImg"]})`;
    } else {
        designerPic.style.backgroundImage = `url(${FINAL_DATA[index]["desktopImg"]})`;
    }
}

// cursor trail 
// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
// var dots = [],
const mouse = {
  x: 0,
  y: 0
};
const color_points = ["#11212B", "#2C3558", "#465A85", "#608FAF", "#79B4D9", "#8DCEE4", "#A1E9EF", "#B6F7F6", "#C4F9F4", "#D3FBF2", "#E1FDF0", "#EBFF6B"];

// // The Dot object used to scaffold the dots
// var Dot = function() {
//         this.x = 0;
//         this.y = 0;
//         this.opacity = 1;
//         this.node = (function(){
//             var n = document.createElement("div");
//             n.className = "trail-array";
//             n.classList.add("cursor");
//             document.body.appendChild(n);
//             return n;
//         }());
// };
//     // The Dot.prototype.draw() method sets the position of 
//     // the object's <div> node
// Dot.prototype.draw = function() {
//     this.node.style.left = 0 + "px";
//     this.node.style.top = 0 + "px";
//     this.node.style.opacity = this.opacity;
//     const width = document.getElementsByClassName('trail-array')[0].offsetWidth;
//     this.node.style.transform = `translate3d(${this.x-width/2}px, ${this.y-width/2}px, 0)`
// };

//     // Creates the Dot objects, populates the dots array
// for (var i = 0; i < 12; i++) {
//     var d = new Dot();
//     dots.push(d);
// }

//     // This is the screen redraw function
// function draw() {
//     // Make sure the mouse position is set everytime
//     // draw() is called.
//     var x = mouse.x, y = mouse.y;

//     // This loop is where all the 90s magic happens
//     dots.forEach(function(dot, index, dots) {
//         var nextDot = dots[index + 1] || dots[0];

//         dot.x = x;
//         dot.y = y;
//         dot.opacity = 1/dots.length * (dots.length - index);
//         dot.draw();
//         x += (nextDot.x - dot.x) * .6;
//         y += (nextDot.y - dot.y) * .6;

//         });
// }

// addEventListener("mousemove", function(event) {
//     //event.preventDefault();
//     mouse.x = event.pageX;
//     mouse.y = event.pageY;
// });

// // animate() calls draw() then recursively calls itself
// // everytime the screen repaints via requestAnimationFrame().
// // function animate() {
// //     draw();
// //     requestAnimationFrame(animate);
// // }

// // // And get it started by calling animate().
// // animate();