document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
});


$(document).ready(function(argument) {

    $('.sign-up-2').hide()
    $('.submit').click(function() {
        $('.sign-up').slideUp(200, function() {
            $('.sign-up-2').slideDown(200)
        })
    })
    $('.fb-btn').click(function() {
        $('.sign-up').slideDown(800, function() {
            $('.sign-up-2').slideUp(200)
        })
    })
    $('.passerAInscription').click(function() {
            $('.sub-cont').fadeOut(800)
        })
        /*********** label flottant *******/

    $(".deja-un-compte-span").click(function() {
        $('.sign-up').css("display", "none")
        $('.sign-up-2').css("display", "none")
        $('.sub-cont').slideDown(200)
        $('.sub-cont').css("left", "0px")
        $('.img').css("display", "none")
        $('.sign-in').css("left", "100%")
    });

    $(".pas-de-un-compte-span").click(function() {
        $('.sub-cont').slideUp(200)
        $('.sign-up').slideDown(800)
        $('.sign-up-2').css("display", "none")
    });


});



// Global Variables
const countriesList = document.getElementById("countries");
const subRegion = document.getElementById("subregion");
const prefix = document.getElementById("prefix");
let countries; // will contain "fetched" data

// Event Listeners
// countriesList.addEventListener("change", event => displayCountryInfo(event.target.value));

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
    displayCountryInfo(event.target.value);
}

// fetch("https://restcountries.eu/rest/v2/all")
// .then(function(res){
//   // console.log(res);
//   return res.json();
// })
// .then(function(data){
//   // console.log(data);
//   initialize(data);
// })
// .catch(function(err){
//   console.log("Error:", err);
// });

fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => initialize(data))
    .catch(err => console.log("Error:", err));

function initialize(countriesData) {
    countries = countriesData;
    let options = "";
    // for(let i=0; i<countries.length; i++) {
    //   options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
    //   // options += `<option value="${countries[i].alpha3Code}">${countries[i].name} (+${countries[i].callingCodes[0]})</option>`;
    // }
    countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);
    // document.getElementById("countries").innerHTML = options;
    // document.querySelector("#countries").innerHTML = options;
    countriesList.innerHTML = options;
    // console.log(countriesList);
    // console.log(countriesList.value);
    // console.log(countriesList.length);
    // console.log(countriesList.selectedIndex);
    // console.log(countriesList[10]);
    // console.log(countriesList[10].value);
    // console.log(countriesList[10].text);
    countriesList.selectedIndex = Math.floor(Math.random() * countriesList.length);
    displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
    const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
    // document.querySelector("#flag-container img").src = countryData.flag;
    // document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;
    document.getElementById("prefix").value = `+${countryData.callingCodes[0].replace('0','')}`;
    document.getElementById("region").value = countryData.region;
    document.getElementById("subregion").value = countryData.subregion;
}