/**
 * Created by abhishekkumar on 07/01/16.
 */
var app = angular.module("basicBehaviorApp", []);

app.directive("directiveBasicBehavior", function(){
   return function(scope, element, attrs){
       element.bind("mouseenter", function(){
           element.addClass(attrs.directiveBasicBehavior);
           console.log("mouseenter");
       });
       element.bind("mouseleave", function(){
           element.removeClass(attrs.directiveBasicBehavior);
           console.log("mouseleave");
       });
   }
});