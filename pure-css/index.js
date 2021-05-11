let parallax = document.querySelector('.parallax2');

window.addEventListener('scroll', function(){
    let scroll = window.pageYOffset;
    parallax.style.backgroundPositionY = scroll * 0.7 + "px";

    console.log(scroll)
})

