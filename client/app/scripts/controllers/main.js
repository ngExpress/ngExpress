'use strict';

angular.module('ngApp')
    .controller('MainCtrl', [
        '$scope', '$location', '$window',
        function($scope, $location) {
            $scope.navigateToDemos = function(){
                $location.path('/demos');
            };
        }
    ]);