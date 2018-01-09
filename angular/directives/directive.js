myApp.directive('showBooks',function(){
  return{
    restrict : 'E',
    templateUrl : 'views/show-books.html'
  }
});

myApp.directive('showHouses', function() {
  return {
    restrict: "E",
    templateUrl: "views/show-houses.html",
  }
});
myApp.directive('showCharacters', function() {
  return {
    restrict: "E",
    templateUrl: "views/show-characters.html",
  }
});
