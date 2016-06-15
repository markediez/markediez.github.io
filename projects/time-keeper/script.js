/*
 * AJAX Scripts
 */

function addJob() {
  var job_name = $('#job-input').val();

  if(job_name != '') {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        if(xmlhttp.responseText.indexOf('true') !== -1) {
          $('.table-choice tr:last').before('<tr class="clickable-row"><td>' + job_name + '</td><td></td></tr>');
          $('.clickable-row').click(function() {
            // Remove previous active
            $('.clickable-row.active').removeClass("active");
            $(this).addClass("active");
          });
          $('#job-input').val('');
        } else {
          $('#job-input').addClass('form-invalid');
          $('#job-input').focus();
          showToolTip('#job-input', 'This job already exists!', 'top');
        }
      }
    };

    // TODO: Use session ID as user_id, only send in title?
    xmlhttp.open("GET", "http://localhost:8888/db/ajax/add-job.php?user_id=1&title=" + job_name, true);
    xmlhttp.send();
  }
}

function postFormSubmit(formID, elements, url) {
  if(isValid(formID)) {
    // Get params
    var inputs = $(elements);
    var params = inputs[0].name + "=" + inputs[0].value;
    for(var i = 1; i < $(elements).length; i++) {
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
            if(xmlhttp.responseText.indexOf('false') !== -1) {
              alert("xmlhttp.responseText");
              // showToolTip(formID);
            } else { // Logged In
              $(formID).append('<input type="hidden" name="user_id" value="' + xmlhttp.responseText + '">');
              $(formID).find(':submit').click();

            }
            break;
          case '#register-form':
            if(xmlhttp.responseText.indexOf('username') !== -1) {
              $(formID + ' #username').addClass('form-invalid');
              $(formID + ' #username').focus();
              showToolTip($(formID + ' #username'), "This username is already in use!", 'bottom');
            } else if (xmlhttp.responseText.indexOf('email') !== -1) {
              $(formID + ' #email').addClass('form-invalid');
              $(formID + ' #email').focus();
              showToolTip($(formID + ' #email'), "This email address is already in use!", 'bottom');
            } else {
              window.location.href = 'index.php';
            }
            break;
          default:
            alert(xmlhttp.responseText);
        }
      } // end if
    }; // end xmlhttp

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(params);
  }
}
