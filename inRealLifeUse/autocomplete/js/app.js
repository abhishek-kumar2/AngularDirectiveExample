/**
 * Created by abhishekkumar on 16/01/16.
 */
var app = angular.module("autoCompApp", []);

app.controller('autoCompCtrl', function($scope, $http) {
    $scope.resultsCall = [
    {
        "img":"img/actNow.jpg",
        "title":"Act Now",
        "des":"Description of act now"
    },
    {
        "img":"img/actNow.jpg",
        "title":"Act2 Now",
        "des":"Description of act now"
    },
    {
        "img":"img/cover.jpeg",
        "title":"Cover",
        "des":"Description of cover"
    },
    {
        "img":"img/GDAMS.png",
        "title":"GDAMS",
        "des":"Description of gdams"
    },
    {
        "img":"img/girl.png",
        "title":"Girl",
        "des":"Description of girl"
    },
    {
        "img":"img/globe.gif",
        "title":"Globe",
        "des":"Description of globe"
    },
    {
        "img":"img/green-tree.jpg",
        "title":"Green tree",
        "des":"Description of "
    },
    {
        "img":"img/motorsports.png",
        "title":"Sports motor",
        "des":"Description of sports motor"
    },
    {
        "img":"img/nonprofit.png",
        "title":"Non profit",
        "des":"Description of non profit"
    },
    {
        "img":"img/XN-CBC.png",
        "title":"XN CBC",
        "dis":"Description of xn cbc"
    }
    ];

    var textforSearchCount = 0;

    $scope.searchCharCount = function() {
        if($scope.searchText != undefined && $scope.searchText.length >= 3)
            $scope.results = $scope.resultsCall;
        else
            $scope.results = [];

        if($scope.searchText != undefined && $scope.searchText.length > textforSearchCount){
            $("ul.list-group").show();
            textforSearchCount = $scope.searchText.length;
        }

    }

    $scope.$watch($scope.searchCharCount);
});

app.directive("autoComplete", function(){
    return {
        restrict: "E",
        scope: {
            title: '@searchTitle',
            img: '@searchImg',
            des: '@searchDes',
            searchText: '@searchText'
        },
        link: function(scope, element, attr){
            scope.applySearch = function(){
                //angular.element("#itemSearch").val(this.title);
                $("#itemSearch").val(this.title);
                $("ul.list-group").hide();
            }
        },
        replace: true,
        template: '<div class="media" ng-click="applySearch()">' +
                        '<div class="media-left">' +
                            '<a >' +
                                '<img width="50" class="media-object" src="{{img}}">' +
                            '</a>' +
                        '</div>' +
                        '<div class="media-body">' +
                            '<h4 class="media-heading">{{title}}</h4>' +
                            '{{des}}' +
                        '</div>' +
                    '</div>'
    }
})
