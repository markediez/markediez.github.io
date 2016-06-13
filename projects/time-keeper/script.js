/*
 * AJAX Scripts
 */

function addJob() {
  var job_name = $('#new-job').val();

  if(job_name != '') {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log("in");
          $('.table-choice tr:last').before('<tr class="clickable-row"><td>' + job_name + '</td><td></td></tr>');
          $('.clickable-row').click(function() {
            // Remove previous active
            $('.clickable-row.active').removeClass("active");
            $(this).addClass("active");
          });
          $('#new-job').val('');
          alert(xmlhttp.responseText);
      }
    };

    xmlhttp.open("GET", "http://localhost:8888/db/ajax/add-job.php?user_id=1&title=" + job_name, true);
    xmlhttp.send();
  }
}
