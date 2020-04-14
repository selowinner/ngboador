$(document).ready(function() {

    document.getElementById('block-un-commentaire');
    const height = $('.un-article').height();
    $('#block-un-commentaire').css('height', height);

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



    //DROPDOWN DE RECHERCHE DES AMIS
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


    //DROPDOWN DE RECHERCHE DES AMIS
    $(".plus-de-recommandation").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popoup-toutes-les-recommandations").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
    });

    $(".mes-recommandations").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popoup-toutes-les-recommandations").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popoup-toutes-les-recommandations").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });


    //MENU MOBILE
    $(".mobile-menu").click(function() {
        $(".dropdownOfMenu").toggle(500);
        $(".couverture-du-commentaire").css("display", "none");
        $(".popoup-toutes-les-recommandations").css("display", "none");
    });

    $(".container-des-notifications-mobile").click(function() {
        $(".dropdownOfNotifications").toggle(500);
    });



    //CODE DE LA GALERIE
    $(".imagesFile-Title").click(function() {
        $('.imagesFile-Title').css('font-weight', 'bold')
        $('.videosFile-Title').css('font-weight', 'normal')
        $(".container-videos-folder").css("display", "none")
        $(".container-image-folder").css("display", "block")
    });


    $(".videosFile-Title").click(function() {
        $('.videosFile-Title').css('font-weight', 'bold')
        $('.imagesFile-Title').css('font-weight', 'normal')
        $(".container-image-folder").css("display", "none")
        $(".container-videos-folder").css("display", "block")
    });



    // FIXATION DES ASIDES
    var waypoint2 = new Waypoint({
        element: document.getElementById('block-recommandations'),
        handler: function(direction) {
            if (direction === 'up') {
                $('#block-recommandations').removeClass('a-fixer');

            } else {
                $('#block-recommandations').addClass('a-fixer');
                const width = $('#block-recommandations').width();
                $('#block-recommandations').css('width', width);
            }
            console.log('Basic waypoint triggered', this.triggerPoint, direction)
        },
    });


});