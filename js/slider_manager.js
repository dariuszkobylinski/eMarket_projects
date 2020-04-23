/*Slider górny*/

document.addEventListener("DOMContentLoaded", () => {
    let mySlider = document.querySelectorAll(".box_image_slider");
    console.log(mySlider);

    let counter = 0;
    console.log(counter);
    setInterval(() => {
        //console.log(counter);
        if (counter <= mySlider.length - 2) {
            counter = counter + 1;
            mySlider[counter - 1].classList.toggle("visible");
            mySlider[counter].classList.toggle("visible");

        } else {
            counter = 0;
            mySlider[mySlider.length - 1].classList.toggle("visible");
            // mySlider[mySlider.length / 2 + 4 - 1].classList.toggle("visible");
            mySlider[0].classList.toggle("visible");
            // mySlider[4].classList.toggle("visible");


        }
    }, 8000);

});