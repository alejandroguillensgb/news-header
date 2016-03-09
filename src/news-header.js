'use strict';

angular.module('news-header', ['megazord'])
    .controller('news-header-controller', ['$scope', '_router', '_screen', '_screenParams','$rootScope',
     	function ($scope, _router, _screen, _screenParams, $rootScope) {
        _screen.initialize($scope, _screenParams);

        $scope.filter = function(fil) {
            $scope.$broadcast('filterNews', fil); 
        }

        $scope.goToBookmarks = function() {
        	_router.goToState('main.bookmarks');
        }

        $scope.menu = _screenParams.menu?_screenParams.menu:{};
        //Add your controller logic here.
    }]);