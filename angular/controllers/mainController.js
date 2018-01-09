 myApp.controller('mainController',['$http','gotService',function($http,gotService){
   $http.defaults.useXDomain = true;
   var main = this;
   this.books = [];
   this.houses = [];
   this.characters = [];
   this.booksVisible = true;
   this.houseVisible = false;
   this.characterVisible = false;

   this.housepages = 20;
   this.charpages = 50;

// Books function
    this.booksFunction = function() {
      gotService.getAllBooks()
      .then(function successCallback(response){
        main.books = response.data;
        // console.log(response.data)
        console.log(main.books);
      },function errorCallback(response){
        alert("Some Error. Check Console");
        conole.log(response);
      });
      return main.books;
    };
    main.booksFunction();

// House function
    this.houseFunction = function() {
      for (var i = 1; i < main.housepages; i++) {
        gotService.getAllHouses([i]).then(function successCallback(response){
        if(response.data.length > 0){
       main.houses.push.apply(main.houses, response.data);
       }
      },
      function errorCallback(response){
        alert("Some Error. Check Console");
        console.log(response);
      });
    }

  };
    main.houseFunction();

// Charaters Fcuntion
   this.characterFunction = function() {
     for (var i = 2; i < main.charpages; i++) {
       gotService.getAllCharacters([i]).then(function successCallback(response){
       if(response.data.length > 0){
      main.houses.push.apply(main.characters, response.data);
      }
     },
     function errorCallback(response){
       alert("Some Error. Check Console");
       console.log(response);
     });
   }
  };
   main.characterFunction();

   this.showBooks = function() {
     main.booksVisible = main.booksVisible ? false : true;
     main.houseVisible = false;
     main.characterVisible = false;
   };

   this.showHouses = function() {
     main.houseVisible = main.houseVisible ? false : true;
     main.booksVisible = false;
     main.characterVisible = false;
   }
   this.showCharacters = function() {
     main.characterVisible = main.characterVisible ? false : true;
     main.booksVisible = false;
     main.houseVisible = false;
   }
}]);
