app.directive("headerDirective", ['$rootScope', function($rootScope){
  return {
    restrict: 'AEC',
    replace: true,
    templateUrl: DOMAIN_NAME + "/templates/header.directive.template.html",
    link: function($scope, el, attr){
      
      $scope.pageTitle = SITE_NAME;
    }
  }
}]);