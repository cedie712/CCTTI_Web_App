function display_warning_manpower() {
              $("#alert_manpower").fadeIn();
          window.setTimeout(() => {
                $("#alert_manpower").fadeOut();
              },
              2500);
}

function display_warning_personal_info() {
              $("#alert_personal_info").fadeIn();
          window.setTimeout(() => {
                $("#alert_personal_info").fadeOut();
              },
              2500);
}

function display_warning_final_form() {
              $("#alert_final_form").fadeIn();
          window.setTimeout(() => {
                $("#alert_final_form").fadeOut();
              },
              2500);
}

function validate_manpower_form() {
    let last_name = document.getElementById("last_name").value;
    let first_name = document.getElementById("first_name").value;
    let house_street = document.getElementById("house_num_street").value;
    let barangay = document.getElementById("barangay").value;
    let district = document.getElementById("district").value;
    let province = document.getElementById("province").value;
    let city_municipality = document.getElementById("city_municipality").value;
    let email_fb = document.getElementById("email_fb").value;
    let contact = document.getElementById("contact_no").value;
    let nationality = document.getElementById("nationality").value;

    let input_list = [last_name, first_name, house_street, barangay, district,
                        province, city_municipality, email_fb, contact, nationality];

    let check_empty = input_list.filter((value, index, array) => {
        if (value === '') {
            return true;
        }
    });


    if (check_empty.length !== 0) {

            if (last_name === '') {
                let exclamation = $("#last_name_exclamation");
                exclamation.fadeIn();
                exclamation.fadeOut();
            }

            if (first_name === '') {
                let exclamation = $("#first_name_exclamation");
                exclamation.fadeIn();
                exclamation.fadeOut();
            }

            if (house_street === '') {
                let exclamation = $("#house_street_exclamation");
                exclamation.fadeIn();
                exclamation.fadeOut();
            }

            if (barangay === '') {
               let exclamation = $("#barangay_exclamation");
               exclamation.fadeIn();
               exclamation.fadeOut();
            }

            if (district === '') {
               let exclamation = $("#district_exclamation");
               exclamation.fadeIn();
               exclamation.fadeOut();
            }

            if (province === '') {
               let exclamation = $("#province_exclamation");
               exclamation.fadeIn();
               exclamation.fadeOut();
            }

            if (city_municipality === '') {
               let exclamation = $("#city_municipality_exclamation");
               exclamation.fadeIn();
               exclamation.fadeOut();
            }

            if (email_fb === '') {
               let exclamation = $("#email_fb_exclamation");
               exclamation.fadeIn();
               exclamation.fadeOut();
            }
            if (contact === '') {
               let exclamation = $("#contact_exclamation");
               exclamation.fadeIn();
               exclamation.fadeOut();
            }

            if (nationality === '') {
               let exclamation = $("#nationality_exclamation");
               exclamation.fadeIn();
               exclamation.fadeOut();
            }

            display_warning_manpower();
            return false;
    }

    return true;
}


function validate_personal_information_form() {

    // let sex = document.querySelector('input[name="sex"]:checked').value;
    // let civil_status = document.querySelector('input[name="civil_status"]:checked').value;
    // let employment_status = document.querySelector('input[name="employment_status"]:checked').value;

    let birthdate = document.getElementById("birthdate").value;
    let attainment = document.getElementById("attainment").value;
    let birth_place_province = document.getElementById("province_bdate").value;
    let birth_place_city_municipality = document.getElementById("city_bdate").value;

    let input_list = [birthdate, attainment, birth_place_province, birth_place_city_municipality];

    let check_empty = input_list.filter((value, index, array) => {
        if (value === '') {
            return true;
        }

    });

    let d = new Date();

    if (check_empty.length !== 0) {
            document.getElementById("alert_personal_info").innerHTML = 'Complete the Form Fields';
            if (birthdate === '') {
                let exclamation = $("#birthdate_exclamation");
                exclamation.fadeIn();
                exclamation.fadeOut();
            }

            if (attainment === '') {
                let exclamation = $("#attainment_exclamation");
                exclamation.fadeIn();
                exclamation.fadeOut();
            }

            if (birth_place_province === '') {
                let exclamation = $("#province_bdate_exclamation");
                exclamation.fadeIn();
                exclamation.fadeOut();
            }

            if (birth_place_city_municipality === '') {
               let exclamation = $("#city_bdate_exclamation");
               exclamation.fadeIn();
               exclamation.fadeOut();
            }


            display_warning_personal_info();
            return false;
    }
    else if ((parseInt(d.getFullYear()) - parseInt(birthdate.slice(0, 4))) < 13) {
                let exclamation = $("#birthdate_exclamation");
                exclamation.fadeIn();
                exclamation.fadeOut();
                document.getElementById("alert_personal_info").innerHTML = 'Invalid Birthdate';
                display_warning_personal_info();
                return false;
    }

    return true;
}


