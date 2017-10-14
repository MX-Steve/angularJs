<?php 
	header("Content-Type:application/json;charset=utf-8;");
	#1、获取请求提交的数据
	@$uname=$_REQUEST['uname'] or die('{"code":-1,"msg":"用户名不能为空"}');
	#2、连接到数据库
	require('init.php');
	#3、执行数据库操作
	$sql="SELECT * FROM dayu_user WHERE uname='$uname'";
	$result=mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	if($row == null){
		echo '{"code":1,"msg":"可以注册"}';
	}else{
		echo '{"code":-2,"msg":"用户名已经存在"}';
	}
?>