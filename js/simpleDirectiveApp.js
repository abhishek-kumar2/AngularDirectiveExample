/**
 * Created by abhishekkumar on 07/01/16.
 */
var app = angular.module("simpApp", []);

app.directive("simpDirective", function(){
    return {
        restrict: "E",
        template: "<div> Simple directive example</div>"
    }
})