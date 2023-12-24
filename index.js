function openAboutPage() {
	window.location.href = "loading.html";
}












var about = document.getElementById("about")

 about.addEventListener("click",function(){

     window.location.href="link/about.html"

 });



var btn_log = document.getElementById("btn_log")

btn_log.addEventListener("click",function(){

    window.location.href = "link/log-in.html"

});


var kripto = document.getElementById("kripto")

kripto.addEventListener("click",function(){

	window.location.href="link/kripto_giris.html"
})







const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});


const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});










// footer

