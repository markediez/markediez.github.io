<?php
include('server.php');
include('db/development/database.php');
$db = new DBLite();
$start_date = new DateTime('first day of this month');
$end_date = new DateTime('last day of this month');
$start_date->setTime(0,0,0);
$end_date->setTime(0,0,0);
$start_date = $start_date->format('Y-m-d H:i:s');
$end_date = $end_date->format('Y-m-d H:i:s');
$query = "SELECT Jobs.title as job_title, WorkLog.title as work_title, WorkLog.start_time, WorkLog.end_time FROM WorkLog INNER JOIN Jobs ON WorkLog.job_id = Jobs.id WHERE Worklog.user_id = :uid AND Worklog.start_time BETWEEN :sd AND :ed ORDER BY WorkLog.start_time ASC";
$statement = $db->prepare($query);
$statement->bindValue(':uid', $_SESSION['user_id']);
$statement->bindValue(':sd', $start_date);
$statement->bindValue(':ed', $end_date);
$res = $statement->execute();

// while($row = $res->fetchArray(SQLITE3_ASSOC)) {
//     var_dump($row);
//     echo "<br><br>";
// }

echo date('D', '2016-06-01');
?>
