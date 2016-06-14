<?php
  include('db/development/database.php');
  $db = new DBLite();
  $curDate = date('Y-m-d H:i:s');
  $query = "INSERT INTO Roles (role, created_at, updated_at)
            VALUES ('user', '$curDate', '$curDate')";
  $statement = $db->prepare($query);
  $statement->execute();
  echo $db->lastErrorMsg();
?>
