'use strict';

angular.module('ngApp')
    .controller('MainCtrl', [
        '$scope', '$location', '$window',
        function($scope, $location) {
            $scope.navigateToUI = function(){
                $location.path('/ui');
            };
            $scope.navigateToNVD3 = function(){
                $location.path('/nvd3');
            };
        }
    ]);