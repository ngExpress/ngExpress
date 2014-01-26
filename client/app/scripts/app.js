'use strict';

angular.module('ngApp', [
        'ngRoute',
        'ngExpress.bundles.ui',
        'ngExpress.bundles.d3',
        'ngExpress.bundles.common'
    ])
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .when('/ui', {
                    templateUrl: 'views/ui.html',
                    controller: 'UICtrl'
                })
                .when('/d3', {
                    templateUrl: 'views/d3.html',
                    controller: 'D3Ctrl'
                })
                .when('/common', {
                    templateUrl: 'views/common.html',
                    controller: 'CommonCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);