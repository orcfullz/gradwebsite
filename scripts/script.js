var imageLinks = [
  { name: "Canice", link: "https://i.postimg.cc/g0LHfKdF/Canice.png" },
  { name: "Celeste", link: "https://i.postimg.cc/RZN7HTW6/Celeste.png" },
  { name: "Cunjia", link: "https://i.postimg.cc/J755V0wn/Cunjia.png" },
  { name: "Dewei", link: "https://i.postimg.cc/HnY5s0GL/Dewei.png" },
  { name: "Grace", link: "https://i.postimg.cc/FsFg9vmx/Grace.png" },
  { name: "Joseph", link: "https://i.postimg.cc/C1Vk9Tmk/Joseph.png" },
  { name: "Joyie", link: "https://i.postimg.cc/8z9hBrvy/Joyie.png" },
  { name: "Junwei", link: "https://i.postimg.cc/qMmcqFvH/Junwei.png" },
  { name: "Kaiyi", link: "https://i.postimg.cc/PxzYj3Rc/Kaiyi.png" },
  { name: "Kalinda", link: "https://i.postimg.cc/q7K2mMXp/Kalinda.png" },
  { name: "Karin", link: "https://i.postimg.cc/ncL7y1YR/Karin.png" },
  { name: "Ken", link: "https://i.postimg.cc/13nFt5dD/Ken.png" },
  { name: "Kengwei", link: "https://i.postimg.cc/cLpn8Gq2/Kengwei.png" },
  { name: "Kent", link: "https://i.postimg.cc/sfm7HLSG/Kent.png" },
  { name: "Kesh", link: "https://i.postimg.cc/xCRJ7kkV/Kesh.png" },
  { name: "Luke", link: "https://i.postimg.cc/QtsK0gdq/Luke.png" },
  { name: "Merkayla", link: "https://i.postimg.cc/ZKD34ywT/Merkayla.png" },
  { name: "Nazurah", link: "https://i.postimg.cc/YSQm6DM9/Nazurah.png" },
  { name: "Nicole", link: "https://i.postimg.cc/yx8gzV9g/Nicole.png" },
  { name: "Ria", link: "https://i.postimg.cc/MZ9fmQ2y/Ria.png" },
  { name: "Sarah", link: "https://i.postimg.cc/GmyBRgBQ/Sarah.png" },
  { name: "Serene", link: "https://i.postimg.cc/fTkt2RD1/Serene.png" },
  { name: "Sheryl", link: "https://i.postimg.cc/YqV4JBS0/Sheryl.png" },
  { name: "Stacy", link: "https://i.postimg.cc/8CdjJFmf/Stacy.png" },
  { name: "Syafiq", link: "https://i.postimg.cc/vmw4Z7fd/Syafiq.png" },
  { name: "Tanya", link: "https://i.postimg.cc/hjSh9S2y/Tanya.png" },
  { name: "Travis", link: "https://i.postimg.cc/B6Mbpdyq/Travis.png" },
  { name: "Valerie", link: "https://i.postimg.cc/Wzy3L0TC/Valerie.png" },
  { name: "Wina", link: "https://i.postimg.cc/KjjzH0St/Wina.png" },
  { name: "Wing", link: "https://i.postimg.cc/3rfWvQm1/Wing.png" },
  { name: "Yuhang", link: "https://i.postimg.cc/bNGr0VRh/Yuhan.png" },
  { name: "Zhi-Hui", link: "https://i.postimg.cc/TYZwtjkW/Zhi-Hui.png" }
];  

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
  
  // document.querySelector("#project-filter").addEventListener("click", (e) => {
  //   generateProjectCollection();
  // });
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
  
  imageLinks.forEach((d, i) => {
    const container = document.createElement('div');
    container.classList.add("designer-element");
    container.id = d.name;

    const image_div = document.createElement("div");
    image_div.classList.add("designer-image");
    image_div.style.backgroundImage = `url(${d.link})`;

    const text_div = document.createElement("div");
    text_div.classList.add("designer-text");
    text_div.innerHTML = d.name;

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
