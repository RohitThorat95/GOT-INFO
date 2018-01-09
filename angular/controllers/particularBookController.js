myApp.controller('particularBookController' ,['$http','$routeParams','gotService', function($http,$routeParams,gotService){
 $http.defaults.useXDomain = true;
  var main = this;
  this.book = {};
  this.bookid = $routeParams.bookid;

  this.getParticularBook = function(){
    gotService.getBook(main.bookid)
    .then(function successCallback(response){
      main.book = response.data;
      console.log(main.book);
    },function errorCallback(response){
      alert('Some Error. Check Console');
      console.log(response);
    });
    return main.book;
  };
  main.getParticularBook();
}]);
