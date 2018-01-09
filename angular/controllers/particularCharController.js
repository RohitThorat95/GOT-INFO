myApp.controller('particularCharController',['$http','gotService','$routeParams',function($http,gotService,$routeParams){
  $http.defaults.useXDomain = true;
  var main = this;
  this.char = {};
  this.charid = $routeParams.charid;

  this.getParticularChar = function(){
    gotService.getChar(main.charid)
    .then(function successCallback(response){
      main.char = response.data;
      console.log(main.char);
    },function errorCallback(response){
      alert('Some Error. Check Console');
      console.log(response);
    });
    return main.char;
  };
  main.getParticularChar();
}]);
