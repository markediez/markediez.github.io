<!DOCTYPE html>
<html>
  <head>
    <title>Time Keeper</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="vendor/bootstrap-3.3.6-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="vendor/font-awesome-4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="vendor/jquery/jquery.js"></script>
    <script type="text/javascript" src="behaviour.js"></script>
    <script type="text/javascript" src="script.js"></script>
    <?php
      include('db/development/database.php');
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
      </div>
    </div>
  </body>
</html>
