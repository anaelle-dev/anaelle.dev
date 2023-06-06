// Vérifier si l'appareil est un mobile
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
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
