var meun = document.getElementById('meun');
var nav = document.getElementById('navMobile');
var btn = document.getElementById('btn');
meun.addEventListener('click', function () {
    if (nav.style.display == "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
});
btn.addEventListener('click', function () {
    nav.style.display = "none";
});
