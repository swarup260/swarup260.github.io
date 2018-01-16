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

/* clock */
const p_time = document.querySelector('#time');

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    p_time.innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
const checkTime = (i) => {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

startTime();