/*Slider górny*/
    var numberOfOrders=[1000];
    export  default numberOfOrders;

document.addEventListener("DOMContentLoaded", () => {

    let mySlider = document.querySelectorAll(".box_image_slider");
    // console.log(mySlider);

    let counter = 0;
    // console.log(counter);
    setInterval(() => {
        // console.log(numberOfOrders);
        if (counter <= mySlider.length - 2) {
            counter = counter + 1;
            mySlider[counter - 1].classList.toggle("visible");
            mySlider[counter].classList.toggle("visible");

        } else {
            counter = 0;
            mySlider[mySlider.length - 1].classList.toggle("visible");
            mySlider[0].classList.toggle("visible");
        }
    }, 8000);

});