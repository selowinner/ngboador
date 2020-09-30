$(document).ready(function () {

  //CODE DU MENU MODAL
  $(".menuModalIcon").click(function() {
    $(".couverture-du-menu-modal").css("display", "block");
    $(".menuModal").slideDown(500);
  });
  //CODE DE FERMETTURE DU MENU MODAL
  $(".closeMenuModal").click(function() {
    $(".menuModal").slideUp(500);
    $(".couverture-du-menu-modal").fadeOut(1000);
  });




  //CODE DE LA DROPDOWN DE DECONNEXION
  $(".logout-bouton").click(function() {
    $(".couverture-du-menu-modal").css("display", "block");
    $(".dropdown-deconnexion").slideDown(500);
  });
  //CODE DE FERMETTURE DE LA DROPDOWN DE DECONNEXION
  $(".closedropsownDeconnexion").click(function() {
      $(".dropdown-deconnexion").slideUp(500);
      $(".couverture-du-menu-modal").css('background', '');
      $(".couverture-du-menu-modal").fadeOut(1000);
  });
  $(".couverture-du-menu-modal").click(function() {
      $(".dropdown-deconnexion").slideUp(500);
      $(".couverture-du-menu-modal").css('background', '');
      $(".couverture-du-menu-modal").fadeOut(1000);
      $(".menuModal").slideUp(500);
  });




  /*CODE D'OUVERTURE LA DROPDOWN DE RECHERCHE*/
  $('.container-search').click(function() {
    $('.couverture-du-menu-modal').css({
      'background': 'transparent',
      'display': 'block'
    })
    $('.searchbar-dropdown').slideDown();
  });
  /*CODE DE FERMETURE LA DROPDOWN DE RECHERCHE*/
  $('.couverture-du-menu-modal').click(function() {
    $('.couverture-du-menu-modal').css({
      'background': '',
      'display': 'none'
    })
    $('.searchbar-dropdown').slideUp(500)
  });

});


//CODE DU SWIPER DES PROCEDURES
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
});