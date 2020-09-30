$(document).ready(function() {

    //CODE GENERAL DES NAVBARS / COMMENTAIRES / CHATBOX

    $(".notification-parent").click(function() {
        $(".notification-enfant").fadeToggle(1000);
        $(".notifications-message-dropdown").css("display", "none");
        $(".notifications-relation-dropdown").css("display", "none");
        $(".notifications-recommandation-dropdown").css("display", "none");

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


    //CODE DU CLICK SUR LES ICONS DE MESSAGES / RELATIONS / RECOMMANDATIONS
    $(".nav-item-notifications-messages").click(function() {
        $(".notifications-message-dropdown").fadeToggle(300);
        $(".notifications-relation-dropdown").css("display", "none");
        $(".notifications-recommandation-dropdown").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");
    });

    $(".nav-item-notifications-relations").click(function() {
        $(".notifications-relation-dropdown").fadeToggle(300);
        $(".notifications-message-dropdown").css("display", "none");
        $(".notifications-recommandation-dropdown").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");
    });

    $(".nav-item-notifications-recommandations").click(function() {
        $(".notifications-recommandation-dropdown").fadeToggle(300);
        $(".notifications-message-dropdown").css("display", "none");
        $(".notifications-relation-dropdown").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");
    });


    //CODE DE LA BARRE DE RECHERCHE AVEC SA DROPDOWN
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




    
    //CODE DE LA DROPDOWN DE DECONNEXION
    $(".logout-bouton").click(function() {
        $(".couverture-du-commentaire").css({
            'display': 'block',
            'background': 'rgba(39, 55, 70, .7)'
        });
        $(".dropdown-deconnexion").slideDown(500);
    });
    //CODE DE FERMETTURE DE LA DROPDOWN DE DECONNEXION
    $(".closedropsownDeconnexion").click(function() {
        $(".dropdown-deconnexion").slideUp(500);
        $(".couverture-du-commentaire").css('background', '');
        $(".couverture-du-commentaire").fadeOut(1000);
    });
    $(".couverture-du-commentaire").click(function() {
        $(".dropdown-deconnexion").slideUp(500);
        $(".couverture-du-commentaire").css('background', '');
        $(".couverture-du-commentaire").fadeOut(1000);
    });






    //MENU MOBILE
    $(".mobile-menu").click(function() {
        $(".dropdownOfMenu").toggle(500);
        $(".popup-creation-de-groupe").css("display", "none");
        $(".container-full-list-des-communautes").css("display", "none");
        $(".couverture-du-commentaire").css("display", "none");
    });

    $(".container-des-notifications-mobile").click(function() {
        $(".dropdownOfNotifications").toggle(500);
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");

    });

    $(".notifs-messages").click(function() {
        $(".dropdownOfNotifications").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "block");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");

    });

    $(".notifs-relations").click(function() {
        $(".dropdownOfNotifications").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "block");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");

    });

    $(".notifs-recommandations").click(function() {
        $(".dropdownOfNotifications").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "block");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");


    });



    //CODE DE NAVIGATION DANS LA BOX DE MENU
    $(".setting-panel-p").click(function() {
        $('.setting-panel-p').css('color', '#336699')
        $('.info-general-p').css('color', '#4A4B4B')
        $('.privacy-panel-p').css('color', '#4A4B4B')
        $('.friend-list-p').css('color', '#4A4B4B')
        $('.account-deactivate-p').css('color', '#4A4B4B')
    });



    //CODE PARAMETRES
    $(".setting-panel").click(function() {
        $('.div-view-account-deactivate').css('display', 'none')
        $('.div-view-friend-list').css('display', 'none')
        $('.div-view-privacy-panel').css('display', 'none')
        $('.div-view-security-panel').css('display', 'none')
        $('.div-view-info-general').css('display', 'none')
        $('.div-view-setting-panel').css('display', 'block')
        $('.setting-panel-p').css('color', '#336699')
        $('.info-general-p').css('color', '#4A4B4B')
        $('.privacy-panel-p').css('color', '#4A4B4B')
        $('.friend-list-p').css('color', '#4A4B4B')
        $('.account-deactivate-p').css('color', '#4A4B4B')
    });

    $(".info-general").click(function() {
        $('.div-view-account-deactivate').css('display', 'none')
        $('.div-view-friend-list').css('display', 'none')
        $('.div-view-privacy-panel').css('display', 'none')
        $('.div-view-security-panel').css('display', 'none')
        $('.div-view-setting-panel').css('display', 'none')
        $('.div-view-info-general').css('display', 'block')
        $('.info-general-p').css('color', '#336699')
        $('.setting-panel-p').css('color', '#4A4B4B')
        $('.privacy-panel-p').css('color', '#4A4B4B')
        $('.friend-list-p').css('color', '#4A4B4B')
        $('.account-deactivate-p').css('color', '#4A4B4B')
        
    });

    $(".privacy-panel").click(function() {
        $('.div-view-account-deactivate').css('display', 'none')
        $('.div-view-friend-list').css('display', 'none')
        $('.div-view-info-general').css('display', 'none')
        $('.div-view-setting-panel').css('display', 'none')
        $('.div-view-security-panel').css('display', 'none')
        $('.div-view-privacy-panel').css('display', 'block')
        $('.privacy-panel-p').css('color', '#336699')
        $('.info-general-p').css('color', '#4A4B4B')
        $('.setting-panel-p').css('color', '#4A4B4B')
        $('.friend-list-p').css('color', '#4A4B4B')
        $('.account-deactivate-p').css('color', '#4A4B4B')
    });

    $(".friend-list").click(function() {
        $('.div-view-account-deactivate').css('display', 'none')
        $('.div-view-info-general').css('display', 'none')
        $('.div-view-setting-panel').css('display', 'none')
        $('.div-view-security-panel').css('display', 'none')
        $('.div-view-privacy-panel').css('display', 'none')
        $('.div-view-friend-list').css('display', 'block')
        $('.friend-list-p').css('color', '#336699')
        $('.privacy-panel-p').css('color', '#4A4B4B')
        $('.info-general-p').css('color', '#4A4B4B')
        $('.setting-panel-p').css('color', '#4A4B4B')
        $('.account-deactivate-p').css('color', '#4A4B4B')
    });

    $(".account-deactivate").click(function() {
        $('.div-view-info-general').css('display', 'none')
        $('.div-view-setting-panel').css('display', 'none')
        $('.div-view-security-panel').css('display', 'none')
        $('.div-view-privacy-panel').css('display', 'none')
        $('.div-view-friend-list').css('display', 'none')
        $('.div-view-account-deactivate').css('display', 'block')
        $('.account-deactivate-p').css('color', '#336699')
        $('.friend-list-p').css('color', '#4A4B4B')
        $('.privacy-panel-p').css('color', '#4A4B4B')
        $('.info-general-p').css('color', '#4A4B4B')
        $('.setting-panel-p').css('color', '#4A4B4B')
    });

    /* HOVER SUR LE BLOC D'UN AMI DEBUT */
    $(".blocFriend1").mouseover(function() {
        $('.blocFriend1').css('background', '#336699')
        $('.friendName1').css('color', 'white')
        $('.friendImg1').css('border-color', 'white')
    });
    $(".blocFriend1").mouseout(function() {
        $('.blocFriend1').css('background', '')
        $('.friendName1').css('color', '')
        $('.friendImg1').css('border-color', '')
    });

    $(".blocFriend2").mouseover(function() {
        $('.blocFriend2').css('background', '#336699')
        $('.friendName2').css('color', 'white')
        $('.friendImg2').css('border-color', 'white')
    });
    $(".blocFriend2").mouseout(function() {
        $('.blocFriend2').css('background', '')
        $('.friendName2').css('color', '')
        $('.friendImg2').css('border-color', '')
    });

    $(".blocFriend3").mouseover(function() {
        $('.blocFriend3').css('background', '#336699')
        $('.friendName3').css('color', 'white')
        $('.friendImg3').css('border-color', 'white')
    });
    $(".blocFriend3").mouseout(function() {
        $('.blocFriend3').css('background', '')
        $('.friendName3').css('color', '')
        $('.friendImg3').css('border-color', '')
    });

    $(".blocFriend4").mouseover(function() {
        $('.blocFriend4').css('background', '#336699')
        $('.friendName4').css('color', 'white')
        $('.friendImg4').css('border-color', 'white')
    });
    $(".blocFriend4").mouseout(function() {
        $('.blocFriend4').css('background', '')
        $('.friendName4').css('color', '')
        $('.friendImg4').css('border-color', '')
    });
    /* HOVER SUR LE BLOC D'UN AMI DEBUT */
    //FRIEND LIST FIN





});