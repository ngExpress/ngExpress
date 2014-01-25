'use strict';

angular.module('ngApp', [
        'ngRoute',
        'ngExpress.bundles.ui',
        'ngExpress.bundles.nvd3'
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
                .when('/nvd3', {
                    templateUrl: 'views/nvd3.html',
                    controller: 'NVD3Ctrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);