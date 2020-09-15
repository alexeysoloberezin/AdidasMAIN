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
        $('.cash').text('120');        
        $('.name__titile').text('superstar');
        $('.color__circle').removeClass('active-color');
        $('.color__circle1').addClass('active-color'); 
    }
    if (sliderTwo.hasClass('slick-active')){
        $('.cash').text('139');
        $('.name__titile').text('StreatBall');  
        $('.color__circle').removeClass('active-color');
        $('.color__circle2').addClass('active-color');      
    }    
    if (sliderThree.hasClass('slick-active')){
        $('.cash').text('149');             
        $('.name__titile').text('Hoops'); 
        $('.color__circle').removeClass('active-color');
        $('.color__circle3').addClass('active-color'); 
    }
    if (sliderFor.hasClass('slick-active')){
        $('.cash').text('169');
        $('.name__titile').text('Ozwego'); 
        $('.color__circle').removeClass('active-color');
        $('.color__circle4').addClass('active-color');        
    }
    if (sliderFive.hasClass('slick-active')){
        $('.name__titile').text('Sonkei');
        $('.cash').text('219');    
        $('.color__circle').removeClass('active-color');
        $('.color__circle5').addClass('active-color');   
    }           
})

$('.name__item1').click(function(){
    $('.name__size').text('37');    
})
$('.name__item2').click(function(){
    $('.name__size').text('38');
})
$('.name__item3').click(function(){
    $('.name__size').text('39');
})
$('.name__item4').click(function(){
    $('.name__size').text('40');
})
$('.name__item5').click(function(){
    $('.name__size').text('41');
})
$('.name__item6').click(function(){
    $('.name__size').text('42');
})
$('.name__item7').click(function(){
    $('.name__size').text('43');
})
$('.name__item8').click(function(){
    $('.name__size').text('44');
})
