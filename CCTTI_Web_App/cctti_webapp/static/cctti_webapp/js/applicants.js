$(document).ready(function() {
  let applicants_datatable = $('#table_applicants').DataTable({
      responsive: true,
      "order": [ 5, "desc" ],
  });

  $('#course_filter').on('change', function () {
        applicants_datatable.columns(4).search( this.value ).draw();
    } );
});

//
// $("#verify-form").onclick = (event) => {
//     event.preventDefault();
//     let input = document.getElementById("lrn").value;
//     console.log(input)
// };
