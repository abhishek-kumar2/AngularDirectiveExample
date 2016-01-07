/**
 * Created by abhishekkumar on 07/01/16.
 */
var app = angular.module("basicBehaviourApp", []);

app.directive("directiveBasicBehavior", function(){
   return function(scope, element){
       element.bind("mouseenter", function(){
           console.log("mouseenter");
       });
       element.bind("mouseleave", function(){
           console.log("mouseleave");
       });
   }
});