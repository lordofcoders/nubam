function layout()
{
    
}

$(document).ready(function(){
   layout(); 
});

$(window).resize(function(){
    $('.center').height(KBA.docHeight);
    $('#wrapper').width(KBA.windowWidth).height(KBA.docHeight + $('#header').height());
});