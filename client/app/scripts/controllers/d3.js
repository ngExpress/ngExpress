'use strict';

angular.module('ngApp')
    .controller('D3Ctrl', ['$scope', '$window', function($scope, $window) {
        console.log(d3);
        console.log($window.d3);
    }]);
