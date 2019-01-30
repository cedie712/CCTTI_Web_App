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

    if (check_empty.length !== 0) {

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

    return true;
}



if (window.innerWidth > 700) {
    let prev = $('.carousel-control-prev');
    let next = $(".carousel-control-next");


    prev.hide();

    // 0
    let next_0 = $('#next_0');

    next_0.click(function(){
            // if (validate_manpower_form()) {
                $(".carousel").carousel("next");
            // }
    });

    // 1
    let prev_1 = $('#prev_1');
    let next_1 = $('#next_1');

    next_1.click(function(){
            // if (validate_manpower_form()) {
                $(".carousel").carousel("next");
            // }
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
        // if (validate_manpower_form()) {
        if (1) {
          $(".carousel").carousel("next");
          window.scrollTo(0, 0);
        }
    });

    // 1
    let prev_1 = $('#prev_1_btn');
    let next_1 = $('#next_1_btn');

    next_1.click(function(e){
        e.preventDefault();
        // if (validate_manpower_form()) {
        if (1) {
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
