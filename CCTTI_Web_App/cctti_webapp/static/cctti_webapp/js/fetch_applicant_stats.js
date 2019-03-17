
function fetch_stats() {
    $.ajax({
            type: 'GET',
            url: '/fetch_applicant_stats/',
        data: {
            // form 1 data
            'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()

        },
        dataType: 'json',
            success: function (data) {
                console.log(data);
                draw(data, '2019');
        }
    });
}




function draw(data, year) {
    let months = [];
    let applicant_counts = [];

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

    console.log(months);
    console.log(applicant_counts);


    var ctx = document.getElementById("myChart").getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: months,
            datasets: [{
                label: '# of Votes',
                data: applicant_counts,
                backgroundColor: [
                    'rgba(0, 255, 0, 0.32)',
                ],
                borderColor: [
                    'rgba(0, 255, 0,1)',
                ],
                borderWidth: 1
            },
            {
                label: '# of Applicants',
                data: [12, 29, 13, 64, 4, 13, 19, 7, 23, 64, 55, 25],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.32)',
                ],
                borderColor: [
                    'rgba(0, 0, 255,1)',
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
                    }
                }]
            },
        }
    });
}


fetch_stats();
