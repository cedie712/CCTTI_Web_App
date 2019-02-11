$(document).ready(function() {
  let verified_students_datatable = $('#table_verified_students').DataTable({
      responsive: true,
      "order": [ 5, "desc" ],
  });

  $('#course_filter').on('change', function () {
        verified_students_datatable.columns(4).search( this.value ).draw();
    } );
});
