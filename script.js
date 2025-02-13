console.log("JavaScript is running!");


document.addEventListener("DOMContentLoaded", function () {
    const topNav = document.querySelector(".top-nav");
    const bottomNav = document.querySelector(".bottom-nav");
    
    window.addEventListener("scroll", function () {
        const topNavHeight = topNav.offsetHeight;
        
        if (window.scrollY > topNavHeight) {
            bottomNav.classList.add("show");
        } else {
            bottomNav.classList.remove("show");
        }
    });
});
