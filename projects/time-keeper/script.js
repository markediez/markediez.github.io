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
    var inputs = $(formID + ' .tooltips input');
    var params = inputs[0].name + "=" + inputs[0].value;
    for(var i = 1; i < $(formID + ' .tooltips input').length; i++) {
      if(inputs[i].name != '') {
        params += "&" + inputs[i].name + "=" + inputs[i].value;
      }
    }
    console.log(params);
    // Run AJAX
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        switch(formID) {
          case '#login-form':
            alert("login-form");
            break;
          case '#register-form':
            if(xmlhttp.responseText.indexOf('username') !== -1) {
              $(formID + ' #username').addClass('form-invalid');
              $(formID + ' #username').focus();
              showToolTip($(formID + ' #username'), "Username is already in use!", 'bottom');
            } else if (xmlhttp.responseText.indexOf('email') !== false) {
              $(formID + ' #email').addClass('form-invalid');
              $(formID + ' #email').focus();
              showToolTip($(formID + ' #email'), "Email address is already in use!", 'bottom');
            }
            break;
          default:
            alert(xmlhttp.responseText);
        }
      }
    };

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(params);
  }
}
