var app = angular.module('index.controller');

app.controller('filterCtrl', [$scope, function ($scope) {
  $scope.watch("filterInput", function (newValue, oldValue) {
    if (angular.isDefined(newValue) && angular.isDefined(oldValue) && newValue.toString() !== oldValue.toString()) {
      console.log('salut');
    }
  })
}]);