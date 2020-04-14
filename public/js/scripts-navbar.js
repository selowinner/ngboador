// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the header
var Afixer = document.getElementById("a-fixed");
var AfixerDeux = document.getElementById("a-fixeed");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        Afixer.classList.add("sticky");
        AfixerDeux.classList.add("sticky");

    } else {
        Afixer.classList.remove("sticky");
        AfixerDeux.classList.remove("sticky");
    }
}