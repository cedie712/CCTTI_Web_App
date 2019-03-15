function drop_application(applicant_id) {
    $.ajax({
            type: 'POST',
            url: '/delete_application/',
        data: {
            // form 1 data
            applicant_id,
            'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()

        },
        dataType: 'json',
            success: function (data) {
            if (data.message === 'ok') {
                window.location = '/applicants/';
            }
        }
    });
}