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

    document.addEventListener('DOMContentLoaded', function() {
        // Check if the URL contains the scrollTo parameter
        var params = new URLSearchParams(window.location.search);
        var hash = window.location.hash;
        if (params.has('scrollTo') && params.get('scrollTo') === 'main-page') {
            var mainPageElement = document.getElementById('main-page');
            if (mainPageElement) {
                // Scroll to the main-page div
                mainPageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });

    window.addEventListener('mousemove', moveCursor);

    const linkArray = document.querySelectorAll("a, .clickable");

    linkArray.forEach(d => {
        d.addEventListener("mouseenter", (e) => {
        document.querySelector(".cursor").classList.add("link");
        })

        d.addEventListener("mouseleave", (e) => {
        document.querySelector(".cursor").classList.remove("link");
        })
    })

    document.querySelector("#google-map").addEventListener("mouseenter", (e) => {
        document.querySelector(".cursor").style.display = "none";
        // document.querySelector(".small").display = "none";
    })

    document.querySelector("#google-map").addEventListener("mouseleave", (e) => {
        document.querySelector(".cursor").style.display = "inline";
    })
}

const cursorSmall = document.querySelector('.small');

const openMenu = () => {
    const navMobile = document.querySelector("#navigation-list-mobile");
    navMobile.classList.add("active")
}

const closeMenu = () => {
    const navMobile = document.querySelector("#navigation-list-mobile");
    navMobile.classList.remove("active")
}

const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
  
    const width = document.getElementsByClassName('cursor')[0].offsetWidth;
     
    cursorSmall.style.transform = `translate3d(${mouseX-width/2}px, ${mouseY-width/2}px, 0)`;
  }
