<?php
header("Content-Type:application/json");

@$name = $_REQUEST['name'];

$result['tip'] = "Hello ".$name;

echo json_encode($result);
?>