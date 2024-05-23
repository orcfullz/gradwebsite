import { DATA, FINAL_DATA } from "./data.js";
let index = 0;
const mouse = {
    x: 0,
    y: 0
  };

let slideIndex = [0,0,0];
let slideId = ["mySlides1", "mySlides2", "mySlides3"]

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
    showSlides(1, 0);
    showSlides(1, 1);
    showSlides(1, 2);

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
    name.innerHTML = `${FINAL_DATA[index]["projectTitle"]}`;

    const description = document.querySelector(".project-description-text").querySelector("p")
    description.innerHTML = `${FINAL_DATA[index]["projectDescription"]}`;

    const supervisor = document.querySelector(".supervisor-description-text").querySelector("p")
    supervisor.innerHTML = `Under the guidance of ${FINAL_DATA[index]["supervisor"]}`;

    const projectThumbnail = document.querySelector(".project-snippet-img.designer");
    projectThumbnail.style.backgroundImage = `url(${FINAL_DATA[index]["thumbnailImg"]})`

    const projectThumbnailName = document.querySelector(".project-snippet-text.designer");
    projectThumbnailName.innerHTML = `${FINAL_DATA[index]["preferredName"]}`;
    document.querySelector(".project-snippet.designer").classList.add("clickable");
    document.querySelector(".project-snippet.designer").addEventListener("click", () => {
        window.location.href = window.location.href.replace("project.html", "designer.html");
    })

    document.querySelector(".project-snippet.works").classList.add("clickable");
    document.querySelector(".project-snippet.works").addEventListener("click", () => {
        window.open(FINAL_DATA[index]["archiveLinks"]);
    })

    if (FINAL_DATA[index]["video"]) {
        const videoElement = document.querySelector(".project-video")
        videoElement.src = FINAL_DATA[index]["video"];
    } else {
        const videoDiv = document.querySelector(".project-section.video")
        videoDiv.style.display = "none";
    }

    const projectPage = document.querySelector("#project-page")


    if (FINAL_DATA[index]["project-section"]) {
        FINAL_DATA[index]["project-section"].forEach((d,i) => {
            const projectCaptionPhotos = document.createElement("div")
            projectCaptionPhotos.classList.add("project-caption-photos");
            const captionDiv = document.createElement("div")
            captionDiv.classList.add("project-caption", "text-block")
            const captionP = document.createElement("p");
            captionP.innerHTML = `${d["heading"]}`
            captionDiv.append(captionP);

            const photoSlides = document.createElement("div")
            photoSlides.classList.add("project-photo-slides");
            d["pictures"].forEach((el) => {
                const slide = document.createElement("div");
                slide.classList.add(slideId[i]);

                const slideImg = document.createElement("img");
                slideImg.style.width = "100%"
                slideImg.src = el["img_link"];
                slide.append(slideImg)

                if (el["caption"]) {
                    const slideCapt = document.createElement("div");
                    slideCapt.classList.add("caption-text", "text-block")
                    const slideP = document.createElement("p");
                    slideP.innerHTML = `${el["caption"]}`
                    slideCapt.append(slideP);
                    slide.append(slideCapt)
                }

                photoSlides.append(slide)
            })

            if (d["pictures"].length > 1) {
                const prev = document.createElement("a")
                prev.classList.add("prev")
                const prevImg = document.createElement("img")
                prevImg.src = "./assets/project-arrow-prev.svg"
                prev.append(prevImg)

                const next = document.createElement("a")
                next.classList.add("next")
                const nextImg = document.createElement("img")
                nextImg.src = "./assets/project-arrow-next.svg"
                next.append(nextImg)
                
                photoSlides.append(prev, next)
            }

            projectCaptionPhotos.append(captionDiv, photoSlides)

            const textDescription = document.createElement("div")
            textDescription.classList.add("project-text-description", "text-block")
            if (d["paragraphs"]) {
                d["paragraphs"].forEach((p) => {
                    if (p) {
                        const para = document.createElement("p");
                        para.innerHTML = `${p}`
                        textDescription.append(para)
                    }
                })
            }

            const projectSection = document.createElement("div");
            const footer = document.querySelector(".footer");
            projectSection.classList.add("project-section")
            projectSection.append(projectCaptionPhotos, textDescription)
            projectPage.insertBefore(projectSection, footer)
        })
    }

    document.querySelectorAll(".prev").forEach((d, i) => {
        d.addEventListener("click", (e) => {plusSlides(-1, i)})
    })
    
    document.querySelectorAll(".next").forEach((d, i) => {
        d.addEventListener("click", (e) => {plusSlides(1, i)})
    })

}

const handlePicResize = (e) => {
    const mQuery = window.matchMedia('(max-width: 1080px)');

    const projectPic = document.querySelector(".project-splash");

    if (mQuery.matches) {
        projectPic.style.backgroundImage = `url(${FINAL_DATA[index]["projectImgMobile"]})`;
    } else {
        projectPic.style.backgroundImage = `url(${FINAL_DATA[index]["projectImgDesktop"]})`;
    }
}

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    if (document.getElementsByClassName(slideId[no]).length > 0) {
        let x = document.getElementsByClassName(slideId[no]);
        if (n >= x.length) {slideIndex[no] = 0}
        if (n < 0) {slideIndex[no] = x.length - 1}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        console.log(document.getElementsByClassName(slideId[no]).length)
        x[slideIndex[no]].style.display = "block";
    }
}