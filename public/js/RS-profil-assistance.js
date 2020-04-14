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


    //DROPDOWN DE LA BARRE DE RECHERCHE DES AMIS
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




    //POPUP DU DASHBORD DE L'ASSISTANT
    $(".voir-mon-dashboard-btn").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".container-box-dashboard").css("display", "block");
    });

    //POPUP DU DASHBORD DE L'ASSISTANT
    $(".couverture-du-commentaire").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").css("display", "none");
        $(".container-box-dashboard").css("display", "none");
    });


    //MENU MOBILE
    $(".mobile-menu").click(function() {
        $(".dropdownOfMenu").toggle(500);
        $(".couverture-du-commentaire").css("display", "none");
        $(".container-box-dashboard").css("display", "none");
    });

    $(".container-des-notifications-mobile").click(function() {
        $(".dropdownOfNotifications").toggle(500);
    });


    //CODE ASSISTANCE
    $(".les-assistances").click(function() {

        $(".btn-mails-admins").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-ecrire-admin").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-assistance").css({
            'background': '#336699',
            'border': 'none',
            'color': 'white'
        })

        $(".block-ecrire-admin-div").css("display", "none")
        $(".block-mails-admins-div").css("display", "none")
        $(".block-assistance-div").css("display", "block")
    });


    $(".mails-admins").click(function() {

        $(".btn-assistance").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-ecrire-admin").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-mails-admins").css({
            'background': '#336699',
            'border': 'none',
            'color': 'white'
        })

        $(".block-ecrire-admin-div").css("display", "none")
        $(".block-assistance-div").css("display", "none")
        $(".block-mails-admins-div").css("display", "block")
    });


    $(".ecrire-admin").click(function() {

        $(".btn-assistance").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-mails-admins").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-ecrire-admin").css({
            'background': '#336699',
            'border': 'none',
            'color': 'white'
        })

        $(".block-mails-admins-div").css("display", "none")
        $(".block-assistance-div").css("display", "none")
        $(".block-ecrire-admin-div").css("display", "block")
    });


    //CODE DE LA POPUP DES DETAILS SUR UNE ASSISTANCE DEMANDEE
    $(".btn-prendre").click(function() {
        $(".couverture-du-commentaire").fadeIn(200);
        $(".container-une-assistance").css("display", "block");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").fadeOut(100);
        $(".container-une-assistance").css("display", "none");
    });


});