function validate_final_form() {
    let client_classification = document.getElementById("client_classification").value;
    let no_radio = document.getElementById("no_ncae");
    let yes_radio = document.getElementById("yes_ncae");
    let where_ncae = document.getElementById("where_ncae").value;
    let when_ncae = document.getElementById("when_ncae").value;
    let course = document.getElementById("course").value;

    let input_list = [client_classification, course];

    if (yes_radio.checked) {
        input_list.push(when_ncae, when_ncae);
    }

    let check_empty = input_list.filter((value, index, array) => {
        if (value === '') {
            return true;
        }

    });

    if (check_empty.length !== 0) {
        if (client_classification === '') {
            let exclamation = $("#client_classification_exclamation");
            exclamation.fadeIn();
            exclamation.fadeOut();
        }

        if (course === '') {
            let exclamation = $("#course_exclamation");
            exclamation.fadeIn();
            exclamation.fadeOut();
        }

        if (yes_radio.checked) {
            if (where_ncae === '') {
                let exclamation = $("#where_exclamation");
                exclamation.fadeIn();
                exclamation.fadeOut();
            }
            if (when_ncae === '') {
                let exclamation = $("#when_exclamation");
                exclamation.fadeIn();
                exclamation.fadeOut();
            }
        }

        display_warning_final_form();
        return false;

    }

    return true

}


if (window.innerWidth > 700) {
    let prev = $('.carousel-control-prev');
    let next = $(".carousel-control-next");


    prev.hide();

    // 0
    let next_0 = $('#next_0');

    next_0.click(function(){
            if (validate_manpower_form()) {
                $(".carousel").carousel("next");
            }
    });

    // 1
    let prev_1 = $('#prev_1');
    let next_1 = $('#next_1');

    next_1.click(function(){
            if (validate_personal_information_form()) {
                $(".carousel").carousel("next");
            }
    });


    prev_1.click(function(){
      $(".carousel").carousel("prev");
    });

    // 2
    let prev_2 = $('#prev_2');

    prev_2.click(function(){
      $(".carousel").carousel("prev");
    });


    $('.carousel').carousel({
      wrap: false
    }).on('slid.bs.carousel', function () {
        let curSlide = $('.active');
      if(curSlide.is( ':first-child' )) {
          prev.hide();
          return;
      } else {
         prev.show();
      }
      if (curSlide.is( ':last-child' )) {
         next.hide();
      } else {
         next.show();
      }
    });
}
else {
    let prev = $('.button-prev');
    let next = $(".button-next");

    prev.hide();
    // 0
    let next_0 = $('#next_0_btn');

    next_0.click(function(e){
        e.preventDefault();
        if (validate_manpower_form()) {
          $(".carousel").carousel("next");
          window.scrollTo(0, 0);
        }
    });

    // 1
    let prev_1 = $('#prev_1_btn');
    let next_1 = $('#next_1_btn');

    next_1.click(function(e){
        e.preventDefault();
        if (validate_personal_information_form()) {
          $(".carousel").carousel("next");
          window.scrollTo(0, 0);
        }
    });

    prev_1.click(function(e){
        e.preventDefault();
        $(".carousel").carousel("prev");
        window.scrollTo(0, 0);
    });

    // 2
    let prev_2 = $('#prev_2_btn');
    let next_2 = $('#next_2_btn');

    prev_2.click(function(e){
        e.preventDefault();
        $(".carousel").carousel("prev");
        window.scrollTo(0, 0);
    });




    $('.carousel').carousel({
      wrap: false
    }).on('slid.bs.carousel', function () {
        let curSlide = $('.active');
      if(curSlide.is( ':first-child' )) {
          prev.hide();
          return;
      } else {
         prev.show();
      }
      if (curSlide.is( ':last-child' )) {
         next.hide();
      } else {
         next.show();
      }
    });
}


