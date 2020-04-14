$(document).ready(function() {

    document.getElementById('recherche-membres-scrollable');
    const height = $('.block-recherche-membres').height();
    $('#recherche-membres-scrollable').css('height', height);

    document.getElementById('recherche-communaute-scrollable');
    const heights = $('.block-recherche-communautes').height();
    $('#recherche-communaute-scrollable').css('height', heights);

    //CODE DE LA PAGE DE ACTUALITE

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


    //POPUP DE CREATION DE COMMUNAUTE
    $(".creer-communaute").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-creation-de-groupe").css("display", "block");
    });

    $(".creer-communaute-mobile").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-creation-de-groupe").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
    });

    $(".close-suggestion-amis").click(function() {
        $(".block-affichage-amis-a-ajouter").css("display", "none");
    });

    $(".search-add-friend").click(function() {
        $(".block-affichage-amis-a-ajouter").css("display", "block");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".popup-creation-de-groupe").css("display", "none");
        $(".couverture-du-commentaire").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });






    //CODE DE LA PAGE DE ACTUALITE : LES COMMUNAUTES
    $(".communauteOne").mouseover(function() {
        $(".cover-communauteOne").show();
    });
    $(".communauteOne").mouseleave(function() {
        $(".cover-communauteOne").hide();
    });


    $(".communauteSecond").mouseover(function() {
        $(".cover-communauteTwo").show();
    });
    $(".communauteSecond").mouseleave(function() {
        $(".cover-communauteTwo").hide();
    });


    $(".communauteThree").mouseover(function() {
        $(".cover-communauteThree").show();
    });
    $(".communauteThree").mouseleave(function() {
        $(".cover-communauteThree").hide();
    });



    $(".communauteFour").mouseover(function() {
        $(".cover-communauteFour").show();
    });
    $(".communauteFour").mouseleave(function() {
        $(".cover-communauteFour").hide();
    });



    $(".communauteFive").mouseover(function() {
        $(".cover-communauteFive").show();
    });
    $(".communauteFive").mouseleave(function() {
        $(".cover-communauteFive").hide();
    });


    $(".voirPlus").mouseover(function() {
        $(".cover-communauteVoirPlus").show();
    });
    $(".voirPlus").mouseleave(function() {
        $(".cover-communauteVoirPlus").hide();
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
    });

    //CODE DE LA POPUP DE LA LISTE DE TOUS LES GROUPES D'UN USER
    $(".voirPlus").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").fadeIn(200);
        $(".container-full-list-des-communautes").css("display", "block");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").fadeOut(100);
        $(".container-full-list-des-communautes").css("display", "none");
    });

    // FIXATION DES ASIDES
    var waypoint = new Waypoint({
        element: document.getElementById('fixation'),
        handler: function(direction) {
            if (direction === 'up') {
                $('#fixation').removeClass('a-fixer');

            } else {
                $('#fixation').addClass('a-fixer');
                const width = $('#categorie-honneur').width();
                $('#fixation').css('width', width);
            }
        },
    });
    var waypoint2 = new Waypoint({
        element: document.getElementById('block-community-a-fixer'),
        handler: function(direction) {
            if (direction === 'up') {
                $('#block-community-a-fixer').removeClass('a-fixer');

            } else {
                $('#block-community-a-fixer').addClass('a-fixer');
                const width = $('#categorie-honneur').width();
                $('#block-community-a-fixer').css('width', width);

            }
            console.log('Basic waypoint triggered', this.triggerPoint, direction)
        },
    });

});

//


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});


var swipers = new Swiper('.swiper-container-deux', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    }
});