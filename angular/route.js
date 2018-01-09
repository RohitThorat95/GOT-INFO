myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl : 'views/main-page.html',
    controller  : 'mainController',
    controllerAs: 'mainPage'
  })
  .when('/particular-book/:bookid',{
    templateUrl : 'views/particular-book.html',
    controller  : 'particularBookController',
    controllerAs: 'book'
  })
  .when('/particular-house/:houseid',{
    templateUrl : 'views/particular-house.html',
    controller  : 'particularHouseController',
    controllerAs: 'house'
  })
  .when('/particular-char/:charid',{
    templateUrl : 'views/particular-char.html',
    controller  : 'particularCharController',
    controllerAs: 'char'
  })
  .otherwise({
    template : "<h1>404. Page Not Found</h1>"
  });
}]);
