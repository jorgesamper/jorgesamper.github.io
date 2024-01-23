
AOS.init();

//cursor

// document.addEventListener("DOMContentLoaded", function () {
//     const cursor = document.getElementById("cursor");
  
//     let position = {
//       distanceX: 0,
//       distanceY: 0,
//       pointerX: 0,
//       pointerY: 0,
//     };
  
//     let previousPointerX = 0;
//     let previousPointerY = 0;
//     let angle = 0;
//     let previousAngle = 0;
//     let angleDisplace = 0;
//     const degrees = 57.296;
//     let moving = false;
  
//     let cursorSize = 0;
//     let cursorSizeInit = 0;
  
//     // The cursor status of the default cursor visibility
//     setOriginalCursor("none");
  
//     /**
//      * The cursor size from the CSS variable
//      */
//     cursorSizeInit = cursorSize =
//       Number(getComputedStyle(cursor).getPropertyValue("--size").slice(0, -2)) / 2;
  
//     /**
//      * Center the position of cursor after its container loaded
//      */
//     init();
  
//     /**
//      * Get the cursor position by event and apply them to the transform property of the cursor
//      *
//      * @param {object} event
//      * @param {object} cursorBlock
//      */
//     function move(event, cursorBlock) {
//       previousPointerX = position.pointerX;
//       previousPointerY = position.pointerY;
//       position.pointerX = event.pageX - cursorBlock.getBoundingClientRect().x;
//       position.pointerY =
//         event.pageY -
//         cursorBlock.getBoundingClientRect().y +
//         document.documentElement.getBoundingClientRect().y;
//       position.distanceX = Math.min(
//         Math.max(previousPointerX - position.pointerX, -20),
//         20
//       );
//       position.distanceY = Math.min(
//         Math.max(previousPointerY - position.pointerY, -20),
//         20
//       );
  
//       cursor.style.transform = `translate3d(${position.pointerX}px, ${position.pointerY}px, 0)`;
//       rotate(position);
//       moving ? stop() : (moving = true);
//     }
  
//     function rotate(position) {
//       let unsortedAngle =
//         (Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) *
//           degrees);
  
//       if (isNaN(unsortedAngle)) {
//         angle = previousAngle;
//       } else {
//         if (unsortedAngle <= 45) {
//           if (position.distanceX * position.distanceY >= 0) {
//             angle = +unsortedAngle;
//           } else {
//             angle = -unsortedAngle;
//           }
//         } else {
//           if (position.distanceX * position.distanceY <= 0) {
//             angle = 180 - unsortedAngle;
//           } else {
//             angle = unsortedAngle;
//           }
//         }
//       }
//       cursor.style.transform += ` rotate(${angle}deg)`;
//       previousAngle = angle;
//     }
  
//     function stop() {
//       setTimeout(() => {
//         moving = false;
//       }, 50);
//     }
  
//     function setOriginalCursor(value) {
//       cursor.parentElement.style.cursor = value;
//       cursor.parentElement
//         .querySelectorAll(
//           "button, label, input, textarea, select, a"
//         )
//         .forEach((el) => {
//           el.style.cursor = "inherit";
//         });
//     }
  
//     /**
//      * Center the position of cursor when leaving its container
//      */
//     function reset() {
//       cursor.style.top = "";
//       cursor.style.left = "";
//       cursor.style.transform = "";
//       cursor.style.transition = "500ms";
//     }
  
//     function init() {
//       cursor.style.top = `${(
//         getComputedStyle(cursor).getPropertyValue("--size").slice(0, -2) / -2
//       )}px`;
//       cursor.style.left = `${(
//         getComputedStyle(cursor).getPropertyValue("--size").slice(0, -2) / -2
//       )}px`;
//       cursor.style.transition = "";
//       cursor.addEventListener("click", click);
//     }
  
//     function click() {
//       // Aquí puedes manejar la lógica del clic del cursor
//     }
  
//     // Puedes agregar otros manejadores de eventos o lógica según tus necesidades
  
//     document.addEventListener("mousemove", (e) => {
//       move(e, cursor);
//     });
  
//     document.addEventListener("mouseleave", reset);
//     document.addEventListener("mouseenter", init);
//   });

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
    modalMessage.innerHTML = `¡Hola ${name}, <span style="font-weight: bold;">BIENVENID@</span>! Aquí encontrarás algunos de mis últimos proyectos. Si quieres saber más sobre mí, no dudes en ponerte en contacto 📩`;
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

