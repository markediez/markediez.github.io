<?php
  include('db/development/database.php');
  $db = new DBLite();
  $db->initialStart();
  echo $db->lastErrorMsg();
?>
