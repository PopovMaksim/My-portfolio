let heightWindow,
    menuIcon;
heightWindow = document.documentElement.clientHeight;
menuIcon = document.getElementById('menu-icon');

document.addEventListener('scroll', function() {
    let scroll;
    scroll = window.pageYOffset;

    if (scroll > heightWindow) {
        // menuIcon.style.display = 'block';
        menuIcon.style.opacity = '1';
        menuIcon.style.left = '2em';
    } else {
        // menuIcon.style.display = 'none';
        menuIcon.style.opacity = '0';
        menuIcon.style.left = '-3em';
    }
}, false);