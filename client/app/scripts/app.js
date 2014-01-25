'use strict';

angular.module('ngApp', [
        'ngRoute',
        'ui.bundle'
    ])
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .when('/demos', {
                    templateUrl: 'views/demos.html',
                    controller: 'DemosCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);