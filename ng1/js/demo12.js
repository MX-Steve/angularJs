/**
 * Created by bjwsl-001 on 2017/8/28.
 */
//创建模块
var app = angular.module('myApp', ['ng']);


var ctrlFunc = function ($scope,$http) {
  //指定一个测试语句
  console.log('in ctrl func');
  $scope.count = 0;

  $http.get('data/test.json')
  .success(function(data){
      console.log(data);
    })

}

//给需要依赖的服务做一个标记
ctrlFunc.$inject = ["$scope","$http"];

//创建一个控制器
app.controller(
  'myCtrl',
  ctrlFunc
);
