<?php
header("Content-Type:application/json;charset=utf-8");
$conn=mysqli_connect("127.0.0.1","root","","dayu",3306);
mysqli_query($conn,"SET NAMES UTF8");
$num=$_REQUEST["num"];
$sql="SELECT d.title,d.introducte,d.measure,d.addr,d.style,d.detailed,c.url";
$sql.="  FROM details d,details_pic c WHERE d.lid=c.lid AND d.lid=$num";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);