app.controller('MainController', ['$scope', function($scope, $http) {

    $scope.myHouses = [];
    $scope.myStorage = null;
    $scope.opponentHouses = [];
    $scope.opponentStorage = null;
    $scope.gameId = null;
    $scope.houseId = null;

    initPath = '/new-game';
    doTurnPath = '/doTurn?';
    refreshPath = '/refresh?';

    $scope.doTurn = function() {
        myUrl = doTurnPath;
        myUrl += '&gameId=' + $scope.gameId;
        myUrl += '&houseId=' + $scope.houseId;

        var httpRequest = $http({
            method: 'GET',
            url: myUrl
        }).success(function(data, status) {
            $scope.playerHouses = data.playerHouses;
            $scope.playerStorage = data.playerStorage;
            $scope.opponentHouses = data.opponentHouses;
            $scope.opponentStorage = data.opponentStorage;
            $scope.gameId = data.gameId;
            $scope.playerTurn = data.playerTurn;
        });
    };

    $scope.init = function() {
        myUrl = initPath;

        var httpRequest = $http({
            method: 'GET',
            url: myUrl
        }).success(function(data, status) {
            $scope.playerHouses = data.playerHouses;
            $scope.playerStorage = data.playerStorage;
            $scope.opponentHouses = data.opponentHouses;
            $scope.opponentStorage = data.opponentStorage;
            $scope.gameId = data.gameId;
            $scope.playerTurn = data.playerTurn;
        });
    };

}]);