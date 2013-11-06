$(document).ready(function(){
    $(document).on('click', '#login-button', function(){
        var login = {
            email : $('#email').val(),
            password : $('#password').val()
        }
        
        if(!(login.email == '' || login.email == 'E-mailinizi yaziniz..' || login.password == '' || login.password == 'Parolanizi yaziniz..'))
        {
            if(validateEmail(login.email))
            {
                $.post(KBA.base + 'ajax/authenticate' , login, function(data){
                    if(data.status)
                    {
                        success(data.message);
                        setTimeout(function(){ window.location.href = document.URL; }, 1000);
                    }
                    else
                    {
                        error(data.message);
                    }
                }, 'json');
            }
            else
            {
                error('Girdiginiz e-maili lutfen kontrol edin.');
            }
        }
        else
        {
             error('Lutfen bos biraktiginiz alanlari doldurun.');
        }
    });
    
    $(document).on('click', '#signup-button', function(){
        window.location.href = KBA.base + "signup";
    });
    
    $(document).on('keyup', '#password', function(e){
        if(e.keyCode == 13)
        {
            $('#login-button').trigger('click');
        }
    });
});