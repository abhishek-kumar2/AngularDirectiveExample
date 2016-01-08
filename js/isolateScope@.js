/**
 * Created by abhishekkumar on 08/01/16.
 */
var app = angular.module("isoScopeWith@", []);

app.controller("isoScopeWith@Ctrl", function($scope){
    $scope.fromCtrl = "4th way"
});

app.directive("isoScopeWith@Directive1", function(){
    return {
        scope: {},
        template: "<div>{{isoScope}}</div>",
        link: function(scope, element, attrs){
            scope.isoScope = "1 way";
        }
    }
});

app.directive("isoScopeWith@Directive2", function(){
    return {
        scope: {},
        template: "<div>{{isoScope}}</div>",
        link: function(scope, element, attrs){
            scope.isoScope = attrs.aatter;
        }
    }
});

app.directive("isoScopeWith@Directive3", function(){
    return {
        scope: {
            isoscope:"@"
        },
        template: "<div>{{isoscope}}</div>"
    }
});