$(document).ready(function () {
    $('.main__slider').slick({
        dots: true,
        swipe: false,
    });
});

$('.burger').click(function () {
    $('.header__row').toggleClass('_active-menu');
   
    $('.burger').toggleClass('_active-burger');
});

$('.gender__item-main').click(function () {
    $('.gender__item').toggleClass('_active-gender');
})
$('.name__size').click(function () {
    $('.name__list').toggleClass('_active-size');
    $('.name__btn').toggleClass('_btn-anim');
});

// ADD TO CART===========================================================================
let sliderOne = $('.slider-one');
let sliderTwo = $('.slider-two');
let sliderThree = $('.slider-three');
let sliderFor = $('.slider-for');
let sliderFive = $('.slider-five');
let mainSlider = $('.main__slider');

$(document).click(function(){
    if (sliderOne.hasClass('slick-active')){
        replaceCash('120');
        replaceName('superstar');
    }
    if (sliderTwo.hasClass('slick-active')){
        replaceCash('139');
        replaceName('StreatBall');
    }    
    if (sliderThree.hasClass('slick-active')){
        replaceCash('149');
        replaceName('Hoops');        
    }
    if (sliderFor.hasClass('slick-active')){
        replaceCash('169');
        replaceName('Ozwego');
    }
    if (sliderFive.hasClass('slick-active')){
        replaceCash('219');
        replaceName('Sonkei');
    }    
})
$('.name__item1').click(function(){
    $('.name__size').text('37');
});
$('.name__item2').click(function(){
    $('.name__size').text('38');
});
$('.name__item3').click(function(){
    $('.name__size').text('39');
});
$('.name__item4').click(function(){
    $('.name__size').text('40');
});
$('.name__item5').click(function(){
    $('.name__size').text('41');
});
$('.name__item6').click(function(){
    $('.name__size').text('42');
});
$('.name__item7').click(function(){
    $('.name__size').text('43');
});
$('.name__item8').click(function(){
    $('.name__size').text('44');
});
function replaceCash(item){
    $('.cash').text(`${item}`);
}
function replaceName(name){
    $('.name__titile').text(`${name}`);
}