var myModule = angular.module('App', ['ui.router']);

// register a new service
// myModule.value('appName', 'MyCoolApp');

// configure existing services inside initialization blocks.
myModule.run(['$rootScope', function($rootScope) {
    console.log('hello');
}]);
