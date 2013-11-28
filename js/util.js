(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);

function scrollBarIsVisible()
{
    if($("#content").height() > $(window).height())
    {
        return true;
    }
    else return false;
}

function createNewWindow(options)
{
    $('.window').remove();
    $('body').append(KBA.panel)
    var win = $('.window'); 
    if(options.size)
        win.addClass(options.size);
    else
        win.addClass('medium');
    if(options.height)
    {
        $('.window-panel').css({
            height: options.height
        });
    }
        
    if(options.title)
    {
        $('.window-title').text(options.title)
    }
    else
    {
        $('.window-title').text('');
    }
    $('.window-panel', win).html(options.html);
    
    win.css({
        left: ($('body').innerWidth() - win.width())/2,
        top: ($(window).height() - win.height())/2
    });
    
    if(options.callback && typeof (options.callback) == 'function')
    {
        options.callback.call();
    }
    $('.window').fadeIn(150, function(){
        
    });
}

function closeAllWindows()
{
    $('.window').remove();
}

function validateEmail(mail)   
{  
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
    {  
        return true;  
    }
    else
    {
        return false;
    }      
}

function notice(text)
{
    $().toastmessage('showToast', {
        type : 'notice',
        sticky : true,
        position : 'middle-center',
        text : text,
        close : function(){
            $('.toast-container').remove();
        }
    });
}

function warning(text)
{
    $().toastmessage('showToast', {
        type : 'warning',
        sticky : true,
        position : 'middle-center',
        text : text,
        close : function(){
            $('.toast-container').remove();
        }
    });
}

function error(text)
{
    $().toastmessage('showToast', {
        type : 'error',
        sticky : true,
        position : 'middle-center',
        text : text,
        close : function(){
            $('.toast-container').remove();
        }
    });
}

function success(text)
{
    $().toastmessage('showToast', {
        type : 'success',
        sticky : true,
        position : 'middle-center',
        text : text,
        close : function(){
            $('.toast-container').remove();
        }
    });
}

function calculate_time_zone() {
	var rightNow = new Date();
	var jan1 = new Date(rightNow.getFullYear(), 0, 1, 0, 0, 0, 0);  // jan 1st
	var june1 = new Date(rightNow.getFullYear(), 6, 1, 0, 0, 0, 0); // june 1st
	var temp = jan1.toGMTString();
	var jan2 = new Date(temp.substring(0, temp.lastIndexOf(" ")-1));
	temp = june1.toGMTString();
	var june2 = new Date(temp.substring(0, temp.lastIndexOf(" ")-1));
	var std_time_offset = (jan1 - jan2) / (1000 * 60 * 60);
	var daylight_time_offset = (june1 - june2) / (1000 * 60 * 60);
	var dst;
	if (std_time_offset == daylight_time_offset) {
		dst = "0"; // daylight savings time is NOT observed
	} else {
		// positive is southern, negative is northern hemisphere
		var hemisphere = std_time_offset - daylight_time_offset;
		if (hemisphere >= 0)
			std_time_offset = daylight_time_offset;
		dst = "1"; // daylight savings time is observed
	}
	var i;
	// check just to avoid error messages
	if (document.getElementById('timezone')) {
		for (i = 0; i < document.getElementById('timezone').options.length; i++) {
			if (document.getElementById('timezone').options[i].value == convert(std_time_offset)+","+dst) {
				document.getElementById('timezone').selectedIndex = i;
				break;
			}
		}
	}
}

function convert(value) {
	var hours = parseInt(value);
   	value -= parseInt(value);
	value *= 60;
	var mins = parseInt(value);
   	value -= parseInt(value);
	value *= 60;
	var secs = parseInt(value);
	var display_hours = hours;
	// handle GMT case (00:00)
	if (hours == 0) {
		display_hours = "00";
	} else if (hours > 0) {
		// add a plus sign and perhaps an extra 0
		display_hours = (hours < 10) ? "+0"+hours : "+"+hours;
	} else {
		// add an extra 0 if needed 
		display_hours = (hours > -10) ? "-0"+Math.abs(hours) : hours;
	}
	
	mins = (mins < 10) ? "0"+mins : mins;
	return display_hours+":"+mins;
}

function remove_style(all) {
  var i = all.length;
  var j, is_hidden;

  // Presentational attributes.
  var attr = [
    'align',
    'background',
    'bgcolor',
    'border',
    'cellpadding',
    'cellspacing',
    'color',
    'face',
    'height',
    'hspace',
    'marginheight',
    'marginwidth',
    'noshade',
    'nowrap',
    'valign',
    'vspace',
    'width',
    'vlink',
    'alink',
    'text',
    'link',
    'frame',
    'frameborder',
    'clear',
    'scrolling',
    'style'
  ];

  var attr_len = attr.length;

  while (i--) {
    is_hidden = (all[i].style.display === 'none');

    j = attr_len;

    while (j--) {
      all[i].removeAttribute(attr[j]);
    }

    // Re-hide display:none elements,
    // so they can be toggled via JS.
    if (is_hidden) {
      all[i].style.display = 'none';
      is_hidden = false;
    }
  }
}