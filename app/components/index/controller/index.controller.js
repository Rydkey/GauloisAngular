var app = angular.module('app.index');

app.controller('filterCtrl', filterCtrl);

function filterCtrl($scope) {
  $scope.$watch("filterInput", function (newValue, oldValue) {
    console.log('salut');
  })
}

