import $ from 'jquery';


    console.log("jQuery is working !!");


$('#open-mobile-menu-btn').on('click', e => {
    e.preventDefault();
    $('body').toggleClass('mobile-nav-active');

    $('#close-mobile-menu-btn').removeClass('d-none')
    $('#open-mobile-menu-btn').addClass('d-none')
}) 

$('#close-mobile-menu-btn').on('click', e => {
    e.preventDefault();
    $('body').toggleClass('mobile-nav-active');

    $('#close-mobile-menu-btn').addClass('d-none')
    $('#open-mobile-menu-btn').removeClass('d-none')
}) 
