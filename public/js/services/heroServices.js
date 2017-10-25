angular.module('App')
    .service('heroServices', ['$http','$q', function($http, $q) {

        /*hero services*/
        this.getAllHero = function() {
            var deferred = $q.defer();
            $http.get('/hero/all')
                .success(function success(response) {
                    deferred.resolve(response)
                }).error(function error(response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        };
    }]);


