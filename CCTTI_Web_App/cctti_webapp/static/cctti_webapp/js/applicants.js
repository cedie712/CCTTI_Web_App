$(document).ready(function() {
  let applicants_datatable = $('#table_applicants').DataTable({
      responsive: true,
      "order": [ 1, "desc" ],
  });

  $('#course_filter').on('change', function () {
        applicants_datatable.columns(4).search( this.value ).draw();
    } );
});


