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
    $('.window').remove();
    if($(this).parents('#header').length === 0)
    {
        
        var foo = function(){
            
        }
    }
    else
    {
        var that = $(this);
        var foo = function(){
            var moduleID = $('.page').attr('moduleid');
            $('#add-new-item ul li').each(function(){
                if($(this).attr('add') !== 'Block')
                {
                    $(this).remove();
                }
                else
                {    
                    $(this).attr('parent', moduleID);
                    $(this).attr('parentType', 'Module');
                }
                    
            });
        }
    }
    
    createNewWindow({
            size: 'small',
            title: 'Yeni Ekle',
            html : KBA.addNewItem,
            callback : foo
        });
});

$(document).on('click', '#add-new-item ul li', function(){
    var type = $(this).attr('add');
    switch(type)
    {
        case 'Block':
            
            break;
        case 'Image':
            break;
        case 'Text':
            break;
    }
});