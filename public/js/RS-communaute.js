$(document).ready(function() {

    document.getElementById('block-un-commentaire');
    const height = $('.un-article').height();
    $('#block-un-commentaire').css('height', height);

    //CODE DE LA PAGE DE ACTUALITE
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

    //CODE DE LA POPUP BOX DE PUBLICATION
    $(".input-publication-click").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").fadeIn(200);
        $(".block-box-publication").css("display", "block");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").fadeOut(100);
        $(".block-box-publication").css("display", "none");
    });


    
    /*nouveau code ajouté 18 MAI 2020 (Stéphane Gourou)*/

    //CODE DE LA POPUP DU MENU DE LA PUBLICATION
    $(".menu-publication-icon").click(function() {
        $(".block-menu-publication").toggle();
    });



    //CODE DE LA POPUP SUPPRIMER LA PUBLICATION
    $(".supprimer-pub").click(function() {
        $(".block-menu-publication").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-supprimer-publication").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP SUPPRIMER LA PUBLICATION
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-supprimer-publication").css("display", "none");
    });




    //CODE DE LA POPUP SIGNALER LA PUBLICATION
    $(".signaler-pub").click(function() {
        $(".block-menu-publication").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-signaler-publication").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP SIGNALER LA PUBLICATION
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-signaler-publication").css("display", "none");
    });





    //CODE DE LA POPUP DESABONNEMENT D'UN USER
    $(".desabonner-user").click(function() {
        $(".block-menu-publication").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-desabonnement").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP DESABONNEMENT D'UN USER
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-desabonnement").css("display", "none");
    });





    //CODE DE LA POPUP SUPPRIMER UN EVENEMENT PROGRAMME
    $(".btn-supprimer").click(function() {
        $(".container-full-list-events-de-la-communaute").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-supprimer-evenement").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP SUPPRIMER UN EVENEMENT PROGRAMME
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-supprimer-evenement").css("display", "none");
    });




    //CODE DE MODIFICATION D'UN EVENEMENT DEJA PROGRAMME
    $(".btn-modifier").click(function() {
        $(".container-full-list-events-de-la-communaute").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-creation-nouvel-evenement").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP DE MODIFICATION D'UN EVENEMENT DEJA PROGRAMME
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-creation-nouvel-evenement").css("display", "none");
    });
    






    //CODE D'OUVERTURE DE LA COUVERTURE DE CHANGEMENT DE LA PHOTO COUVERTURE
    $(".image-cover").mouseover(function() {
        $(".cover-modification-photo-couverture").css("display", "block");
    });
    //CODE DE FERMETTURE COUVERTURE DE CHANGEMENT DE LA PHOTO COUVERTURE
    $(".image-cover").mouseleave(function() {
        $(".cover-modification-photo-couverture").css("display", "none");
    });








    //CODE D'OUVERTURE DE LA COUVERTURE DE CHANGEMENT DE LA PHOTO DE PROFIL
    $(".container-profil-communaute").mouseover(function() {
        $(".cover-modification-photo-profil").css("display", "block");
    });
    //CODE DE FERMETTURE COUVERTURE DE CHANGEMENT DE LA PHOTO DE PROFIL
    $(".container-profil-communaute").mouseleave(function() {
        $(".cover-modification-photo-profil").css("display", "none");
    });









    //CODE D'APPARITION DE LA POPUP DE PREVIEW DE TELECHARGEMENT DE LA PHOTO COUVERTURE
    $(".cover-modification-photo-couverture").click(function() {
        $(".cover-modification-photo-couverture").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-preview-photo-de-couverture").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP DE PREVIEW DE TELECHARGEMENT DE LA PHOTO COUVERTURE
    $(".btn-annuler").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-preview-photo-de-couverture").css("display", "none");
    });
    //CODE DE FERMETTURE DE LA POPUP DE PREVIEW DE TELECHARGEMENT DE LA PHOTO COUVERTURE
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-preview-photo-de-couverture").css("display", "none");
    });







    //CODE D'APPARITION DE LA POPUP DE PREVIEW DE TELECHARGEMENT DE LA PHOTO DE PROFIL
    $(".cover-modification-photo-profil").click(function() {
        $(".cover-modification-photo-profil").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-preview-photo-de-profil").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP DE PREVIEW DE TELECHARGEMENT DE LA PHOTO DE PROFIL
    $(".btn-annuler").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-preview-photo-de-profil").css("display", "none");
    });
    //CODE DE FERMETTURE DE LA POPUP DE PREVIEW DE TELECHARGEMENT DE LA PHOTO DE PROFIL
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-preview-photo-de-profil").css("display", "none");
    });




    //CODE DE SUPPRESSION D'UN MEMBRE DE LA COMMUNAUTE
    $(".retirer-user").click(function() {
        $(".popup-de-la-liste-des-membres-de-la-communaute").css("display", "none");
        $(".block-menu-interaction-membre").css("display", "none");
        $(".container-des-interactions-sur-les-membres").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-supprimer-membre").css("display", "block");
    });
    //CODE DE FERMETTURE DE SUPPRESSION D'UN MEMBRE DE LA COMMUNAUTE
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-supprimer-membre").css("display", "none");
        $(".popup-de-la-liste-des-membres-de-la-communaute").css("display", "none");
    });



    //CODE NOMINATION D'UN ADMIN
    $(".nommer-user-admin").click(function() {
        $(".popup-de-la-liste-des-membres-de-la-communaute").css("display", "none");
        $(".block-menu-interaction-membre").css("display", "none");
        $(".container-des-interactions-sur-les-membres").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-nommer-admin").css("display", "block");
    });
    //CODE DE FERMETTURE NOMINATION D'UN ADMIN
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-nommer-admin").css("display", "none");
        $(".popup-de-la-liste-des-membres-de-la-communaute").css("display", "none");
    });



    //CODE RETROGRADER L'ADMIN EN MEMBRE SIMPLE
    $(".retrograder-admin-user").click(function() {
        $(".popup-de-la-liste-des-membres-de-la-communaute").css("display", "none");
        $(".block-menu-interaction-membre").css("display", "none");
        $(".container-des-interactions-sur-les-membres").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-retrograder-admin").css("display", "block");
    });
    //CODE DE FERMETTURE RETROGRADER L'ADMIN EN MEMBRE SIMPLE
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-retrograder-admin").css("display", "none");
        $(".popup-de-la-liste-des-membres-de-la-communaute").css("display", "none");
    });



    //CODE DE FERMETTURE DE TOUTE LES POPUP EN CLIQUANT SUR LE BOUTON "NON"
    $(".btn-non").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-supprimer-publication").css("display", "none");
        $(".popup-signaler-publication").css("display", "none");
        $(".popup-desabonnement").css("display", "none");
        $(".popup-supprimer-evenement").css("display", "none");
        $(".popup-supprimer-membre").css("display", "none");
        $(".popup-nommer-admin").css("display", "none");
        $(".popup-retrograder-admin").css("display", "none");
        $(".popup-de-la-liste-des-membres-de-la-communaute").css("display", "none");
        
    });





    //CODE DE POPUP D'AFFICHAGE DE LA LISTE DES MEMBRES (OPTION ENTRE LA LISTE DES MEMBRES ET CEUX DES MEMBRES RECOMMANDES)
    $(".voir-liste-des-membres").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".container-des-interactions-sur-les-membres").slideDown();
    });
    //AFFICHAGE DE LA LISTE DE TOUS LES MEMBRES
    $(".listeMembres").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-de-la-liste-des-membres-de-la-communaute").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
        $(".btn-members").css({
            'background': '#336699',
            'border': '1px solid #336699',
            'color': 'white'
        })
    });
    //AFFICHAGE DE LA LISTE DE TOUS LES MEMBRES RECOMMANDES
    $(".listeMembresRecommandes").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-de-la-liste-des-membres-recommandes-de-la-communaute").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
    });
    //INTERACTION SUR LE MEMBRE DE LA COMMUNAUTE
    $(".optionMenuMember").click(function() {
        $(".block-menu-interaction-membre").toggle();
    });
    //FERMETURE DE LA LISTE DE TOUS LES MEMBRES
    $(".cancel-popup-list-members").click(function() {
        $(".popup-de-la-liste-des-membres-de-la-communaute").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });
    //FERMETURE DE LA LISTE DES MEMBRES RECOMMANDES
    $(".cancel-popup-list-members-recommandes").click(function() {
        $(".popup-de-la-liste-des-membres-recommandes-de-la-communaute").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });
    //FERMETURE DE TOUTES LES POPUPS DE MEMBRES
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-de-la-liste-des-membres-de-la-communaute").css("display", "none");
        $(".popup-de-la-liste-des-membres-recommandes-de-la-communaute").css("display", "none");
        $(".container-des-interactions-sur-les-membres").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });





    //MENU LISTE DES MEMBRES
    $(".btn-members").click(function() {


        $(".btn-admins").css({
            'background': '',
            'border': '1px solid #849999',
            'color': ''
        })

        $(".btn-members").css({
            'background': '#336699',
            'border': '1px solid #336699',
            'color': 'white'
        })

        $(".block-liste-administrateurs").css("display", "none")
        $(".block-liste-membres").css("display", "block")
    });



    $(".btn-admins").click(function() {

        $(".btn-members").css({
            'background': '',
            'border': '1px solid #849999',
            'color': ''
        })

        $(".btn-admins").css({
            'background': '#336699',
            'border': '1px solid #336699',
            'color': 'white'
        })

        $(".block-liste-membres").css("display", "none")
        $(".block-liste-administrateurs").css("display", "block")
    });





    //POPUP DE RECOMMANDATION D'UN MEMBRE DANS LA COMMUNAUTE
    $(".btn-recommander-by-admin").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-faire-une-recommandation").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
    });
    //FERMETTURE DE LA POPUP DE RECOMMANDATION D'UN MEMBRE DANS LA COMMUNAUTE
    $(".cancel-popup-recommander").click(function() {
        $(".popup-faire-une-recommandation").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-faire-une-recommandation").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });

    /*nouveau code ajouté fin*/




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


    //CODE DE LA BARRE DE RECHERCHE ET DE DROPDOWN
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
        $(".dropdownOfMenu").css("display", "none");/*nouveau*/
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



    //CODE DE LA POPUP DE TOUS LA CREATION D'UN EVENEMENT
    $(".creer-un-evenement").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").fadeIn(200);
        $(".popup-creation-nouvel-evenement").css("display", "block");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").fadeOut(100);
        $(".popup-creation-nouvel-evenement").css("display", "none");
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
        $(".dropdownOfMenu").toggle();/*nouveau*/
        $(".popup-creation-de-groupe").css("display", "none");
        $(".container-full-list-des-communautes").css("display", "none");
        $(".couverture-du-commentaire").css("display", "none");
        $(".container-full-list-events-de-la-communaute").css("display", "none");
        $(".popup-creation-nouvel-evenement").css("display", "none");
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