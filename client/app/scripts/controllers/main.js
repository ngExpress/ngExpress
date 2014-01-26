'use strict';

angular.module('ngApp')
    .controller('MainCtrl', [
        '$scope', '$location', '$window',
        function($scope, $location) {
            $scope.navigateToUI = function(){
                $location.path('/ui');
            };
            
            $scope.navigateToD3 = function(){
                console.log('navigateToD3');
                $location.path('/d3');
            };

            $scope.navigateToCommon = function(){
                $location.path('/common');
            };
        }
    ]);