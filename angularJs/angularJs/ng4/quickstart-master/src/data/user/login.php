<?php 
	header("Content-Type:application/json;charset=utf-8;");
	#1、获取请求提交的数据
	@$uname=$_REQUEST['uname'] or die('{"code":-1,"msg":"用户名不能为空"}');
	@$upwd=$_REQUEST['upwd'] or die('{"code":-2,"msg":"密码不能为空"}');
	#2、连接到数据库
	require('init.php');
	#3、执行数据库操作
	$sql="SELECT * FROM dayu_user WHERE uname='$uname' AND upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	if($row != null){
		echo '{"code":1,"msg":"登录成功"}';
	}else{
		echo '{"code":-3,"msg":"用户名或密码错误"}';
	}
?>