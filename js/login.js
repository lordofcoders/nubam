$(document).ready(function(){
    $(document).on('click', '#login-button', function(){
        var login = {
            userName : $('#user-name').val(),
            password : $('#password').val()
        }
        
        if(!(login.userName == '' || login.userName == 'Kullanici adinizi yaziniz..' || login.password == '' || login.password == 'Parolanizi yaziniz..'))
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