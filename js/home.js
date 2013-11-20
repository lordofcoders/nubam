$(document).ready(function(){
});
$(document).on('click', '#logo', function(e){
    window.location.href = "";
});

$(document).on('click', '#header-menu ul li', function(e){
    window.location.href = $(this).find('a').attr('href');
});

$(document).on('click', '#header-menu ul li a', function(e){
    e.stopPropagation();
});