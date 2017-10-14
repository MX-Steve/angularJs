<?php 
header("Content-Type:application/json;charset=UTF-8");
require("init.php");
@$cid=$_REQUEST["cid"];
$sql="SELECT * FROM dayu_project_list";
if($cid){
$sql.="  WHERE cid=$cid";
}
echo json_encode(sql_execute($sql));