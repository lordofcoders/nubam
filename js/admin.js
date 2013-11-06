function layout()
{
    $('#admin-left-panel').css({left: $('#loadedView').offset().left - 205});
    for(var i=0; i<KBA.cols; i++)
    {
        var widest = 0;
        $('.col-' + (i+1)).each(function(){
            var w = $(this).width();
            if(widest < w)
            {
                widest = w;
            }
        });
        $('.col-' + (i+1)).width(widest);
    }
    
    $('#loadedView').height($('.kba-table').height() + 2);
}

$(document).ready(function(){
   layout(); 
});

$(window).resize(function(){
    $('.center').height(KBA.docHeight);
    $('#wrapper').width(KBA.windowWidth).height(KBA.docHeight + $('#header').height());
    layout();
});

$(document).on('click', '.large-button', function(){
    $('.selected').removeClass('selected');
    var view = $('label', $(this)).addClass('selected').attr('loadView');
    $('#loadedView').removeClass('top-user top-category top-business').addClass('top-' + view);
    layout();
});

$(document).scroll(function(){
    var pos = $('#loadedView').offset().top - $(window).scrollTop();
    $('#admin-left-panel').css({
        top : pos
    });
    if(pos < 60)
    {
        $('#admin-left-panel').css({
            top : 60
        });
    }
    else
    {
        $('#admin-left-panel').css({
            top : pos
        });
    }
});

$(document).on('click', '#addItem', function(){
    var selected = $('#admin-top-panel .selected').attr('loadView');
    openNewWindow({
        width: 500,
        content: KBA.addCategoryForm
    });
    
});