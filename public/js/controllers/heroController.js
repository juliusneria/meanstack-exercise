angular.module('App')
    .controller('heroController', ['$scope','heroServices', function($scope, heroServices) {
        console.log('hero');
        $scope.heroes = [];
        heroServices.getAllHero().then(function(res){
            $scope.heroes = res;
            console.log($scope.heroes);
        });
    }]);