<?php
  include('../development/database.php');
  $db = new DBLite();

  $query = "SELECT username, password FROM Users WHERE username = :username AND password = :password";
  $statement = $db->prepare($query);
  $statement->bindValue(':username', $_REQUEST['username'], SQLITE3_TEXT);
  $statement->bindValue(':password', $_REQUEST['password'], SQLITE3_TEXT);

  if($res = $statement->execute()) {
    if($res->fetchArray() !== false) {
      echo "true";
    } else {
      echo "false";
    }
  } else {
    echo "false";
  }
?>
