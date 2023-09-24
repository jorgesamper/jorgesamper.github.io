// //Changing-Phrase*

// const typed = new Typed('.typed',{
//     strings: [
//         'experiencias digitales centradas en el usuario.',
//         'interfaces intuitivas y atractivas',
//         'experiencias visuales',
//         'soluciones web a medida',
//         'productos digitales...'
//     ],
//     stringsElement: '#cadenas-texto',
//     typeSpeed: 50,
//     startDelay: 300, 
//     backSpeed: 40,
//     shuffle: false,
//     backDelay: 1500,
//     loop: true,
//     loopCount: false,
//     showCursor: true,
//     cursorChar: '|',
// });

//Puntero*

//Button music*

var audio = document.getElementById("audio");
var playPauseBTN = document.getElementById("playPauseBTN");

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseBTN.innerHTML = '<i class="bx bx-pause"></i>';
    } else {
        audio.pause();
        playPauseBTN.innerHTML = '<i class="bx bx-play"></i>';
    }
}


// SCROLL

window.addEventListener("scroll", function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    document.querySelector(".bar").style.width = scrollProgress + "%";
});

// //  BOTON TOOGLE

// let button = document.querySelector(".button-toogle");
// let checkbox = document.querySelector(".checkbox");

// button.onclick = function(){
//     if(checkbox.checked){
//         document.body.classList.toggle("theme");
//     }
// }
