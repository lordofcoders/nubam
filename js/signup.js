$(document).ready(function(){
    
    $(document).on('click', '#signup-button', function(){
        $('.signup input[name="dob"]').val($('select[name="month"]').val() + '-' + $('select[name="day"]').val() + '-' + $('select[name="year"]').val())
        var vars = {};
        
        $('.signup input').each(function(){
            vars[$(this).attr('name')] = $(this).val();
        });
        var blank = false;
        for (var property in vars) 
        {
            if (vars.hasOwnProperty(property)) 
            {
                if(vars[property] === '')
                {
                    blank = true;
                }
            }
        }
        
        if(blank)
        {
            error('You have left some fields empty. Please fill them out, then click Signup.');
        }
        else
        {
            vars.timezone = timezone;
            $.post(Uchore.base + 'ajax/signup', vars, function(data){
                if(data.status)
                {
                    success(data.message);
                }
                else
                {
                    error(data.message);
                }
            }, 'json')
        }
    });
    
    $(document).on('click', '#goback-button', function(){
        window.location.href = Uchore.base + "login";
    });
    
});