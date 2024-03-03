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
}

const openMenu = () => {
    const navMobile = document.querySelector("#navigation-list-mobile");
    navMobile.classList.add("active")
}

const closeMenu = () => {
    const navMobile = document.querySelector("#navigation-list-mobile");
    navMobile.classList.remove("active")
}
