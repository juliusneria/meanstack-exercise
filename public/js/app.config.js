angular.module('App')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'js/controllers/views/hero-view.html',
                controller: 'heroController'
            });

        $urlRouterProvider.otherwise("/home");
    }]);