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

    document.querySelector("#google-map").addEventListener("mouseenter", (e) => {
        document.querySelector(".cursor.small").style.display = "none";
        document.querySelector(".cursor.trail").style.display = "none";
        // document.querySelector(".small").display = "none";
    })

    document.querySelector("#google-map").addEventListener("mouseleave", (e) => {
        document.querySelector(".cursor.small").style.display = "inline";
        document.querySelector(".cursor.trail").style.display = "none";
    })
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
    navMobile.classList.add("active")
}

const closeMenu = () => {
    const navMobile = document.querySelector("#navigation-list-mobile");
    navMobile.classList.remove("active")
}

// The Dot object used to scaffold the dots
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
function animate() {
    draw();
    requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();