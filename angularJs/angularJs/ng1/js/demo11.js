/**
 * Created by bjwsl-001 on 2017/8/28.
 */
//创建模块
var app = angular.module('myApp', ['ng']);
//创建一个控制器
app.controller(
  'myCtrl',
  function ($scope) {
    //指定一个测试语句
    console.log('in ctrl func');
    $scope.count = 0;
  }
);