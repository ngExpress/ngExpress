'use strict';

angular.module('mbApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bundle'
])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);