var menu = document.getElementById('meun');
var nav = document.getElementById('nav');
meun.addEventListener('click', function myFunction() {
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
});