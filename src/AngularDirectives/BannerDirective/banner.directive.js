app.directive("bannerDirective", function(){
  return {
    restrict: "AEC",
    replace: true,
    templateUrl: DOMAIN_NAME + "/templates/banner.template.html",
    link: function($scope, el, attrs){      

      $scope.randomImage;


      $scope.images = [
        "./assets/images/cameras-691843_1920.jpg",
        "./assets/images/store-2569219_1920.jpg",
        "./assets/images/hand-2577690_1920.jpg",
      ];

      


      function getRandomImage(){
        var randomNumber = Math.floor((Math.random()*3) + 1)  

        $scope.randomImage = $scope.images[randomNumber-1]
      }

      getRandomImage();    

    }
  }
})