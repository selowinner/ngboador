$(document).ready(function() {

    //CODE GENERAL DES NAVBARS / COMMENTAIRES / CHATBOX

    $(".notification-parent").click(function() {
        $(".notification-enfant").fadeToggle(1000);
    });

    $(".shopping-parent").click(function() {
        $(".shopping-enfant").fadeToggle(1000);
    });

    $(".service-parent").click(function() {
        $(".service-enfant").fadeToggle(1000);
    });

    $(".coment").click(function() {
        $(".couverture-du-commentaire").fadeIn(1000);
        $(".boite-de-commantaires").fadeIn(1000);
    });

    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").fadeOut(1000);
        $(".boite-de-commantaires").fadeOut(1000);
    });

    $(".un-container-d-un-ami-connecte").click(function() {
        $(".grand-block-du-chat").fadeIn(1000);
    });

    $(".button-fermer").click(function() {
        $(".grand-block-du-chat").fadeOut(1000);
    });


    //
    $(".search-box").click(function() {
        $(".searchbar-dropdown").css("display", "block");
        $(".couverture-du-commentaire").css("background", "transparent");
        $(".couverture-du-commentaire").css("display", "block");
    });

    $(".search-box").mouseleave(function() {
        $(".searchbar-dropdown").css("margin-left", "-1.5%");
    });

    $(".search-box").mouseover(function() {
        $(".searchbar-dropdown").css("margin-left", "");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".searchbar-dropdown").css("display", "none");
        $(".couverture-du-commentaire").css("background", "");
        $(".couverture-du-commentaire").css("display", "none");
    });


    //MENU MOBILE
    $(".mobile-menu").click(function() {
        $(".dropdownOfMenu").toggle(500);
    });

    $(".container-des-notifications-mobile").click(function() {
        $(".dropdownOfNotifications").toggle(500);
    });



    //CODE PARAMETRES
    $(".setting-panel").click(function() {
        $('.div-view-account-deactivate').css('display', 'none')
        $('.div-view-friend-list').css('display', 'none')
        $('.div-view-privacy-panel').css('display', 'none')
        $('.div-view-security-panel').css('display', 'none')
        $('.div-view-info-general').css('display', 'none')
        $('.div-view-setting-panel').css('display', 'block')
    });

    $(".info-general").click(function() {
        $('.div-view-account-deactivate').css('display', 'none')
        $('.div-view-friend-list').css('display', 'none')
        $('.div-view-privacy-panel').css('display', 'none')
        $('.div-view-security-panel').css('display', 'none')
        $('.div-view-setting-panel').css('display', 'none')
        $('.div-view-info-general').css('display', 'block')
    });

    $(".security-panel").click(function() {
        $('.div-view-account-deactivate').css('display', 'none')
        $('.div-view-friend-list').css('display', 'none')
        $('.div-view-privacy-panel').css('display', 'none')
        $('.div-view-info-general').css('display', 'none')
        $('.div-view-setting-panel').css('display', 'none')
        $('.div-view-security-panel').css('display', 'block')
    });


    $(".privacy-panel").click(function() {
        $('.div-view-account-deactivate').css('display', 'none')
        $('.div-view-friend-list').css('display', 'none')
        $('.div-view-info-general').css('display', 'none')
        $('.div-view-setting-panel').css('display', 'none')
        $('.div-view-security-panel').css('display', 'none')
        $('.div-view-privacy-panel').css('display', 'block')
    });


    $(".friend-list").click(function() {
        $('.div-view-account-deactivate').css('display', 'none')
        $('.div-view-info-general').css('display', 'none')
        $('.div-view-setting-panel').css('display', 'none')
        $('.div-view-security-panel').css('display', 'none')
        $('.div-view-privacy-panel').css('display', 'none')
        $('.div-view-friend-list').css('display', 'block')
    });


    $(".account-deactivate").click(function() {
        $('.div-view-info-general').css('display', 'none')
        $('.div-view-setting-panel').css('display', 'none')
        $('.div-view-security-panel').css('display', 'none')
        $('.div-view-privacy-panel').css('display', 'none')
        $('.div-view-friend-list').css('display', 'none')
        $('.div-view-account-deactivate').css('display', 'block')
    });





});