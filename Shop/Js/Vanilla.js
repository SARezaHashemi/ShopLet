function $(query){
    return document.querySelector(query);
}

function hide(el){
    el.style.display = 'none';
}

function show(el){
    el.style.display = '';
}

const SliderPreBtn = $("#slider-pre-btn");
const SliderNextBtn = $("#slider-next-btn");
const Slider = $("#slider");

SliderPreBtn.addEventListener("click",function(){
    Slider.scrollBy(512,0);
});
SliderNextBtn.addEventListener("click",function(){
    Slider.scrollBy(-512,0);
});