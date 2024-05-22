import { DATA } from "./data.js";
let index = 0;
const mouse = {
    x: 0,
    y: 0
  };

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

    document.addEventListener("scroll", () => {
        const nav = document.querySelector("#navigation-menu-project-mobile.navigation-menu");
        if (window.scrollY > window.innerHeight - 300) {
            nav.style.background = "#FBFFE1"
            document.querySelectorAll(".white").forEach((d) => {
                d.style.display = "none"
            })
            document.querySelectorAll(".blue").forEach((d) => {
                d.style.display = "block"
            })
        } else {
            nav.style.background = "none"
            document.querySelectorAll(".blue").forEach((d) => {
                d.style.display = "none"
            })
            document.querySelectorAll(".white").forEach((d) => {
                d.style.display = "block"
            })
        }
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
    const name = document.querySelector(".project-name")
    name.innerHTML = "Project Title dolor sit amet consectetur";

    const description = document.querySelector(".project-description-text").querySelector("p")
    description.innerHTML = "Lorem ipsum dolor sit amet consectetur. Nibh semper amet at amet. Adipiscing mi lectus ullamcorper cursus.";

    const supervisor = document.querySelector(".supervisor-description-text").querySelector("p")
    supervisor.innerHTML = "Under the guidance of Alistair Norris";
}

const handlePicResize = (e) => {
    const mQuery = window.matchMedia('(max-width: 840px)');

    const projectPic = document.querySelector(".project-splash");

    if (mQuery.matches) {
        projectPic.style.backgroundImage = `url("./assets/img3.jpeg")`;
    } else {
        projectPic.style.backgroundImage = `url("./assets/img3.jpeg")`;
    }
}

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