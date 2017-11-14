angular.module ('app').config (['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix ('!');
  $routeProvider
      .when ('/index',
          {
            template: "<index></index>"
          })
      .otherwise (
          {
            redirectTo: '/index'
          });
}]);
