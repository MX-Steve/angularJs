<?php
	header("content-type:application/json;charset=utf-8");
	$obj = [
		['name'=>"lihan",'age'=>12],
		['name'=>"lihan1",'age'=>19],
		['name'=>"lihan2",'age'=>17],
		['name'=>"lihan3",'age'=>16]
	];
	echo json_encode($obj);
?>