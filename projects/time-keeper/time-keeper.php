<!DOCTYPE html>
<html>
  <head>
    <?php
      include("server.php");
      include('db/development/database.php');
      addHeaders("Time Keeper");
      $db = new DBLite();
    ?>
  </head>
  <body>
    <div class="container-fluid">

      <div id="header" class="row">
        <div class="col-md-12">
          <h1>Time Keeper</h1>
        </div>
      </div>

      <div id="time-keeper-form" class="row">
        <form class="col-md-4">
          <div class="col-md-12 no-padding">
            <input type="text" class="form-control" name="title" placeholder="Enter Title" required>
          </div>
          <div id="choices" class="col-md-12">
            <table class="table-choice">
              <?php
                $statement = $db->prepare("SELECT id, title FROM Jobs"); // TODO: WHERE ID = user_id
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
              <tr class="clickable-row active">
                <td>DSS IT</td>
                <td></td>
              </tr>
              <tr class="clickable-row">
                <td>PTTS</td>
                <td></td>
              </tr>
              <tr class="clickable-row">
                <td>EDS</td>
                <td></td>
              </tr>
              <tr>
                <td><input id="new-job" type="text" class="form-control" placeholder="Add a new job ..."></td>
                <td><a onclick="addJob()"><i class="fa fa-plus-square-o fa-lg" aria-hidden="true"></i></a></td>
              </tr>
            </table>
          </div>
          <div class="col-md-12">
            <button class="col-md-6 col-md-offset-3 btn btn-primary">Start</button>
          </div>
        </form>

        <?php
          // $statement = $db->prepare("SELECT title FROM Jobs"); // TODO: WHERE ID = user_id
          // echo "Over Here<br>";
          // $result = $statement->execute();
          // echo $db->lastErrorMsg();
          // while($row = $result->fetchArray()) {
          //   print_r($row);
          //   echo $db->lastErrorMsg();
          // }
        ?>
      </div>
    </div>
  </body>
</html>
