var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}
//The following code was taken from our notes from October 25th
var menuToggle = document.querySelector('.menu-toggle');
var mobileMenu = document.querySelector('.mobile-menu');
console.log(menuToggle, " and ", mobileMenu);
if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
        // Toggle the "active" class on the menu toggle for the hamburger icon animation
        menuToggle.classList.toggle('active');
        // Toggle the visibility of the mobile menu
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        }
        else {
            mobileMenu.style.display = 'block';
        }
    });
}
//Followed this guide for selectors: https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/
function brew() {
    var Malt1 = document.querySelector('#Malt1');
    var Malt2 = document.querySelector('#Malt2');
    var Hops = document.querySelector('#Hops');
    var Yeast = document.querySelector('#Yeast');
    var Adjunct = document.querySelector('#Adjunct');
    if (Malt1.value == "Pilsner Malt") {
        var color = "golden";
        var malt = "refreshing";
    }
    else if (Malt1.value == "Pale Malt") {
        var color = "Pale to Amber";
        var malt = "sweet and full";
    }
    else if (Malt1.value == "Chocolate Malt") {
        var color = "dark";
        var malt = "heavy";
    }
    else if (Malt1.value == "Wheat Malt") {
        var color = "golden";
        var malt = "crisp and refreshing";
    }
    else if ((Malt1.value == "Pilsner Malt") && (Malt2.value == "Corn")) {
        var color = "golden";
        var malt = "clean malt";
    }
    else if ((Malt1.value == "Pilsner Malt") && (Malt2.value == "Wheat Malt")) {
        var color = "golden";
        var malt = "crisp and refreshing";
    }
    else if ((Malt1.value == "Choclate") && (Malt2.value == "Black Patent Malt")) {
        var color = "Dark Black";
        var malt = "full dessert";
    }
    else {
        var color = "golden";
        var malt = "crisp";
    }
    if (Hops.value == "Cascade Hops") {
        var hops = "moderately bitter";
    }
    else if (Hops.value == "Saaz Hops") {
        var hops = "not very bitter";
    }
    else if (Hops.value == "East Kent Goldings Hops") {
        var hops = "mildly bitter";
    }
    else if (Hops.value == "Hallertau Hops") {
        var hops = "mildly bitter";
    }
    else if (Malt1.value == "Liberty Hops") {
        var hops = "moderately bitter";
    }
    else {
        var hops = "not very bitter";
    }
    if (Adjunct.value == "Orange Peel") {
        var flavor = "citrusy";
    }
    else if (Adjunct.value == "Raspberry") {
        var flavor = "fruity";
    }
    else if (Adjunct.value == "Coriander") {
        var flavor = "spicy";
    }
    else if (Adjunct.value == "Cinnamon") {
        var flavor = "warm and spicy";
    }
    else if (Adjunct.value == "Coffee") {
        var flavor = "roasty";
    }
    else if (Adjunct.value == "Vanilla") {
        var flavor = "sweet and creamy";
    }
    else if (Adjunct.value == "Pumpkin") {
        var flavor = "pumpkiny";
    }
    else if (Adjunct.value == "Chili") {
        var flavor = "spicy and hot";
    }
    else {
        var flavor = "balanced";
    }
    if (Yeast.value == "Lager Yeast") {
        var yeast = "clean and crispy notes";
    }
    else if (Yeast.value == "Ale Yeast") {
        var yeast = "fruity and complex flavor notes";
    }
    else if (Yeast.value == "Belgian Witbier Yeast") {
        var yeast = "spicy and fruity with phenolic notes";
    }
    else if (Yeast.value == "Hefeweizen Yeast") {
        var yeast = "banana and clove flavors, and a cloudy appearance";
    }
    var outputElement = document.querySelector('.output');
    outputElement.textContent = "Your brew is ".concat(color, " with a ").concat(malt, " flavor. It is ").concat(hops, ". It also tastes somewhat ").concat(flavor, ". Your yeast choice adds ").concat(yeast, " Nice Job!");
    var radioButtons = document.getElementsByName("water");
    var selectedBBLValue = null;
    radioButtons.forEach(function (radioButton) {
        if (radioButton.checked) {
            selectedBBLValue = radioButton.value;
        }
    });
    var gallonsPerBBL = 31;
    var kegsPerBBL = 2;
    var bottlesPerGal = 128;
    var gallons;
    var kegs;
    var bottles;
    if (selectedBBLValue == "10") {
        gallons = gallonsPerBBL * 10;
        kegs = kegsPerBBL * 10;
        bottles = bottlesPerGal * gallons;
        var outputElement_1 = document.querySelector('.output2');
        outputElement_1.textContent = "Gallons: ".concat(gallons, ", Kegs: ").concat(kegs, " Bottles: ").concat(bottles);
    }
    if (selectedBBLValue == "0") {
        gallons = gallonsPerBBL * 0;
        kegs = kegsPerBBL * 0;
        bottles = bottlesPerGal * gallons;
        var outputElement_2 = document.querySelector('.output2');
        outputElement_2.textContent = "Gallons: ".concat(gallons, ", Kegs: ").concat(kegs, " Bottles: ").concat(bottles);
    }
    if (selectedBBLValue == "5") {
        gallons = gallonsPerBBL * 5;
        kegs = kegsPerBBL * 5;
        bottles = bottlesPerGal * gallons;
        var outputElement_3 = document.querySelector('.output2');
        outputElement_3.textContent = "Gallons: ".concat(gallons, ", Kegs: ").concat(kegs, " Bottles: ").concat(bottles);
    }
    if (selectedBBLValue == "3") {
        gallons = gallonsPerBBL * 3;
        kegs = kegsPerBBL * 3;
        bottles = bottlesPerGal * gallons;
        var outputElement_4 = document.querySelector('.output2');
        outputElement_4.textContent = "Gallons: ".concat(gallons, ", Kegs: ").concat(kegs, " Bottles: ").concat(bottles);
    }
    //console.log("Selected Water Value:", selectedWaterValue);
}
