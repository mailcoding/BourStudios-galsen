// <!-- Inclure cette partie de code dans le fichier base.html qui est inclus sur toutes les pages -->
document.addEventListener('DOMContentLoaded', function() {
    // Stocke la position actuelle dans un cookie lors du chargement de la page
    document.cookie = 'scrollPos=' + window.scrollY + ';path=/';
  });
  
  // ================ Bouton Retour ==============
  document.getElementById('boutonRetour').addEventListener('click', function() {
    // Récupère la position de défilement à partir du cookie
    var scrollPos = parseInt(getCookie('scrollPos')) || 0;
  
    // Restaure la position de défilement
    window.scrollTo(0, scrollPos);
  
    // Utilise history.back() pour revenir à la page précédente
    history.back();
  });
  
  // Fonction pour obtenir la valeur d'un cookie
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }