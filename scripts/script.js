import { DATA, FINAL_DATA } from "./data.js";
const mouse = { x: 0, y: 0 };
let filter = "designer";
let params;
let dragValue;

window.onload = () => {
  params = new URLSearchParams(window.location.search);

  if (params) {
    if (params.get("filter")) {
      filter = params.get("filter");
    } else {
      window.history.replaceState(null, null, "?filter=designer");
    }
  } else {
    window.history.replaceState(null, null, "?filter=designer");
  }

  filter === "designer" ? generateDesignerCollection() : generateProjectCollection();

  document.querySelector("#designer-filter").addEventListener("click", (e) => {
    generateDesignerCollection();
    let url = new URL(window.location.href);
    url.searchParams.set('filter', 'designer');
    window.history.replaceState({}, '', url);
  });

  document.querySelector("#project-filter").addEventListener("click", (e) => {
    generateProjectCollection();
    let url = new URL(window.location.href);
    url.searchParams.set('filter', 'works');
    window.history.replaceState({}, '', url);
  });

  document.querySelector(".menu-icon").addEventListener("click", (e) => {
    openMenu();
  });

  document.querySelector(".navigation-button").addEventListener("click", (e) => {
    closeMenu();
  });

  document.querySelector(".close-to-des").addEventListener("click", (e) => {
    closeMenu();
  });

  window.addEventListener('mousemove', moveCursor);

  const linkArray = document.querySelectorAll("a, .clickable, .designer-element, #arrow-down, #arrow-right");

  linkArray.forEach(d => {
    d.addEventListener("mouseenter", (e) => {
      document.querySelector(".cursor.small").classList.add("link");
    });

    d.addEventListener("mouseleave", (e) => {
      document.querySelector(".cursor.small").classList.remove("link");
    });
  });

  let navMenu = document.getElementById("navigation-menu");

  document.querySelector("#arrow-down").addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default scroll action
    document.querySelector("#arrow-down-drag").classList.add("move-down");
    setTimeout(function () {
      document.querySelector("#arrow-down-drag").classList.remove("move-down");
    }, 1000);
    welcomePageAnimation(e, "#arrow-down");
  });

  document.querySelector("#arrow-right").addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default scroll action
    document.querySelector("#arrow-right-drag").classList.add("move-right");
    setTimeout(function () {
      document.querySelector("#arrow-right-drag").classList.remove("move-right");
    }, 1000);
    welcomePageAnimation(e, "#arrow-right");
  });

  documentHeight();

  let arrowDown = document.querySelector("#arrow-down-drag");
  let offsetY;

  function move(e) {
    arrowDown.style.top = `${e.clientY - offsetY}px`;
    if (parseInt(arrowDown.style.top, 10) < 0) {
      arrowDown.style.top = "0px";
    }
    if (parseInt(arrowDown.style.top, 10) > 70) {
      arrowDown.style.top = "70px";
      setTimeout(function () {
        arrowDown.style.top = "0px";
      }, 1000);
      welcomePageAnimation(e, "#arrow-down");
    }
  }

  arrowDown.addEventListener("mousedown", (e) => {
    offsetY = e.clientY - arrowDown.offsetTop;
    document.addEventListener("mousemove", move);
  });

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", move);
  });

  let arrowRight = document.querySelector("#arrow-right-drag");
  let offsetRightX;

  function moveRight(e) {
    arrowRight.style.left = `${e.clientX - offsetRightX}px`;
    if (parseInt(arrowRight.style.left, 10) < -260) {
      arrowRight.style.left = "-260px";
    }
    if (parseInt(arrowRight.style.left, 10) > -70) {
      arrowRight.style.left = "-70px";
      setTimeout(function () {
        arrowRight.style.left = "-260px";
      }, 1000);
      welcomePageAnimation(e, "#arrow-right");
    }
  }

  arrowRight.addEventListener("mousedown", (e) => {
    offsetRightX = e.clientX - arrowRight.offsetLeft;
    document.addEventListener("mousemove", moveRight);
  });

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", moveRight);
    setTimeout(function () {
      arrowRight.style.left = "-260px";
    }, 100);
  });

  function moveRightTouch(e) {
    const touch = e.touches[0];
    arrowRight.style.left = `${touch.clientX - offsetRightX}px`;
    if (parseInt(arrowRight.style.left, 10) < -260) {
      arrowRight.style.left = "-260px";
    }
    if (parseInt(arrowRight.style.left, 10) > -100) {
      arrowRight.style.left = "-100px";
      setTimeout(function () {
        arrowRight.style.left = "-260px";
      }, 1000);
      welcomePageAnimation(e, "#arrow-right");
    }
  }

  arrowRight.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    offsetRightX = touch.clientX - arrowRight.offsetLeft;
    document.addEventListener("touchmove", moveRightTouch);
  });

  document.addEventListener("touchend", () => {
    document.removeEventListener("touchmove", moveRightTouch);
    setTimeout(function () {
      arrowRight.style.left = "-260px";
    }, 100);
  });
};

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};

