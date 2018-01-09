myApp.factory('gotService', function gotData($http){
  var baseUrl = 'https://anapioficeandfire.com/api';
  var gotData = {};

  gotData.getAllBooks = function() {
    return $http.get(baseUrl + '/books?page=1&pageSize=15');
  }

  gotData.getAllHouses = function(page){

    return $http.get(baseUrl + '/houses?page='+page+'&pageSize=50');
  }

  gotData.getAllCharacters = function(page){
    return $http.get(baseUrl + '/characters?page='+page+'&pageSize=50');
  }

  gotData.getBook = function(bookid){
    return $http.get(baseUrl + '/books/'+bookid);
  }

  gotData.getHouse = function(houseid){
    return $http.get(baseUrl + '/houses/'+houseid);
  }

  gotData.getChar = function(charid){
    return $http.get(baseUrl + '/characters/'+charid);
  }

  return gotData;
});
