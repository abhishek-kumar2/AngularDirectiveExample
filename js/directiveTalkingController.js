/**
 * Created by abhishekkumar on 07/01/16.
 */
var app = angular.module("talkingToCtrlApp", []);

app.controller("talkCtrl", function($scope){
    $scope.doSomething = function(){
        alert("do something...");
    };
    $scope.cantDoAnything = function(){
        alert("cant do anything...");
    };
});

app.directive("enterToCallDoSomething", function(){
   return function(scope, element, attrs){
        element.bind("click", function(){
            //scope.doSomething(); //one way it' also
            scope.$apply(attrs.enterToCallDoSomething);
        })
   }
});