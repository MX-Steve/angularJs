<?php
header("Content-Type:application/json;charset=utf-8");
$conn=mysqli_connect("127.0.0.1","root","","dayu",3306);
mysqli_query($conn,"SET NAMES UTF8");
@$pno=$_REQUEST["pno"];
@$id=$_REQUEST["id"];
if(!@$pno){
	$pno=1;
}else{
	$pno=intval($pno);
}

if(!@$id){
	$id=1;
}
$pageSize=15;
$output=[
	"recodeCount"=>0,
	"pageCount"=>0,
	"pno"=>$pno,
	"data"=>null,
	"pageSize"=>15];
$start=($output["pno"]-1)*$output["pageSize"];
$count=$output["pageSize"];

if(@$id==1){
	$sql="SELECT count(*) FROM server_item_pic";
}else{
	$sql="SELECT count(*) FROM server_item_pic  WHERE pid2=$id";
}
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
$output["recodeCount"]=$row[0];
$output["pageCount"]=ceil($row[0]/$pageSize);
if(@$id==1){
	$sql="SELECT  t.title,t.position,p.summary,p.url,p.pid"; 
	$sql.=" FROM server_item_top t,server_item_pic p WHERE p.pid3=t.sid";
}else if($id>5){
	$sql="SELECT  t.title,t.position,p.summary,p.url,p.pid";
	$sql.="  FROM server_item_top t,server_item_pic p WHERE t.sid=p.pid4";
	$sql.="  AND p.pid4=$id";
}else{
	$sql="SELECT  t.title,t.position,p.summary,p.url,p.pid";
	$sql.="  FROM server_item_top t,server_item_pic p WHERE t.sid=p.pid2";
	$sql.="  AND p.pid2=$id";
} 

$sql.=" LIMIT $start,$count";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
$output["data"]=$rows;
echo json_encode($output);