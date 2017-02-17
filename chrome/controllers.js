var app = angular.module("charlotte", []);
     
app.controller("itemController", function($scope) {
    $scope.crawler = new Charlotte();
    $scope.map_url;
    $scope.status = "home"; // window status
    $scope.items = [];
    $scope.site_map;

    $scope.getStatus = function(){
        return $scope.status;
    }

    $scope.createItem = function(data){
        $scope.items.push(data);
    }
    // copied and pasted, but function name leeft in tact for lulz
    $scope.changeIngredient = function(index) {
        if (index == $scope.curr_data.data.length - 1){
            $scope.curr_data.data.push('');
        }
    }

    $scope.toggleNewWindow = function(windowId, data){
        $(windowId).toggleClass('open');
        if(!data){
            $scope.curr_data = {
                data : [{}]
            };
        }else{
            $scope.curr_data = data;
        }
        $scope.status = windowId == windowId ? "" : windowId;
    }

    $scope.removeModule = function(item){
        removeFromStorageByIndex(this.items.indexOf(item), function(){
            $scope.$apply();
        });
        this.items.splice(this.items.indexOf(item),1);
    }

    $scope.mapSite = function(){
        $scope.crawler.mapSite($scope.map_url, 500).then(function(arr){
            $scope.site_map = arr;
            $scope.$apply();
        });
    }
    
    chrome.storage.sync.get(["blessed-charlotte-webcrawler"], function(items){
        $scope.items = items["blessed-charlotte-webcrawler"] || [];
        console.log($scope.items);
        $scope.$apply();
    });
});

function removeFromStorageByIndex(i, cb){
    chrome.storage.sync.get(["blessed-charlotte-webcrawler"], function(items){
        items = items["blessed-charlotte-webcrawler"] || [];
        items.splice(i,1);
        chrome.storage.sync.set({"blessed-charlotte-webcrawler":items},function(){
            cb();
        })
    });
}