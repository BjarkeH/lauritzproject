app.directive("maincontentDirective", function(){
  return {
    restrict: 'AEC',
    replace: true,
    templateUrl: DOMAIN_NAME + "/templates/maincontent.template.html",
    link: function($scope, elem, attrs){
      
    }
  }
})