app.directive("favDirective", function(){
  return {
    restrict: "AEC",
    replace: true,
    template: '<button class="btn btn-danger" ng-click="toggleActive()"><i class="glyphicon" ng-class="{\'glyphicon-heart-empty\': !active , \'glyphicon-heart\' : active}"></i></button>',
    link: function($scope, elem, attrs){

      // $scope.active = false;

      // $scope.toggleActive = function(){
      //   $scope.active = !$scope.active;
      //   // alert($scope.active);
      // }

      elem.on('click', function(){
        var child = elem[0].children[0];
        // console.log(child);
        if(child.classList.contains("glyphicon-heart-empty")){
          child.classList.remove("glyphicon-heart-empty");
          child.classList.add("glyphicon-heart");
        } else {
          child.classList.remove("glyphicon-heart");
          child.classList.add("glyphicon-heart-empty");
        }
      })

    }
  }
});