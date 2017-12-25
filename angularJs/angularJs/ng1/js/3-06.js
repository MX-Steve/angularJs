//创建模块
var app = angular.module('myApp', ['ng']);

//创建一个服务 factory
app.factory('$show',function(){
    return {
        showWindow:function(){
            alert('推断式依赖注入');
        } 
    }
});


//创建一个控制器
app.controller('myCtrl', function ($scope,$show) {
    $scope.num = 20;
    $scope.clickFunc = function(){
        $show.showWindow();
    }
});