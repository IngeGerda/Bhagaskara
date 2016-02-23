/**
 * Created by IngeGerda on 29.01.2016.
 */

//*********Sticky Navigation**************//
$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $( window ).height() -10;
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed');
        }
        else {
            $('nav').removeClass('fixed');
        }
    });
});
$(document).ready(function() {
    $("span.menu").click(function () {
        $(".top-nav ul").slideToggle("slow", function () {
        });
    });
});
$(document).ready(function(){
    $("nav ul li a").click(function(){
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
    });
});
//******Scroll*****//
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
});

//******Owl-Carousel*****//
$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        items : 1,
        lazyLoad : true,
        autoPlay : true,
        navigation : false,
        navigationText : false,
        pagination : true
    });
});
$(document).ready(function() {
    var owl = $("#owl-demo1");
    owl.owlCarousel({
        items : 3,
        lazyLoad : true,
        autoPlay : true,
        navigation : false,
        navigationText : true,
        pagination : false
    });
    // Custom Navigation Events
    $(".arrow-next").click(function(){
        owl.trigger('owl.next');
    });
    $(".arrow-prev").click(function(){
        owl.trigger('owl.prev');
    })
});
//******Swipebox*****//
jQuery(function($) {
    $(".swipebox").swipebox({
        useCSS : true, // false will force the use of jQuery for animations
        hideBarsDelay : 3000 // 0 to always show caption and action bar
    });
});
