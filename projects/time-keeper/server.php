<?php
function addHeaders($title) {
  echo "<title>$title</title>";
  echo '<meta charset="utf-8">';
  echo '<link rel="stylesheet" href="http://' . $_SERVER['HTTP_HOST'] . '/vendor/bootstrap-3.3.6-dist/css/bootstrap.min.css">';
  echo '<link rel="stylesheet" href="http://' . $_SERVER['HTTP_HOST'] . '/vendor/font-awesome-4.6.3/css/font-awesome.min.css">';
  echo '<link rel="stylesheet" href="http://' . $_SERVER['HTTP_HOST'] . '/style.css">';
  echo '<script type="text/javascript" src="http://' . $_SERVER['HTTP_HOST'] . '/vendor/jquery/jquery.js"></script>';
  echo '<script type="text/javascript" src="http://' . $_SERVER['HTTP_HOST'] . '/behaviour.js"></script>';
  echo '<script type="text/javascript" src="http://' . $_SERVER['HTTP_HOST'] . '/script.js"></script>';
}

?>