'use strict';

angular.module('ngApp', [
        'ngRoute',
        'ngExpress.bundles.ui'
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