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

function openNewWindow(options)
{
    if(!options)
    {
        options = {
            width : 380,
            height: 380,
            headerHeight: 40,
            footerHeight: 40,
            closable: true,
            draggable: false,
            scrollable: false,
            title: '',
            content: ''
        }
    }
    else
    {
        if(!options.title)
            options.title = '';
        if(!options.content)
            options.content = '';
        if(!options.width)
            options.width = 380;
        if(!options.height)
            options.height = 380;
        if(!options.headerHeight)
            options.headerHeight = 40;
        if(!options.footerHeight)
            options.footerHeight = 40;
        if(!options.closable)
            options.closable = true;
        if(!options.draggable)
            options.draggable = false;
        if(!options.scrollable)
            options.scrollable = false;
    }
    
    var html = '';
    
    html += '<div class="window" style="display: none;">';
    html += '<div class="window-header">';
    html += '<div class="mini-menu">';
    html += (options.title ? '<div class="window-title">' + options.title + '</div>' : '');
    html += (options.closable ? '<a class="close-window icon-close trans-all"></a>' : '');
    html += '</div>';
    html += '</div>';
    html += '<div class="outer" style="height:' + options.height + 'px;">';
    html += '<div class="inner" style="height:' + options.height + 'px;width:' + (options.width - 48) + ';">';
    html += options.content;
    html += '</div>';
    html += '</div>';
    html += '<div class="footer"></div>';
    html += '</div>';
    
    var win = $(html).appendTo('#wrapper');
    
    var left = ($(window).width() - $(win).width())/2 
    var top = ($(window).height() - $(win).height())/2 
    
    win.css({
       left: left,
       top: top
    });
    
    win.fadeIn('fast');
    
    if(options.scrollable)
        $('.outer').jScrollPane();
    if(options.draggable)
    {
        $('.window').draggable({
            containment: 'parent',
            handle: '.mini-menu',
            start : function(){
                $('.mini-menu', $(this)).css({
                    background: '#f0f0f0'
                });
            },
            stop : function(){
                $('.mini-menu', $(this)).css({
                    background: '#d5d5d5'
                });
            }
        });
    }
    
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

function updateColumn(data)
{
    for(var i=data.y+1; i<KBA.boxes[data.x].length; i++)
    {
        KBA.boxes[data.x][i].top += data.dif;
        $('.biz-mini-box[x=' + data.x + '][y=' + i + ']').css({
            top : '+=' + data.dif + 'px'
        });
    }
}

function getMore()
{
    
//    $.post('post.php', {num : 15}, function(data){
//        $('#wrapper').append(data);
//        
//        $('#wrapper').imagesLoaded(function(){
//            layTheShitOutMothaFucka();
//        });
//        
//    }, 'html');
}

function getShortestColumnHeight()
{
    var height = getColumnHeight(KBA.boxes[0]);
    for(var i=1; i< KBA.boxes.length; i++)
    {
        var cHeight = getColumnHeight(KBA.boxes[i]);
        if(cHeight < height)
        {
            height = cHeight;
        }
    }
    
    return height;
}

function getLongestColumnHeight()
{
    var height = getColumnHeight(KBA.boxes[0]);
    for(var i=1; i< KBA.boxes.length; i++)
    {
        var cHeight = getColumnHeight(KBA.boxes[i]);
        if(cHeight > height)
        {
            height = cHeight;
        }
    }
    
    return height;
}

function getColumnHeight(column)
{
    var height = column.length > 1 ? column[column.length - 1].top : column[0].top;
    
    return height;
}

function getAvailableSpot(boxes)
{
    var height = getColumnHeight(boxes[0]);
    var result = {
                x : 0,
                y : boxes[0].length - 1,
                height: height
              };
    for(var i=1; i< boxes.length; i++)
    {
        var cHeight = getColumnHeight(boxes[i]);
        if(cHeight < height)
        {
            height = cHeight;
            result = {
                x : i,
                y : boxes[i].length - 1,
                height: height
              };
        }
    }
    
    return result;
}

function appendBox(boxes, pos, bHeight)
{
    if(typeof(boxes[pos.x]) == 'undefined')
    {
        boxes[pos.x] = [];
    }
    
    boxes[pos.x][pos.y + 1] = {
        top : pos.height + bHeight + 14,
        left : pos.x * 250
    };
    
    return boxes[pos.x][pos.y];
}

function layTheShitOutMothaFucka()
{
    var contentWidth = ($(window).width() + (scrollBarIsVisible() ? 17 : 0)) - 500;
    var cols = Math.floor(contentWidth / 250);
    if(cols > 5)
        cols = 5;
    $('#content').width(cols * 250);
        
    
    var i = 0;
    for(i=0; i<cols; i++)
    {
        if(typeof(KBA.boxes[i]) == 'undefined')
        {
            KBA.boxes[i] = [];
            KBA.boxes[i][0] = { top: 0, left : (i * 250) };
        }
        
    }
    
    if(KBA.initialLength < cols)
    {
        for(i=0; i<Math.floor($('.biz-mini-box').length); i++)
        {
            j = i % KBA.initialLength;
            var pos = getAvailableSpot(KBA.boxes);
            var bHeight = $('.biz-mini-box[x="' + j + '"][y="' + (KBA.boxes[j].length-2) + '"]').height();
            var p = appendBox(KBA.boxes, pos, bHeight);
            $('.biz-mini-box[x="' + j + '"][y="' + (KBA.boxes[j].length-2) + '"]').css({
                top : p.top,
                left: p.left
            }).attr('x', pos.x).attr('y', pos.y).attr('initHeight', bHeight);
            
            KBA.boxes[j].splice(-1,1);
        }
    }
    
    var remaining = [];
    i = 0;
    for(var j=KBA.initialLength-1; j>=cols; j--)
    {
        remaining[i] = j;
        
        KBA.boxes.splice(-1,1);
        
        i++;
    }
    
    for(var i=0; i<remaining.length; i++)
    {
        $('.biz-mini-box[x="' + remaining[i] + '"]').each(function(){
            var pos = getAvailableSpot(KBA.boxes);
            var bHeight = $(this).height();
            var p = appendBox(KBA.boxes, pos, bHeight);
            $(this).css({
                top : p.top,
                left: p.left
            }).attr('x', pos.x).attr('y', pos.y).attr('initHeight', bHeight);
        });
    }
    
    for(i = 0; i < $('.biz-mini-box').length; i++)
    {
        if(i >= KBA.count)
        {
            var pos = getAvailableSpot(KBA.boxes);
            var bHeight = $($('.biz-mini-box')[i]).height();
            var p = appendBox(KBA.boxes, pos, bHeight);
            $($('.biz-mini-box')[i]).css({
                top : p.top,
                left: p.left
            }).attr('x', pos.x).attr('y', pos.y).attr('initHeight', bHeight).fadeIn();
            
            KBA.count++;
        }
    }
    KBA.initialLength = cols;
    
    $('#wrapper').height($(document).height());
}