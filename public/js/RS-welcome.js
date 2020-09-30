$(document).ready(function() {

    //CODE DE LA PAGE DE WELCOME

    /*premier effet*/
    $('.btnInfo1').click(function() {
        $('.textInfo1').hide(500, function() {
            $('.textInfo2').fadeToggle(500);
            $('.loading-level-one').toggle(2500)
        });
    });

    /*deuxième effet*/
    $('.btnInfo2').click(function() {
        $('.textInfo2').hide(500, function() {
            $('.textInfo3').fadeToggle(500);
            $('.loading-level-two').toggle(2500)
        });
    });

    /*troisième effet*/
    $('.btnInfo3').click(function() {
        $('.textInfo3').hide(500, function() {
            $('.textInfo4').fadeToggle(500);
            $('.loading-level-three').toggle(2500)
        });
    });

    /*troisième effet*/
    $('.btnInfo4').click(function() {
        $('.textInfo4').hide(500, function() {
            $('.textInfo5').fadeToggle(500);
            $('.loading-level-four').toggle(2500)
            $('.btnNext').css("display", "block");
        });
    });


});


/*/ 
    CODE DE L'ANIMATION DES IMAGES EN BACKGROUND
/*/


var carousel = {
    target: ".indexSlide",
    autoPlay: true,
    currentIndex: 0,
    length: null,
    slideChangeSpeed: 10000,
    changeSlide: function() {
        var target = document.querySelectorAll(this.target);
        var targetLength = target.length;
        this.length = target.length;
        for (var i = 0; i < targetLength; i++) {
            target[i].classList.add("fadeOut"); // hide all elements

            if (i == this.currentIndex) {
                target[i].classList.remove("fadeOut"); // remove the hidden class (showing the current index item)
            }
        }
        this.updateIndex(); // update the slide index 
    },
    updateIndex: function() {
        this.currentIndex >= this.length - 1 ? (this.currentIndex = 0) : (this.currentIndex = this.currentIndex + 1);
    }
};

// initial run
carousel.changeSlide();


// continous setInterval if carousel is set to autoplay
if (carousel.autoPlay) {
    setInterval(function() {
        carousel.changeSlide();
    }, carousel.slideChangeSpeed);
}