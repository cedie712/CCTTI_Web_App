
function submit_verification(applicant_id, reference_code) {
        let valid_char = '0123456789';

    let xmm = $("#uli_xmm_" + reference_code).val();
    let rrppp = $("#uli_rrppp_" + reference_code).val();
    let overflow = $("#uli_overflow_" + reference_code).val();


    function check(uli_portion) {
        for (i in uli_portion) {
            if (valid_char.indexOf(uli_portion[i]) === -1) {
                return false;
            }
        }
        return true
    }

    function display_alert(msg) {
        document.getElementById("alert_" + reference_code).
            innerHTML = msg;
        $("#alert-container_" + reference_code).fadeIn();
        window.setTimeout(() => {
                $("#alert-container_" + reference_code).fadeOut();
            },
            2500);
    }

    if (!check(xmm) || !check(rrppp) || !check(overflow)) {
        display_alert("Invalid ULI");
    }
    else if (xmm.length !== 3 || rrppp.length !== 4 || overflow.length !== 3) {
        console.log('fuck');
        display_alert("Invalid ULI");
    }
    else {
        $.ajax({
            type: 'POST',
            url: '/applicants/',
        data: {
            // form 1 data
            applicant_id,
            uli: document.getElementById("basic-addon3_" + reference_code).innerHTML
            + xmm + '-' + rrppp + '-' + overflow,
                'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()

        },
        dataType: 'json',
            success: function (data) {
            console.log(data.message);
            if (data.message === 'bad request') {
                display_alert("Invalid ULI");
            }
            else if (data.message === 'duplicate uli') {
                display_alert("ULI already exists)");
            }
            else {
                $("#verify_modal_" + reference_code).modal('hide');
                window.top.location = '/applicants/';
            }
        }
    });
    }
}



                                                            // let valid_char = '0123456789';
                                                            //
                                                            // let xmm = $("#uli_xmm_{{ i.reference_code }}").val();
                                                            // let rrppp = $("#uli_rrppp_{{ i.reference_code }}").val();
                                                            // let overflow = $("#uli_overflow_{{ i.reference_code }}").val();
                                                            //
                                                            //
                                                            // function check(uli_portion) {
                                                            //     for (i in uli_portion) {
                                                            //         if (valid_char.indexOf(uli_portion[i]) === -1) {
                                                            //             return false;
                                                            //         }
                                                            //     }
                                                            //     return true
                                                            // }
                                                            //
                                                            // function display_alert(msg) {
                                                            //     document.getElementById("alert_{{ i.reference_code }}").
                                                            //         innerHTML = msg;
                                                            //     $("#alert-container_{{ i.reference_code }}").fadeIn();
                                                            //     window.setTimeout(() => {
                                                            //         $("#alert-container_{{ i.reference_code }}").fadeOut();
                                                            //       },
                                                            //       2500);
                                                            // }
                                                            //
                                                            // if (!check(xmm) || !check(rrppp) || !check(overflow)) {
                                                            //     display_alert("Invalid ULI");
                                                            // }
                                                            // else if (xmm.length !== 3 || rrppp.length !== 4 || overflow.length !== 3) {
                                                            //     console.log('fuck');
                                                            //     display_alert("Invalid ULI");
                                                            // }
                                                            // else {
                                                            //     $.ajax({
                                                            //         type: 'POST',
                                                            //         url: {% url 'applicants' %},
                                                            //         data: {
                                                            //             // form 1 data
                                                            //             applicant_id: {{ i.id }},
                                                            //             uli: document.getElementById("basic-addon3_{{ i.reference_code }}").innerHTML
                                                            //                 + xmm + '-' + rrppp + '-' + overflow,
                                                            //             'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
                                                            //
                                                            //         },
                                                            //         dataType: 'json',
                                                            //         success: function (data) {
                                                            //             console.log(data.message);
                                                            //             if (data.message === 'bad request') {
                                                            //                 display_alert("Invalid ULI");
                                                            //             }
                                                            //             else if (data.message === 'duplicate uli') {
                                                            //                 display_alert("ULI already exists)");
                                                            //             }
                                                            //             else {
                                                            //                 $("#verify_modal_{{ i.reference_code }}").modal('hide');
                                                            //                 window.top.location = '/applicants/';
                                                            //             }
                                                            //         }
                                                            //     });
                                                            // }