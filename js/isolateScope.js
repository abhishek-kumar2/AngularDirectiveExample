/**
 * Created by abhishekkumar on 07/01/16.
 */
var app = angular.module("isoScopeApp", []);

app.controller("isoScopeCtrl", function($scope){
    $scope.logWork = function(myWork){
        alert(myWork + " work done...");
    }
});

app.directive("isoScopeDirective", function(){
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<div><input type="text" ng-model="myWork"> {{myWork}}'+
        '<button ng-click="done({myWork:myWork})">Finish my work</button></div>'
    }
});