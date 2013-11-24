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

$(document).on('click', '#new-item-button', function(){
    createNewWindow({
        size: 'small',
        title: 'Yeni Ekle',
        html : KBA.addNewItem
    });
});

$(document).on('click', '#add-new-item ul li', function(){
    var type = $(this).attr('add');
    
});