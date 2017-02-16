var app = angular.module("charlotte", []);
     
app.controller("itemController", function($scope) {
    $scope.items = [{
        name: "Charlotte",
        desc: "Webscrapedddd"
    },{
        name: "Spider",
        desc: "fdsfasd"
    }]
});