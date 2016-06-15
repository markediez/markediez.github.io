<?php
  include('../development/database.php');
  $uid = $_REQUEST['user_id'];

  $title = $_REQUEST['title'];
  $currDateTime = date('Y-m-d H:i:s');

  $db = new DBLite();

  $statement = $db->prepare("INSERT INTO Jobs (user_id, title, created_at, updated_at)
            VALUES (:uid, :title, :start_time, :end_time)");

  $statement->bindParam(':uid', $uid, SQLITE3_INTEGER);
  $statement->bindParam(':title', $title, SQLITE3_TEXT);
  $statement->bindParam(':start_time', $currDateTime);
  $statement->bindParam(':end_time', $currDateTime);

  if($statement === false) {
    echo "Failure";
  } else {
    if ($statement->execute() !== false) {
      echo "true";
    } else {
      echo $db->lastErrorMsg();
    }
  }
?>
