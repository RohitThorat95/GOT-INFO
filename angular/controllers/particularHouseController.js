myApp.controller('particularHouseController',['$http','gotService','$routeParams', function($http,gotService,$routeParams){
  $http.defaults.useXDomain = true;
  var main = this;
  this.house = {};
  this.houseid = $routeParams.houseid;

  this.getParticularHouse = function(){
    gotService.getHouse(main.houseid)
    .then(function successCallback(response){
      main.house = response.data;
      console.log(main.house);
    },function errorCallback(response){
      alert('Some Error. Check Console');
      console.log(response);
    });
    return main.house;
  };
  main.getParticularHouse();
}]);
