import { cardImages } from "./data.js";
let cardCounter = 0;
let currPicIndex = cardImages.length;
const mouse = {
    x: 0,
    y: 0
};

window.onload = () => {
    document.querySelector(".menu-icon").addEventListener("click", (e) => {
        openMenu();
    })

    document.querySelector(".navigation-button").addEventListener("click", (e) => {
        closeMenu();
    })

    document.querySelector(".close-to-des").addEventListener("click", (e) => {
        closeMenu();
    })

    document.querySelector("#our-batch-button").addEventListener("click", (e) => {
        openOption(e, "our-batch");
    })

    document.querySelector("#our-course-button").addEventListener("click", (e) => {
        openOption(e, "our-course");
    })

    addImageCards();
    addImageCardsMobile();
    backgroundShadow();

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

    document.querySelector(".defaultOpen").click();

    const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
  }

   window.addEventListener("resize", documentHeight)
   documentHeight()
   
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

const openOption = (e, cityName) => {
    // Declare all variables
    var i, tabcontent, tablinks, activeContent;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    activeContent = document.getElementsByClassName(cityName);
    
    for (i = 0; i < activeContent.length; i++) {
        activeContent[i].style.display = "flex";
      }
    e.currentTarget.classList.add("active");
}

const addImageCards = () => {
    const flipCardDiv = document.querySelector(".flip-card");
    const flipCardDivMobile = document.querySelector(".flip-card-mobile");
    cardImages.forEach((d, i) => {
        console.log(d)
        const container = document.createElement('div');
        container.classList.add("flip-card-inner")

        const front = document.createElement('div');
        front.classList.add("flip-card-front");
        container.id = "card" + i;
        front.style.backgroundImage = `url(${d["link"]})`;

        const textDiv = document.createElement('div')
        textDiv.classList.add("flip-card-text");
        const textP = document.createElement('p');
        textP.innerHTML = d["text"];
        textDiv.append(textP);
        front.append(textDiv);
        
        const back = document.createElement('div');
        back.classList.add("flip-card-back");
        // back.style.display = "none"
        if (i != 0) {
            front.addEventListener("click", (e) => {
                container.style.transformOrigin = "left";
                container.style.transform = "rotateY(-180deg) translate(30px,0)";
                cardCounter++;
                container.style.zIndex = cardCounter;
                currPicIndex--;
                backgroundShadow();
            })
            if (i != (cardImages.length - 1)) {
                back.addEventListener("click", (e) => {
                    container.style.transformOrigin = "left";
                    container.style.transform = "rotateY(0deg)";
                    cardCounter++;
                    container.style.zIndex = cardCounter;
                    currPicIndex++;
                    backgroundShadow();
                })
            }
        }
        container.append(front, back);
        flipCardDiv.append(container);
    })
    document.querySelectorAll(".flip-card-front")[cardImages.length - 1].click();
}

const addImageCardsMobile = () => {
    const flipCardDivMobile = document.querySelector(".flip-card-mobile");
    cardImages.forEach((d, i) => {
        const container = document.createElement('div');
        container.classList.add("flip-card-inner");

        const front = document.createElement('div');
        front.classList.add("flip-card-front", "flip-card-front-mobile");
        container.id = "cardmobile" + i;
        front.style.backgroundImage = `url(${d["link"]})`;

        const textDiv = document.createElement('div')
        textDiv.classList.add("flip-card-text");
        const textP = document.createElement('p');
        textP.innerHTML = d["text"];
        textDiv.append(textP);
        front.append(textDiv);
        
        const back = document.createElement('div');
        back.classList.add("flip-card-back");
        // back.style.display = "none"
        if (i != 0) {
            front.addEventListener("click", (e) => {
                container.style.transformOrigin = "left";
                container.style.transform = "rotateY(-180deg) translate(30px,0)";
                cardCounter++;
                container.style.zIndex = cardCounter;
                currPicIndex--;
                backgroundShadow();
            })
            if (i != (cardImages.length - 1)) {
                back.addEventListener("click", (e) => {
                    container.style.transformOrigin = "left";
                    container.style.transform = "rotateY(0deg)";
                    cardCounter++;
                    container.style.zIndex = cardCounter;
                    currPicIndex++;
                    backgroundShadow();
                })
            }
        }
        container.append(front, back);
        flipCardDivMobile.append(container);
    })
    document.querySelectorAll(".flip-card-front-mobile")[cardImages.length - 1].click();
}

const backgroundShadow = () => {
    console.log(currPicIndex)
    const shadow1 = document.querySelectorAll(".shadow-card-1");
    const shadow2 = document.querySelectorAll(".shadow-card-2");
    shadow1.forEach((d) => {
        if (currPicIndex - 1 >= 0) {
            d.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.60),rgba(0, 0, 0, 0.60)), url(${cardImages[currPicIndex - 1]["link"]})`
        } else {
            d.style.background = "none";
            d.style.backgroundColor = "#333";
        }
    })
    shadow2.forEach((d) => {
        if (currPicIndex - 2 >= 0) {
            d.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.60),rgba(0, 0, 0, 0.60)), url(${cardImages[currPicIndex - 2]["link"]})`
        } else {
            d.style.background = "none";
            d.style.backgroundColor = "#555";
        }
    })
}




// // The Dot object used to scaffold the dots
// var dots = [],
// mouse = {
//   x: 0,
//   y: 0
// };
// const color_points = ["#11212B", "#2C3558", "#465A85", "#608FAF", "#79B4D9", "#8DCEE4", "#A1E9EF", "#B6F7F6", "#C4F9F4", "#D3FBF2", "#E1FDF0", "#EBFF6B"];

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

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
// function animate() {
//     draw();
//     requestAnimationFrame(animate);
// }

// And get it started by calling animate().
// animate();