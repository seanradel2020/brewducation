
// This code was heavily influenced from this stack overflow post https://stackoverflow.com/questions/69502795/how-can-i-create-a-timed-slideshow-with-html-css-and-javascript
let slideIndex: number = 0;
showSlides();
function showSlides(): void {
  let i: number;
  const slides: HTMLCollectionOf<Element> = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  (slides[slideIndex - 1] as HTMLElement).style.display = "block";
  setTimeout(showSlides, 4000);
}


//The following code was taken from our notes from October 25th
const menuToggle = document.querySelector('.menu-toggle') as HTMLElement | null;
const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement | null;

console.log(menuToggle, " and ", mobileMenu);

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', function () {
    // Toggle the "active" class on the menu toggle for the hamburger icon animation
    menuToggle.classList.toggle('active');

    // Toggle the visibility of the mobile menu
    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
    }
  });
}

//Followed this guide for selectors: https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/


function brew() {
    
    let Malt1 = document.querySelector<HTMLSelectElement>('#Malt1');
    let Malt2 = document.querySelector<HTMLSelectElement>('#Malt2');
    let Hops = document.querySelector<HTMLSelectElement>('#Hops');
    let Yeast = document.querySelector<HTMLSelectElement>('#Yeast');
    let Adjunct = document.querySelector<HTMLSelectElement>('#Adjunct');
    
    if(Malt1.value == "Pilsner Malt"){
        var color: string = "golden";
        var malt: string = "refreshing";
    }
    else if(Malt1.value == "Pale Malt"){
        var color: string = "Pale to Amber";
        var malt: string = "sweet and full";
    }
    else if(Malt1.value == "Chocolate Malt"){
        var color: string = "dark";
        var malt: string = "heavy";
    }
    else if(Malt1.value == "Wheat Malt"){
        var color: string = "golden";
        var malt: string = "crisp and refreshing";
    }
    else if((Malt1.value == "Pilsner Malt") && (Malt2. value == "Corn")){
        var color: string = "golden";
        var malt: string = "clean malt";
    }
    else if((Malt1.value == "Pilsner Malt") && (Malt2. value == "Wheat Malt")){
        var color: string = "golden";
        var malt: string = "crisp and refreshing";
    }
    else if((Malt1.value == "Choclate") && (Malt2. value == "Black Patent Malt")){
        var color: string = "Dark Black";
        var malt: string = "full dessert";
    }
    else{
        var color: string = "golden";
        var malt: string = "crisp";
    }


    if(Hops.value == "Cascade Hops"){
        var hops: string = "moderately bitter";
       
    }
    else if(Hops.value == "Saaz Hops"){
        var hops: string = "not very bitter";
    }
    else if(Hops.value == "East Kent Goldings Hops"){
        var hops: string = "mildly bitter";
    }
    else if(Hops.value == "Hallertau Hops"){
        var hops: string = "mildly bitter";
    }
    else if(Malt1.value == "Liberty Hops"){
        var hops: string = "moderately bitter";
    }
    else {
        var hops: string = "not very bitter";
    }

    if (Adjunct.value == "Orange Peel") {
        var flavor: string = "citrusy";
    }
    else if (Adjunct.value == "Raspberry") {
        var flavor: string = "fruity";
    }
    else if (Adjunct.value == "Coriander") {
        var flavor: string = "spicy";
    }
    else if (Adjunct.value == "Cinnamon") {
        var flavor: string= "warm and spicy";
    }
    else if (Adjunct.value == "Coffee") {
        var flavor: string = "roasty";
    }
    else if (Adjunct.value == "Vanilla") {
        var flavor: string = "sweet and creamy";
    }
    else if (Adjunct.value == "Pumpkin") {
        var flavor: string = "pumpkiny";
    }
    else if (Adjunct.value == "Chili") {
        var flavor: string = "spicy and hot";
    }
    else{
        var flavor: string = "balanced";
    }
    
    if (Yeast.value == "Lager Yeast") {
        var yeast: string = "clean and crispy notes";
    }
    else if (Yeast.value == "Ale Yeast") {
        var yeast: string = "fruity and complex flavor notes";
    }
    else if (Yeast.value == "Belgian Witbier Yeast") {
        var yeast: string = "spicy and fruity with phenolic notes";
    }
    else if (Yeast.value == "Hefeweizen Yeast") {
        var yeast: string = "banana and clove flavors, and a cloudy appearance";
    }


    let outputElement = document.querySelector('.output');
    outputElement.textContent = `Your brew is ${color} with a ${malt} flavor. It is ${hops}. It also tastes somewhat ${flavor}. Your yeast choice adds ${yeast} Nice Job!`;

//foolowed this guide: https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/

    const radioButtons = document.getElementsByName("water") as NodeListOf<HTMLInputElement>;
    let selectedBBLValue: string | null = null;
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            selectedBBLValue = radioButton.value;
        }
    });


    const gallonsPerBBL: number = 31;
    const kegsPerBBL: number = 2; 
    const bottlesPerGal: number = 128;  
    let gallons: number;
    let kegs: number;
    let bottles: number;

    if(selectedBBLValue == "10"){
        gallons = gallonsPerBBL * 10;
        kegs = kegsPerBBL * 10;
        bottles = bottlesPerGal * gallons

        let outputElement = document.querySelector('.output2');
        outputElement.textContent = `Gallons: ${gallons}, Kegs: ${kegs} Bottles: ${bottles}`;
    }
    if(selectedBBLValue == "0"){
        gallons = gallonsPerBBL * 0;
        kegs = kegsPerBBL * 0;
        bottles = bottlesPerGal * gallons

        let outputElement = document.querySelector('.output2');
        outputElement.textContent = `Gallons: ${gallons}, Kegs: ${kegs} Bottles: ${bottles}`;
    }
    if(selectedBBLValue == "5"){
        gallons = gallonsPerBBL * 5;
        kegs = kegsPerBBL * 5;
        bottles = bottlesPerGal * gallons

        let outputElement = document.querySelector('.output2');
        outputElement.textContent = `Gallons: ${gallons}, Kegs: ${kegs} Bottles: ${bottles}`;
    }
    if(selectedBBLValue == "3"){
        gallons = gallonsPerBBL * 3;
        kegs = kegsPerBBL * 3;
        bottles = bottlesPerGal * gallons

        let outputElement = document.querySelector('.output2');
        outputElement.textContent = `Gallons: ${gallons}, Kegs: ${kegs} Bottles: ${bottles}`;
    }

}



