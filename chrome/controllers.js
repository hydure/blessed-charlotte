var app = angular.module("charlotte", []);
     
app.controller("itemController", function($scope) {
    $scope.curr_data = {};
    $scope.status = "home"; // window status
    $scope.items = [/*{
        name: "Charlotte",
        desc: "Webscraper",
        steps: []
    }*/]
    $scope.getStatus = function(){
        return $scope.status;
    }

    $scope.toggleNewWindow = function(windowId, data){
        $(windowId).toggleClass('open');
        switch(windowId){
            case('.new-thing'):
                if(!data){
                    $scope.curr_data = {};
                    $scope.items.push($scope.curr_data);
                }else{
                    $scope.curr_data = data;
                }
                console.log( $scope.curr_data);
                break;
            case('.tools'):
                break;
        }

        $scope.status = windowId == windowId ? "" : windowId;
    }

    $scope.removeModule = function(item){
        this.items.splice(this.items.indexOf(item),1);
    }
});