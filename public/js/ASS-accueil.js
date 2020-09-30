$(document).ready(function() {

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



});