function display_warning_manpower() {
              $("#alert_manpower").fadeIn();
          window.setTimeout(() => {
                $("#alert_manpower").fadeOut();
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

    if (last_name === '' || first_name === '' || house_street === '' || barangay === '' || district === '' || province === '' || city_municipality === ''
        || email_fb === '' || contact === '' || nationality === '') {
            if (last_name === '') {
                $("#last_name_exclamation").fadeIn();
                $("#last_name_exclamation").fadeOut();
            }

            if (first_name === '') {
               $("#first_name_exclamation").fadeIn();
               $("#first_name_exclamation").fadeOut();
            }

            if (house_street === '') {
               $("#house_street_exclamation").fadeIn();
               $("#house_street_exclamation").fadeOut();
            }

            if (barangay === '') {
               $("#barangay_exclamation").fadeIn();
               $("#barangay_exclamation").fadeOut();
            }

            if (district === '') {
               $("#district_exclamation").fadeIn();
               $("#district_exclamation").fadeOut();
            }

            if (province === '') {
               $("#province_exclamation").fadeIn();
               $("#province_exclamation").fadeOut();
            }

            if (city_municipality === '') {
               $("#city_municipality_exclamation").fadeIn();
               $("#city_municipality_exclamation").fadeOut();
            }

            if (email_fb === '') {
               $("#email_fb_exclamation").fadeIn();
               $("#email_fb_exclamation").fadeOut();
            }
            if (contact === '') {
               $("#contact_exclamation").fadeIn();
               $("#contact_exclamation").fadeOut();
            }

            if (nationality === '') {
               $("#nationality_exclamation").fadeIn();
               $("#nationality_exclamation").fadeOut();
            }

            display_warning_manpower();
            return false;
    }

    return true;

}



if (window.innerWidth > 700) {
    $('.carousel-control-prev').hide();

    $(".carousel-control-next").click(function(){

        if (validate_manpower_form()) {
          $(".carousel").carousel("next");
        }
    });

    $(".carousel-control-prev").click(function(){
      $(".carousel").carousel("prev");
    });


    $('.carousel').carousel({
      wrap: false
    }).on('slid.bs.carousel', function () {
        curSlide = $('.active');
      if(curSlide.is( ':first-child' )) {
         $('.carousel-control-prev').hide();
         return;
      } else {
         $('.carousel-control-prev').show();
      }
      if (curSlide.is( ':last-child' )) {
         $('.carousel-control-next').hide();
         return;
      } else {
         $('.carousel-control-next').show();
      }
    });
}
else {

    $('.button-prev').hide();

    $(".button-next").click(function(){
      $(".carousel").carousel("next");
    });

    $(".button-prev").click(function(){
      $(".carousel").carousel("prev");
    });


    $('.carousel').carousel({
      wrap: false
    }).on('slid.bs.carousel', function () {
        curSlide = $('.active');
      if(curSlide.is( ':first-child' )) {
         $('.button-prev').hide();
         return;
      } else {
         $('.button-prev').show();
      }
      if (curSlide.is( ':last-child' )) {
         $('.button-next').hide();
         return;
      } else {
         $('.button-next').show();
      }
    });
}


// populate dropdown city/province

window.onload = function() {

 var city_province = new City();

 city_province.showProvinces('#province');


 city_province.showCities('#city_municipality');

 city_province.showProvinces('#province_bdate');


 city_province.showCities('#city_bdate');




};
