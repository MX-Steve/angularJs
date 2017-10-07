<?php
	header("Content-Type:application/json;charset=utf-8");
	$name = $_REQUEST['name'];
	$age = $_REQUEST['age'];
	$stuArray = [];
	$stuArray[]=[
  		'name'=>$name,
  		'age'=>$age
  	];
	$stuArray[]=[
		'name'=>'Michael1',
		'age'=>20
	];
	$stuArray[]=[
  		'name'=>'Michael2',
  		'age'=>23
  	];
  	$stuArray[]=[
    		'name'=>'Michael3',
    		'age'=>25
    	];
    	$stuArray[]=[
      		'name'=>'Michael4',
      		'age'=>26
      	];
	echo json_encode($stuArray);
?>