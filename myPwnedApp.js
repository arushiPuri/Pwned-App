//An app is created called 'pwnedApp'
var app = angular.module('pwnedApp',[]);
//A controller is created called 'ctrl'
app.controller('ctrl', function($scope, $http){
//email is a variable is created and assigned an empty string, another variable named includeUnverified is created and assigned as false.
  $scope.email = '';
  $scope.includeUnverified = false;
//crossCheck is a function
  $scope.crossCheck = function(){
    //This is to clear screen when the function is called.
    $scope.breachedData = '';
    $scope.error = '';
    //variable url is assigned to the account and additionally the email entered by user.
    //If the value of includeUnverified is true, includeUnverified is also added.
    var url = 'https://haveibeenpwned.com/api/v2/breachedaccount/' + $scope.email + ($scope.includeUnverified ? '?includeUnverified=true' : '');
    //This statement gets the url, if it is successful, it assigns the breachedData as response.data.
    //If it fails, it consoles the Error along with response,data. The console output is just to check the functionality.
    $http.get(url).then(
      function(response){
        console.log(response.data);
        $scope.breachedData = response.data;
      },
      function(response){
        if(response.status == 404){
          $scope.error = "Congrats! You have not been Pwned!! :D"
        }
        console.log("Error " + response.status);
      }
    );
  }
});
