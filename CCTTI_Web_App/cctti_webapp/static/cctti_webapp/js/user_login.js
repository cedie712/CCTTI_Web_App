document.getElementById('login_btn').addEventListener('click', (event) => {
    event.preventDefault();
   function fade_alert(message) {
       document.getElementById('signin-alert').innerHTML = message;
       $("#signin-alert").fadeIn();
        window.setTimeout(() => {
                $("#signin-alert").fadeOut();
            },
            2500);
   }

   function fade_username_exclamation() {
       $("#username_exclamation").fadeIn();
        window.setTimeout(() => {
                $("#username_exclamation").fadeOut();
            },
            2500);
   }

   function fade_password_exclamation() {
       $("#password_exclamation").fadeIn();
        window.setTimeout(() => {
                $("#password_exclamation").fadeOut();
            },
            2500);
   }

   let username = document.getElementById('username');
   let password = document.getElementById('password');

   if (username.value === '' || password.value === '') {
       fade_alert('Complete the fields');

       if (username.value === '') {
           fade_username_exclamation();
       }

       if (password.value === '') {
           fade_password_exclamation();
       }

   }
   else {
    $.ajax({
            type: 'POST',
            url: '/user_login/',
        data: {
            // form 1 data
            username: username.value,
            password: password.value,
            'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()

        },
        dataType: 'json',
            success: function (data) {
            if (data.message === 'ok') {
                window.location = '/main/';
            }
            else {
                fade_alert('Incorrect username or password');
                username.value = '';
                password.value = '';
            }
        }
    });
   }

});