function welcomePageAnimation(e, target) {
  e.preventDefault(); // Prevent the default action for the event
  const element = document.querySelector(target);

  console.log("Scroll position before animation:", window.scrollY); // Log scroll position before animation
  // Start the animation
  setTimeout(function () {
    const mainPageContent = document.querySelector("#main-page-content");
    mainPageContent.scrollIntoView({ behavior: "smooth", block: "start" });
    console.log("Scroll position during animation:", window.scrollY); // Log scroll position during animation

    // Adjust the scroll position by -100px after initial scroll
    setTimeout(function () {
      window.scrollBy({ top: -100, behavior: 'smooth' });
      console.log("Scroll position after additional scroll:", window.scrollY); // Log scroll position after additional scroll
    }, 600); // Additional delay to allow initial scroll to complete

  }, 500); // Delay to allow the animation to complete before scrolling

  setTimeout(function () {
    document.querySelectorAll(".animated-circle").forEach(d => {
      d.classList.add("enlarge");
      d.style.transition = ''; // Ensure transition is enabled for adding the class
    });
  }, 300);

  setTimeout(function () {
    document.querySelectorAll(".animated-circle").forEach(d => {
      d.style.transition = 'none'; // Disable transition before removing the class
      d.classList.remove("enlarge");
      setTimeout(() => {
        d.style.transition = ''; // Re-enable transition for future use
      }, 0); // Reset transition to default immediately after
    });
    console.log("Scroll position after animation:", window.scrollY); // Log scroll position after animation
  }, 950);
}


const cursor = document.querySelector('.cursor.small');

const moveCursor = (e) => {
  mouse.y = e.clientY;
  mouse.x = e.clientX;

  const width = document.getElementsByClassName('cursor')[0].offsetWidth;
  cursor.style.transform = `translate3d(${mouse.x - width / 2}px, ${mouse.y - width / 2}px, 0)`;
};

// Additional functions and event listeners
const openMenu = () => {
  const navMobile = document.querySelector("#navigation-list-mobile");
  navMobile.scrollIntoView({ behavior: "smooth" });
  navMobile.classList.add("active");
};

const closeMenu = () => {
  const navMobile = document.querySelector("#navigation-list-mobile");
  navMobile.classList.remove("active");
};

const generateDesignerCollection = () => {
  const designerFilter = document.querySelector("#designer-filter");
  const projectFilter = document.querySelector("#project-filter");
  if (!("active" in designerFilter.classList)) {
    designerFilter.classList.add("filter-active");
    projectFilter.classList.remove("filter-active");
  }

  const collections = document.querySelector("#main-page-collections");
  collections.innerHTML = "";
  FINAL_DATA.forEach((d, i) => {
    const container = document.createElement('div');
    container.classList.add("clickable", "designer-element", "designer-element-animation");
    container.id = d.preferredName.split(" ")[0] + "-" + i;

    const image_div = document.createElement("div");
    const filter_div = document.createElement("div");
    image_div.classList.add("designer-image");
    image_div.style.backgroundImage = `url(${d["thumbnailImg"]})`;
    filter_div.classList.add("image-filter");
    image_div.append(filter_div);

    const text_div = document.createElement("div");
    text_div.classList.add("designer-text");
    text_div.innerHTML = d.preferredName;

    container.addEventListener("click", (e) => {
      window.location.href = `./designer.html?id=${container.id}`;
    });

    container.append(image_div, text_div);
    collections.append(container);
  });
};

const generateProjectCollection = () => {
  const designerFilter = document.querySelector("#designer-filter");
  const projectFilter = document.querySelector("#project-filter");
  if (!("active" in projectFilter.classList)) {
    projectFilter.classList.add("filter-active");
    designerFilter.classList.remove("filter-active");
  }

  const collections = document.querySelector("#main-page-collections");
  collections.innerHTML = "";
  FINAL_DATA.forEach((d, i) => {
    const container = document.createElement('div');
    container.classList.add("project-element", "clickable");
    container.id = d.preferredName.split(" ")[0] + "-" + i;

    const image_div = document.createElement("div");
    image_div.classList.add("project-image");
    image_div.style.backgroundImage = `url(${d["projectThumbnail"]})`;
    image_div.style.backgroundSize = "cover";

    const filter_div = document.createElement("div");
    filter_div.classList.add("image-filter");
    image_div.append(filter_div);

    const text_div = document.createElement("div");
    text_div.classList.add("designer-text");
    text_div.innerHTML = `${d["projectTitle"]}`;

    container.addEventListener("click", (e) => {
      window.location.href = `./project.html?id=${container.id}`;
    });

    container.append(image_div, text_div);
    collections.append(container);
  });
};
