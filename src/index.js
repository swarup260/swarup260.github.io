
$(document).ready(function(){
  $('.sidenav').sidenav();
});

const copyrighttText = document.querySelector('#copyright');
const yr = new Date();
copyrighttText.innerHTML = `Copyright &#169; ${yr.getFullYear()} <span>Swarup Das</span>`

