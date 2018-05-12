let navItems = document.querySelectorAll('.nav-item');
let allSections = document.querySelectorAll('*[id^="section"]');
let coverHeight = document.getElementById('section-home').clientHeight;

//executing UpdateNavbar function while scrolling and window resize
window.onscroll = () => {
    UpdateNavbar()
};
window.onresize = () => {
    UpdateNavbar()
};

let UpdateNavbar = () => {
    //displaying Navbar when window scrolls past cover.
    if (document.body.scrollTop > coverHeight || document.documentElement.scrollTop > coverHeight) {
        document.getElementById("nav").style.opacity = "1";
    } else {
        document.getElementById("nav").style.opacity = "0";
    }

    //setting active class to nav-items while scrolling
    for (let [index, section] of allSections.entries()) {
        if (document.body.scrollTop > section.offsetTop + 100 || document.documentElement.scrollTop + 100 > section.offsetTop) {
            for (let item of navItems) {
                if (navItems[index] == item) {
                    item.className = 'nav-item active';
                } else {
                    item.className = 'nav-item';
                }
            } // end for loop
        } // end if
    } // emd for loop
} // end myFunction

//function to display menu on mobile devices
let showMenu = () => {
    let navBar = document.getElementById('nav');
    let navItems = document.getElementsByClassName('nav-item');
    let menu = document.getElementById('m-menu');
    let toggleIcon = document.getElementById('menu-toggle');
    let logo = document.getElementById('menu-logo');

    if (navItems[0].style.display === "none") {
        navBar.className = "column justify-content-center align-items-center";
        for (item of navItems) {
            item.style.display = 'flex';
        }
        menu.className = "row align-items-center justify-content-center";
        toggleIcon.className = "fas fa-angle-up";
        logo.style.display = "none";
    } else {
        navBar.className = "row justify-content-end align-items-center";
        for (item of navItems) {
            item.style.display = 'none';
        }
        menu.className = "row align-items-center justify-content-between";
        toggleIcon.className = "fas fa-bars";
        logo.style.display = "flex";
    }
} //end showMenu

// for smoothly scrolling into sections
let anchorlinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorlinks) {
    item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        e.preventDefault();
    })
}