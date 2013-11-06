$(document).ready(function(){
    $(window).trigger('resize');
    
});

$(window).resize(function(){
    var windowHeight = $(window).height();
    $('.today-wrapper').height(windowHeight-50);
    $('.today').height(windowHeight-70);
});