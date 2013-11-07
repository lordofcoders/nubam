$(document).ready(function(){
    $('#header-menu a').address(function() {  
        return $(this).attr('href').replace(/^#/, '');  
    });  
});