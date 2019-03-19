Chart.defaults.global.defaultFontColor = "#fff";

function fetch_stats(year) {
    $.ajax({
            type: 'POST',
            url: '/fetch_applicant_stats/',
        data: {
            // form 1 data
            'year': year,
            'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()

        },
        dataType: 'json',
            success: function (data) {
                draw(data);
        }
    });
}




function draw(data) {
    let months = [];
    let applicant_counts = [];
    let verified_applicant_counts = [];

    let month_converter = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sept',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
    };

    for (let i = 0; i < data.applicant_stats.length; i++) {
        for (let key of Object.keys(data.applicant_stats[i])) {
            months.push(month_converter[key]);
            applicant_counts.push(data.applicant_stats[i][key]);
        }
    }

    for (let i = 0; i < data.verified_applicant_stats.length; i++) {
        for (let key of Object.keys(data.applicant_stats[i])) {
            verified_applicant_counts.push(data.verified_applicant_stats[i][key]);
        }
    }


    var ctx = document.getElementById("myChart").getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: '# of applicants',
                data: applicant_counts,
                backgroundColor: [
                    'rgba(170, 0, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(170, 0, 0)',
                ],
                borderWidth: 1
            },
            {
                label: '# of applicants that was verified',
                data: verified_applicant_counts,
                backgroundColor: [
                    'rgba(9, 108, 219, 0.7)',
                ],
                borderColor: [
                    'rgba(9, 108, 219)',
                ],
                borderWidth: 1
            }]
        },
        options: {animateScale : true,

                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    },
                }],
            },
        },
    });
}

let current_date = new Date();
fetch_stats(current_date.getFullYear());


document.getElementById('stats_year').addEventListener('change', () => {
    let year = document.getElementById('stats_year').value;
    fetch_stats(year);
});

