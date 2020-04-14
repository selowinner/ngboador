$(document).ready(function() {

    document.getElementById('block-un-commentaire');
    const height = $('.un-article').height();
    $('#block-un-commentaire').css('height', height);

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



    //CODE DE LA POPUP DE TOUS LES EVENEMENTS
    $(".more-event-text").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").fadeIn(200);
        $(".container-full-list-events-de-la-communaute").css("display", "block");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").fadeOut(100);
        $(".container-full-list-events-de-la-communaute").css("display", "none");
    });



    //MENU MOBILE
    $(".mobile-menu").click(function() {
        $(".dropdownOfMenu").toggle(500);
    });

    $(".container-des-notifications-mobile").click(function() {
        $(".dropdownOfNotifications").toggle(500);
    });


    // FIXATION DES ASIDES
    var waypoint = new Waypoint({
        element: document.getElementById('advertising-left'),
        handler: function(direction) {
            if (direction === 'up') {
                $('#advertising-left').removeClass('a-fixer');

            } else {
                $('#advertising-left').addClass('a-fixer');
                const width = $('#container-profil-communaute').width();
                $('#advertising-left').css('width', width);
            }
        },
    });

    var waypoint2 = new Waypoint({
        element: document.getElementById('block-evenements-2'),
        handler: function(direction) {
            if (direction === 'up') {
                $('#block-evenements-2').removeClass('a-fixer');

            } else {
                $('#block-evenements-2').addClass('a-fixer');
                const width = $('#container-profil-communaute').width();
                $('#block-evenements-2').css('width', width);

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