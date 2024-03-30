import { DATA } from "./data.js"

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    let index = 0;

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
const cursorTrail = document.querySelector('.trail');

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  const width = document.getElementsByClassName('cursor')[0].offsetWidth;
   
  cursor.style.transform = `translate3d(${mouseX-width/2}px, ${mouseY-width/2}px, 0)`;
  cursorTrail.style.transform = `translate3d(${mouseX-width/2}px, ${mouseY-width/2}px, 0)`;
}

const openMenu = () => {
    const navMobile = document.querySelector("#navigation-list-mobile");
    navMobile.classList.add("active")
}

const closeMenu = () => {
    const navMobile = document.querySelector("#navigation-list-mobile");
    navMobile.classList.remove("active")
}


const loadContent = (index) => {
    const linkImg = {
        "linkedin": "assets/linkedin.svg",
        "website": "assets/website.png",
        "website-1": "assets/website.png",
        "behance": "assets/Behance.svg"
    }

    const name = document.querySelector(".designer-name")
    name.innerHTML = DATA[index].preferredName;

    const description = document.querySelector(".designer-description-text").querySelector("p")
    description.innerHTML = DATA[index].description;

    const links = document.querySelector(".designer-links");
    const designerLinks = DATA[index].personalLinks;
    console.log(designerLinks)

    if (designerLinks) {
        for (const property in designerLinks) {
            const link = document.createElement("a");
            const img = document.createElement("img");
            img.id = property + index;
            img.src = linkImg[property];
            img.classList.add("designer-link-logo");
            link.href = `${designerLinks[property]}`;
            link.target = "_blank";
            link.append(img);
            links.append(link);
        }
    }
}