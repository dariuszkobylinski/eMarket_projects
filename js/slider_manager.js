/*Slider górny*/

document.addEventListener("DOMContentLoaded", () => {
    let mySlider = document.querySelectorAll(".box_image_slider");
    console.log(mySlider);
    
    // let mySliderText = document.querySelectorAll(".sliderText_left");
    // console.log(mySliderText);

    // mySliderText[0].style.visibility = "visible";
    // mySliderText[4].style.visibility = "visible";

    let counter = 0;
    console.log(counter);
    setInterval(() => {
        //console.log(counter);
        if (counter <= mySlider.length - 2) {
            counter = counter + 1;
            mySlider[counter - 1].classList.toggle("visible");
            mySlider[counter].classList.toggle("visible");

            // mySlider[counter + 4 - 1].classList.toggle("visible");
            // mySlider[counter + 4].classList.toggle("visible");

            mySliderText[counter - 1].style.visibility = "hidden";
            mySliderText[counter].style.visibility = "visible";

            // mySliderText[counter + 4 - 1].style.visibility = "hidden";
            // mySliderText[counter + 4].style.visibility = "visible";

        } else {
            counter = 0;
            mySlider[mySlider.length - 1].classList.toggle("visible");
            // mySlider[mySlider.length / 2 + 4 - 1].classList.toggle("visible");
            mySlider[0].classList.toggle("visible");
            // mySlider[4].classList.toggle("visible");

            // mySliderText[mySliderText.length / 2 - 1].style.visibility = "hidden";
            // mySliderText[0].style.visibility = "visible";
            // mySliderText[mySliderText.length / 2 + 4 - 1].style.visibility = "hidden";
            // mySliderText[4].style.visibility = "visible";


        }
    }, 8000);

});