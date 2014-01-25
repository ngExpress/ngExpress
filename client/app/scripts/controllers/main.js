'use strict';

angular.module('mbApp')
    .controller('MainCtrl', [
        '$scope', '$rootScope', '$modal',
        function($scope, $rootScope, $modal) {
            $scope.showModal = function() {
                $modal.open({
                    templateUrl: 'simpleModal.html',
                    controller: [
                        '$scope', '$modalInstance',
                        function(scope, $modalInstance) {
                            scope.ok = function() {
                                $modalInstance.close();
                            };

                            scope.cancel = function() {
                                $modalInstance.dismiss('cancel');
                            };
                        }
                    ]
                });
            };
        }
    ]);