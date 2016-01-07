/**
 * Created by abhishekkumar on 07/01/16.
 */
var app = angular.module("commBetweenDirecApp", []);

app.directive("mainElement", function(){
   return {
       restrict: "E",
       scope: {},

       controller: function($scope){
            $scope.val = 0;
            this.addStars = function(val){
                $scope.val += val;
            }
       },

       link: function(scope, element){
           element.bind("click", function(){
              element.text(scope.val + " * Stars you have...");
              element.addClass("star");
           });
       }
   }
});

app.directive("star1", function(){
    return {
        require: "mainElement",
        link: function(scope, element, attrs, mainElementCtrl){
            mainElementCtrl.addStars(1);
        }
    }
});

app.directive("star2", function(){
    return {
        require: "mainElement",
        link: function(scope, element, attrs, mainElementCtrl){
            mainElementCtrl.addStars(2);
        }
    }
});

app.directive("star3", function(){
    return {
        require: "mainElement",
        link: function(scope, element, attrs, mainElementCtrl){
            mainElementCtrl.addStars(3);
        }
    }
});

app.directive("star4", function(){
    return {
        require: "mainElement",
        link: function(scope, element, attrs, mainElementCtrl){
            mainElementCtrl.addStars(4);
        }
    }
});

app.directive("star5", function(){
    return {
        require: "mainElement",
        link: function(scope, element, attrs, mainElementCtrl){
            mainElementCtrl.addStars(5);
        }
    }
});