// populate dropdown city/province

window.onload = function() {

     let city_province = new City();

     city_province.showProvinces('#province');


     city_province.showCities('#city_municipality');

     city_province.showProvinces('#province_bdate');


     city_province.showCities('#city_bdate');
};


document.getElementById("no_ncae").addEventListener('change', () => {
    $('#when_ncae').prop('disabled', true);
    $('#where_ncae').prop('disabled', true);
});

document.getElementById("yes_ncae").addEventListener('change', () => {
    $('#when_ncae').prop('disabled', false);
    $('#where_ncae').prop('disabled', false);
});

document.getElementById("applicant_registration_form").addEventListener('submit', (event) => {
    event.preventDefault();
});

document.getElementById("submit_btn").addEventListener('click', (event) => {
    event.preventDefault();

    if (validate_final_form()) {

        $("#loading-div").fadeIn();
         $('#submit_btn').prop('disabled', true);
        //FORM DATA
        // form_1
        let first_name = $("#first_name");
        let middle_name = $("#middle_name");
        let last_name = $("#last_name");
        let house_street = $("#house_num_street");
        let barangay = $("#barangay");
        let district = $("#district");
        let province = $("#province");
        let city_municipality = $("#city_municipality");
        let email_fb = $("#email_fb");
        let contact = $("#contact_no");
        let nationality = $("#nationality");

        // form_2
        let sex = document.querySelector('input[name="sex"]:checked');
        let civil_status = document.querySelector('input[name="civil_status"]:checked');
        let employment_status = document.querySelector('input[name="employment_status"]:checked');
        let birthdate = $("#birthdate");
        let attainment = $("#attainment");
        let birthplace_province = $("#province_bdate");
        let birthplace_city_municipality = $("#city_bdate");

        // form_3
        let client_classification = $('#client_classification');
        let taken_ncae = document.querySelector('input[name="has_taken"]:checked');
        let where_ncae = $("#where_ncae");
        let when_ncae = $("#when_ncae");
        let course = $("#course");

        // SUBMIT FORM HERE GET ALL DATA
        // DO SOME AJAX CALL PREPARE THE SERVER
        $.ajax({
            type: 'POST',
            url: '/registration/',
            data: {
                // form 1 data
                'first_name': first_name.val(),
                'middle_name': middle_name.val(),
                'last_name': last_name.val(),
                'house_street': house_street.val(),
                'barangay': barangay.val(),
                'district': district.val(),
                'province': province.val(),
                'city_municipality': city_municipality.val(),
                'email_fb': email_fb.val(),
                'contact': contact.val(),
                'nationality': nationality.val(),

                //form 2 data
                'sex': sex.value,
                'civil_status': civil_status.value,
                'employment_status': employment_status.value,
                'birthdate': birthdate.val(),
                'attainment': attainment.val(),
                'birthplace_province': birthplace_province.val(),
                'birthplace_city_municipality': birthplace_city_municipality.val(),

                //form 3 data
                'client_classification': client_classification.val(),
                'taken_ncae': taken_ncae.value,
                'where_ncae': where_ncae.val(),
                'when_ncae': when_ncae.val(),
                'course': course.val(),
                'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()

            },
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $("#loading-div").fadeOut();
                if (data.message === 'ok') {
                    $("#success-banner").fadeIn().css("display", "grid");
                    document.getElementById("v_code").innerHTML = data.verification_code;
                    window.scrollTo(0, 0);
                }
                else {
                    display_warning_final_form();
                }
            }
        });
    }


});

