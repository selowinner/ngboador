$(document).ready(function () {

  var requestImage = document.getElementById("requestImage");
  var requestForm = document.getElementById("requestForm");
  
  requestImage.style.height=requestForm.style.height + "px";


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


  // CODE DU FORMULAIRE
  $('.ConcernedInfo').hide()

  $('.myself').click(function() {
    $('#otherpeoplevalidate').hide(200)
    $('#myselfValidate').show(200)

    $('.ConcernedInfo').hide(200)

  });

  $('.otherpeople').click(function() {
    $('#myselfValidate').hide(200)
    $('#otherpeoplevalidate').show(200)

    $('.ConcernedInfo').show(200);
  })
  


  /* CAS : NATURE DE LA DEMANDE EST UNE SIMPLE PREOCCUPATION */
  $('.preocupationDetailsDIV').hide()


  $('.preocupation').click(function() {

    $('#Affairevalidate').hide(200)
    $('#preocupationValidate').show(200)

    $('.AffaireDetailsDIV').hide()
    $('.preocupationDetailsDIV').show(200)
  });

  $('.Affaire').click(function() {
    $('#preocupationValidate').hide(200)
    $('#Affairevalidate').show(200)

    $('.preocupationDetailsDIV').hide()
    $('.AffaireDetailsDIV').show(200)
  })



  //CODE MOUSEOVER SUR LA BOX DES CONDITIONS POUR DEVENIR ASSISTANT
  $(".serviceBox1").mouseover(function() {
    $(".serviceBox1").css("background", "linear-gradient(to right top, #2c3e50, #1d4455, #074a54, #004f4f, #0b5345)");
    $(".hrElement-1").css("border-color", "white");
    $(".serviceBoxH5-1").css("color", "white");
    $(".text-service-1").css("color", "white");

  });
  $(".serviceBox1").mouseout(function() {
    $(".serviceBox1").css("background", "");
    $(".hrElement-1").css("border-color", "");
    $(".serviceBoxH5-1").css("color", "");
    $(".text-service-1").css("color", "");
  });


  $(".serviceBox2").mouseover(function() {
    $(".serviceBox2").css("background", "linear-gradient(to right top, #2c3e50, #1d4455, #074a54, #004f4f, #0b5345)");
    $(".hrElement-2").css("border-color", "white");
    $(".serviceBoxH5-2").css("color", "white");
    $(".text-service-2").css("color", "white");

  });
  $(".serviceBox2").mouseout(function() {
    $(".serviceBox2").css("background", "");
    $(".hrElement-2").css("border-color", "");
    $(".serviceBoxH5-2").css("color", "");
    $(".text-service-2").css("color", "");
  });


  $(".serviceBox3").mouseover(function() {
    $(".serviceBox3").css("background", "linear-gradient(to right top, #2c3e50, #1d4455, #074a54, #004f4f, #0b5345)");
    $(".hrElement-3").css("border-color", "white");
    $(".serviceBoxH5-3").css("color", "white");
    $(".text-service-3").css("color", "white");

  });
  $(".serviceBox3").mouseout(function() {
    $(".serviceBox3").css("background", "");
    $(".hrElement-3").css("border-color", "");
    $(".serviceBoxH5-3").css("color", "");
    $(".text-service-3").css("color", "");
  });


  $(".serviceBox4").mouseover(function() {
    $(".serviceBox4").css("background", "linear-gradient(to right top, #2c3e50, #1d4455, #074a54, #004f4f, #0b5345)");
    $(".hrElement-4").css("border-color", "white");
    $(".serviceBoxH5-4").css("color", "white");
    $(".text-service-4").css("color", "white");

  });
  $(".serviceBox4").mouseout(function() {
    $(".serviceBox4").css("background", "");
    $(".hrElement-4").css("border-color", "");
    $(".serviceBoxH5-4").css("color", "");
    $(".text-service-4").css("color", "");
  });
  
  
  
});





// **********For the XS responsive**********
function reqCol1CenterOnResponsive(x) {
  if (x.matches) { // If media query matches
    document.getElementById('requestForm').setAttribute("style", "margin:auto;");
  } else {
    document.getElementById('requestForm').setAttribute("style", "margin:0;");
  }
}

var x = window.matchMedia("(max-width: 780px)")
reqCol1CenterOnResponsive(x) // Call listener function at run time
x.addListener(reqCol1CenterOnResponsive) // Attach listener function on state changes
  
//  new WOW().init();





var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});
