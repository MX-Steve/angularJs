<?php 
	header("Content-Type:application/json;charset=utf-8;");
	#1、获取请求提交的数据
	@$uname=$_REQUEST['uname'] or die('{"code":-1,"msg":"用户名不能为空"}');
	@$upwd=$_REQUEST['upwd'] or die('{"code":-2,"msg":"密码不能为空"}');
	@$gender=$_REQUEST['gender'];
	@$phone=$_REQUEST['phone'] or die('{"code":-3,"msg":"电话号码不能为空"}');
	@$addr=$_REQUEST['addr'] or die('{"code":-4,"msg":"家庭地址不能为空"}');
	#2、连接到数据库
	require('init.php');
	#3、执行数据库操作
	$sql="insert into dayu_user(uname,upwd,gender,uphone,addr) values('$uname','$upwd',$gender,'$phone','$addr')";
	$result=mysqli_query($conn,$sql);
	if($result === true){
		echo '{"code":1,"msg":"注册成功"}';
	}else{
		echo '{"code":-5,"msg":"注册失败"}';
	}
?>