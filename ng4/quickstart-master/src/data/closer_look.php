<?php
header("Content-Type:application/json;charset=utf-8");
$conn=mysqli_connect("127.0.0.1","root","","dayu",3306);
mysqli_query($conn,"SET NAMES UTF8");
$num=$_REQUEST["num"];
$sql="SELECT c.title,c.time,c.pre,c.next,p.url,p.words,p.p FROM closer_look c, ";
$sql.= "  closer_look_pic p  WHERE c.lid=p.pid AND c.lid=$num";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);