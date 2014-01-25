'use strict';

angular.module('ngApp')
    .controller('UICtrl', [
        '$scope', '$rootScope', '$modal',
        function($scope, $rootScope, $modal) {
            $scope.dt = new Date();
            
            $scope.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();

                $scope.opened = true;
            };

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