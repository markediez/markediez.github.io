<?php
   ob_start();
   session_start();
?>
<!DOCTYPE html>
<html>
  <head>
    <?php
      include("server.php");
      include('db/development/database.php');
      addHeaders("Time Keeper");
      $db = new DBLite();

      // Move to Login if the passed values are invalid or no session
      if(!isset($_SESSION['valid']) && sizeof($_POST) > 0) {
        setSession($_POST);
      } else if(!isset($_SESSION['valid']) && sizeof($_POST) <= 0){
        header('Location: index.php');
      }
    ?>
    <script type="text/javascript">
      $( document ).ready(function() {
        $('.clickable-row').click(function() {
          // Remove previous active
          $('.clickable-row.active').removeClass("active");
          $(this).addClass("active");
        });

        $('#title-input').keydown(function(event) {
          // Enter Key
          if(event.keyCode==13) {
            $('#start-button').click();
            return false;
          }
        });

        $('#job-input').keydown(function(event) {
          // Enter Key
          if(event.keyCode==13) {
            $('#job-button').click();
            return false;
          }
        });
      });
    </script>
  </head>
  <body>
    <div class="container-fluid">

      <div id="header" class="row">
        <div class="col-md-12">
          <h1>Time Keeper</h1>
          <a href="logout.php">Logout</a>
        </div>
      </div>

      <div id="time-keeper-form" class="row">
        <form class="col-md-4">
          <div class="col-md-12 no-padding">
            <input id="title-input" type="text" class="form-control" name="title" placeholder="Enter Title" required>
          </div>
          <div id="choices" class="col-md-12 form-item">
            <table class="table-choice">
              <?php
                $statement = $db->prepare("SELECT id, title FROM Jobs WHERE user_id = :id");
                $statement->bindValue(':id', $_SESSION['user_id']);
                $result = $statement->execute();
                while($row = $result->fetchArray()) {
                  echo "<tr class=\"clickable-row\">";
                    echo "<td data-job-id=" . $row['id'] .">";
                      echo $row['title'];
                    echo "</td>";
                    echo "<td></td>";
                  echo "</tr>";
                }
              ?>
              <tr>
                <td>
                  <div class="tooltips col-md-12 no-padding">
                    <input id="job-input" type="text" class="form-control" placeholder="Add a new job ..." name="title">
                  </div>
                </td>
                <td><a id="job-button" onclick="addJob()"><i class="fa fa-plus-square-o fa-lg" aria-hidden="true"></i></a></td>
              </tr>
            </table>
          </div>
          <div class="col-md-12 form-item">
            <button id="start-button" class="col-md-6 col-md-offset-3 btn btn-primary">Start</button>
          </div>
        </form>
      </div>
    </div>
  </body>
</html>
