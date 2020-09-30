var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },/*nouveau code ajouté 18 MAI 2020 (Stéphane Gourou)*/
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

$(document).ready(function() {

  //CODE DE LA POPUP DE COMMENTAIRE D'UN MESSAGE
  $(".block-message-contenu-cliquable").dblclick(function() {
    $(".couverture-du-commentaire").css("display", "block");
    $(".boite-de-commantaires").css("display", "block");
  });
  //CODE DE FERMETTURE DE LA POPUP DE COMMENTAIRE D'UN MESSAGE
  $(".couverture-du-commentaire").click(function() {
      $(".couverture-du-commentaire").css("display", "none");
      $(".boite-de-commantaires").css("display", "none");
  });


  //CODE DE LA POPUP DE SUPPRESSION D'UNE PUBLICATION
  $(".bi-trash").click(function() {
    $(".couverture-du-commentaire").css("display", "block");
    $(".popup-supprimer-publication").css("display", "block");
  });
  //CODE DE FERMETTURE DE LA POPUP DE SUPPRESSION D'UNE PUBLICATION
  $(".couverture-du-commentaire").click(function() {
      $(".couverture-du-commentaire").css("display", "none");
      $(".popup-supprimer-publication").css("display", "none");
  });
  $(".btn-non").click(function() {
    $(".couverture-du-commentaire").css("display", "none");
    $(".popup-supprimer-publication").css("display", "none");
  });



  //CODE DE POPUP DE CHAT EN PRIVE
  $(".un-user-en-session").click(function() {
    $(".grand-block-du-chat").fadeIn(1000);
  });

  $(".button-fermer").click(function() {
      $(".grand-block-du-chat").fadeOut(1000);
  });



  //CODE DE POPUP AJOUTER FICHIER MULTIMEDIA A LA PUBLICATION
  $(".block-button-plus").click(function() {
    $(".block-de-linput-des-messages").css("z-index", "25");
    $(".popup-fichier-ajouter-fichiers-multimedia-a-la-publication").slideDown(500);
    $(".couverture-du-commentaire").css("background", "transparent");
    $(".couverture-du-commentaire").css("display", "block");
  });
  //FERMETTURE DE LA POPUP
  $(".couverture-du-commentaire").click(function() {
    $(".block-de-linput-des-messages").css("z-index", "");
    $(".popup-fichier-ajouter-fichiers-multimedia-a-la-publication").slideUp(500);
    $(".couverture-du-commentaire").css("display", "none");
    $(".couverture-du-commentaire").css("background", "");
  });


});

