
const thumb1 = document.querySelector('.thumb1');
const thumb2 = document.querySelector('.thumb2');
const thumb3 = document.querySelector('.thumb3');
const starbucks = document.querySelector('.starbucks');
const circle = document.querySelector('.circle');

function changeSlider(event) {
    console.log(event.target);
    if(event.target.classList.contains('thumb1')){
        starbucks.src = "images/img1.png";
        circle.style.background = "#017143"
    } else if(event.target.classList.contains('thumb2')){
        starbucks.src = "images/img2.png";
        circle.style.background = "#eb7495"
    } else {
            starbucks.src = "images/img3.png";
            circle.style.background = "#d752b1"
    }
}

function init(){
    thumb1.addEventListener("click", changeSlider);
    thumb2.addEventListener("click", changeSlider);
    thumb3.addEventListener("click", changeSlider);
}

init();
