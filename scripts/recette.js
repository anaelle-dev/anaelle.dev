// Vérifier si l'appareil est un mobile
function isMobileDevice() {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  return isMobile;
}

// Ajouter l'effet glitch au survol pour les PC
var glitchTitle = document.querySelector('.glitch');
glitchTitle.addEventListener('mouseenter', function () {
  if (!isMobileDevice()) {
    glitchTitle.classList.add('glitch-hover');
  }
});
glitchTitle.addEventListener('mouseleave', function () {
  if (!isMobileDevice()) {
    setTimeout(function () {
      glitchTitle.classList.remove('glitch-hover');
    }, 1500); // Arrêter l'effet glitch après 1.5 seconde
  }
});

if (isMobileDevice()) {
  // Ajouter les timings de l'effet glitch sur mobile
  setTimeout(function () {
    glitchTitle.classList.add('glitch-hover');
  }, 3000); // Démarrer l'effet glitch après 3 secondes sur mobile

  setTimeout(function () {
    glitchTitle.classList.remove('glitch-hover');
  }, 3250); // Supprimer l'effet glitch après 3.25 secondes

  setTimeout(function () {
    glitchTitle.classList.add('glitch-hover');
  }, 5000); // Démarrer l'effet glitch après 5 secondes sur mobile à nouveau

  setTimeout(function () {
    glitchTitle.classList.remove('glitch-hover');
  }, 5500); // Supprimer l'effet glitch après 5.5 secondes
}

setTimeout(function () {
  glitchTitle.classList.add('glitch-hover');
}, 7000); // Démarrer l'effet glitch après 7 secondes sur mobile à nouveau

setTimeout(function () {
  glitchTitle.classList.remove('glitch-hover');
}, 8000); // Supprimer l'effet glitch après 8 secondes

setTimeout(function () {
  glitchTitle.classList.add('glitch-hover');
}, 10000); // Démarrer l'effet glitch après 10 secondes sur mobile à nouveau

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for the presence of the dark mode cookie
const darkModeCookie = getCookie('darkMode');
if (darkModeCookie === 'true') {
  darkModeToggle.checked = true;
  body.classList.add('dark-mode');
}

// Add event listener to the dark mode toggle
darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  setCookie('darkMode', darkModeToggle.checked);
});

// Function to set a cookie
function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
  const cookieName = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}
