
AOS.init();

// navbar out scroll  

let lastScrollTop = 0;
const navbar = document.getElementById("nav");
const navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling hacia abajo
    navbar.classList.add("navbar-hidden");
  } else {
    // Scrolling hacia arriba
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollTop = scrollTop;
});


function redirectToProyectos() {
    // Cambia la ubicación actual de la página al destino deseado
    window.location.href = "#proyectos";
}

function redirectToProyectos3D() {
    // Cambia la ubicación actual de la página al destino deseado
    window.location.href = "#proyectos3D";
}

//  ALERT ¿WE TALK?

const hablamosBtn = document.getElementById("hablamosBtn");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modalMessage");

hablamosBtn.onclick = function () {
    let name = prompt("¿Cuál es tu nombre?");
    modalMessage.textContent = `¡Hola ${name}, BIENVENID@! Aquí encontrarás algunos de mis últimos proyectos. Si quieres saber más sobre mí, no dudes en ponerte en contacto 📩`;
    modal.style.display = "block";
};

function closeModal() {
    modal.style.display = "none";
}

//  MENU RESPONSIVE

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
    });
    // bonus
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navbar.classList.toggle('show-nav');
        });
    })

}
toggleMenu();

//Changing-Phrase*

const typed = new Typed('.typed', {
    strings: [
        'experiencias centradas en el usuario.',
        'interfaces intuitivas y atractivas.',
        'experiencias visuales.',
        'soluciones Web a medida.',
        'productos digitales...'
    ],
    stringsElement: '#cadenas-texto',
    typeSpeed: 50,
    startDelay: 300,
    backSpeed: 40,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',

});


// Scroll to Top

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTopBtn");
    const serviciosSection = document.getElementById("servicios");

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (scrollToTopButton) {
        scrollToTopButton.addEventListener("click", scrollToTop);
    }

    window.addEventListener("scroll", function () {
        const serviciosSectionTop = serviciosSection.getBoundingClientRect().top;

        if (serviciosSectionTop < 0) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });
});



// button music

var audio = document.getElementById("audio");
var playPauseBTN = document.getElementById("playPauseBTN");

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseBTN.innerHTML = '<i class="bx bx-pause"></i>';
        playPauseBTN.classList.add("active"); // Agregar una clase cuando esté sonando

    } else {
        audio.pause();
        playPauseBTN.innerHTML = '<i class="bx bx-play"></i>';
        playPauseBTN.classList.remove("active"); // Quitar la clase cuando esté en pausa

    }
}
// scroll
window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;

    const progressBar = document.querySelector(".progress .progress-bar");
    if (progressBar) {
        progressBar.style.width = scrollProgress + "%";
    }
});

//LINK ACTIVE

// Obtenemos todos los enlaces de la lista de navegación
const navLinks = document.querySelectorAll('.navbar__link a');

// Agregar evento scroll para detectar cambios en la sección visible
window.addEventListener('scroll', function () {
    // Obtener la posición actual del scroll
    const scrollPosition = window.pageYOffset;

    // Iterar sobre los enlaces y comprobar si la sección correspondiente está visible
    navLinks.forEach(function (link) {
        const target = document.querySelector(link.getAttribute('href'));
        const sectionTop = target.offsetTop;
        const sectionHeight = target.offsetHeight;

        // Verificar si la sección está visible en el viewport
        if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
            // Agregar la clase .active al enlace correspondiente
            link.classList.add('active');
        } else {
            // Quitar la clase .active de los demás enlaces
            link.classList.remove('active');
        }
    });
});



// GALLERIA CARRUSELL


$(document).ready(function () {

    // Define flickity carousel
    var $gallery = $('.gallery').flickity({
        imagesLoaded: true,
        percentPosition: false,
        wrapAround: true,
        pageDots: false
    });

    var flkty = $gallery.data('flickity');

    $gallery.on('staticClick', function (event, pointer, cellElement, cellIndex) {
        // Do nothing if cell was not clicked
        if (!cellElement) {
            return;
        }
        // Find image url and use it to tell Fancybox what to target
        var $zoomurl = $(cellElement).find('img').attr('src');
        $.fancybox($zoomurl);
    });

});

