/*
 * AJAX Scripts
 */

function addJob() {
  var job_name = $('#new-job').val();

  if(job_name != '') {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          $('.table-choice tr:last').before('<tr class="clickable-row"><td>' + job_name + '</td><td></td></tr>');
          $('.clickable-row').click(function() {
            // Remove previous active
            $('.clickable-row.active').removeClass("active");
            $(this).addClass("active");
          });
          $('#new-job').val('');
      }
    };

    // TODO: Use session ID as user_id, only send in title?
    xmlhttp.open("GET", "http://localhost:8888/db/ajax/add-job.php?user_id=1&title=" + job_name, true);
    xmlhttp.send();
  }
}

function postFormSubmit(formID, url) {
  if(isValid(formID)) {
    // Get params
    var inputs = $(formID + ' input');
    var params = inputs[0].name + "=" + inputs.val();
    for(var i = 1; i < $(formID + ' input').length; i++) {
      inputs = inputs.next();
      if(inputs[0].name != '') {
        params += "&" + inputs[0].name + "=" + inputs.val();
      }
    }

    // Run AJAX
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
      } else if (xmlhttp.status == 500) {
        // alert(xmlhttp.responseText);
      }
    };

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(params);
  }
}
