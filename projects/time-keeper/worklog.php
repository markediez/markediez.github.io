<?php
  include("server.php");
  include('db/development/database.php');
  checkSession();
  $db = new DBLite();
?>
<!DOCTYPE html>
<html>
  <head>
    <?php
      addHeaders("Time Keeper");
      $month = "June 2016";
    ?>
  </head>
  <body>
    <div class="container-fluid">

      <div id="header" class="row">
        <div class="col-md-12">
          <h1>Time Keeper</h1>
          <a href="time-keeper.php" class="col-md-1">Work</a>
          <a href="worklog.php" class="col-md-1">Log</a>
          <a href="logout.php" class="col-md-1">Logout</a>
        </div>
      </div>

      <div id="log" class="row">
        <div id="calendar" class="col-md-9">
          <div class="week col-md-12 text-center">
            <div class="month col-md-12"><span><?=$month?></span></div>
          </div>
          <div class="week col-md-12">
            <?php
            $day=array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
            for ($i = 0; $i < 7; $i++) {
              echo '<div class="day-head col-md-1 text-center">';
                echo "<span>$day[$i]</span>";
              echo '</div>';
            }
            ?>
          </div>
          <?php
            for ($i = 1; $i <= 5; $i++) {
              echo '<div class="week col-md-12">';
              for ($j = 1; $j <= 7; $j++) {
                echo '<div class="day col-md-1">';

                echo '</div>';
              }
              echo '</div>';
            }
          ?>
        </div>
      </div>

    </div>
  </body>
</html>
