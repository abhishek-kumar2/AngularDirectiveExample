/**
 * Created by abhishekkumar on 07/01/16.
 */
var app = angular.module("directiveRestApp", []);

app.directive("directiveRestrictA", function(){
    return {
        restrict: "A",         //restrict example of attribute it's a default restrict
        template: "<br><div>I restricted with Attribute</div>"
    }
});

app.directive("directiveRestrictE", function(){
    return {
        restrict: "E",         //restrict example of element
        template: "<br><div>I restricted with Element</div>"
    }
});

app.directive("directiveRestrictC", function(){
    return {
        restrict: "C",         //restrict example of class
        template: "<br><div>I restricted with Class</div>"
    }
});

app.directive("directiveRestrictM", function(){
    return {
        restrict: "M",         //restrict example of comment
        link: function(){
            alert("I restricted with comment");
        }
    }
});

app.directive("directiveRestrictedAAnotherOne", function(){
    return {
        restrict: "A",
        link: function(){
            alert("Example of if we use two directive with a single element");
        }
    }
})
