//创建模块
var app = angular.module('myApp', ['ng']);

app.service('$Plus',function(){
    this.plus = function(num1,num2){
        return parseFloat(num1)+parseFloat(num2);
    }
});
app.service('$Print',['$interval',function($interval){
    var t = null;
    this.start = function(){
        t = $interval(function(){
            console.log('hello');
        },500);
    };
    this.stop = function(){
        $interval.cancel(t);
    }
}]);

//创建一个控制器
app.controller('myCtrl', ['$scope','$Plus','$Print',function ($scope,$Plus,$Print) {
    $scope.plus = function(){
        $scope.result = $Plus.plus($scope.num1,$scope.num2);
    };
    $scope.start = function(){
        $Print.start();
    };
    $scope.stop = function(){
        $Print.stop();
    }
}]);