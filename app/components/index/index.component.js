angular.module("app.index")
    .component("index", {
      templateUrl: "components/index/view/index.template.html",
      controller: function ($scope) {
        $scope.$watch("filterInput", function (newValue, oldValue) {
          console.log("bite");
        })
      }
    });