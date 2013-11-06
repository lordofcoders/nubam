//    openNewWindow({
//       width: 500,
//       height: 500,
//       headerHeight: 75,
//       footerHeight: 50,
//       closable: true,
//       title: 'test window',
//       content: 'content content content content content content content content content content'
//    });
var tz = jstz.determine();
var timezone = tz.name();
$(document).ready(function(){
    
    $.support.placeholder = false;
    test = document.createElement('input');
    if('placeholder' in test) jQuery.support.placeholder = true;
    
    if(!$.support.placeholder) 
    { 
        var active = document.activeElement;
        $(':text').focus(function () {
                if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
                        $(this).val('').removeClass('hasPlaceholder');
                }
        }).blur(function () {
                if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
                        $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
                }
        });
        $(':text').blur();
        $(active).focus();
        $('form').submit(function () {
                $(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
        });
    }
    
    setTimeout(function(){$(window).trigger('resize');}, 0);
    
});

$(document).on('click', '.close-window', function(){
    $(this).parents('.window').fadeOut('fast', function(){
        $(this).remove();
    })
});

$(window).load(function(){
    
    $(window).trigger('resize');
});

$(window).resize(function(){
    KBA.windowWidth = $(window).width();
    KBA.windowHeight = $(window).height();
    KBA.docHeight = $(document).height();
    if(KBA.windowWidth < 480)
    {
        KBA.device = 'phone';
    }        
    else if(KBA.windowWidth < 768)
    {
        KBA.device = 'tablet';
    }
    else
    {
        KBA.device = 'pc';
    }
    
    if($('.window').length > 0)
    {
        $('.window').each(function(){
            $(this).css({
                left: (KBA.windowWidth - $(this).width())/2 ,
                top: (KBA.windowHeight - $(this).height())/2
             });
        });
    }
});