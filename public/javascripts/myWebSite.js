var myWebSite = angular.module('myWebSite', ['ngRoute']);

/*
* This controller is responsible for Employees Directory available @ http://www.woobla.co.uk/employees/#/
*/
myWebSite.controller('homeController', ['$scope', '$http', function($scope, $http) {

	$http.get('http://localhost:3001/employees').
  		success(function(data) {
   		$scope.employees = data;
  	});
  	
}]);

/*
* This controller is responsible for Employees Directory available @ http://www.woobla.co.uk/employees/#/list
*/
myWebSite.controller('listController', ['$scope', '$http', function($scope, $http) {

	// Initialising Items list
	$scope.items = [];
	
	// Initialising Purchased Items list
	$scope.purchasedItems = [];
	
	// Add Item
	$scope.addItem = function () {
		$scope.items.push({itemName : $scope.newItem , isDone : false });
		$scope.newItem = "";//Reset the text field.
	}
	
	// Delete Item
	$scope.deleteItem = function (index) {
	 	$scope.items.splice(index, 1);
	}
	
}]);


angular.bootstrap(document.body, ['myWebSite']);

myWebSite.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      }).
      when('/list', {
        templateUrl: 'templates/list.html',
        controller: 'listController'
      }).
      otherwise({
        redirectTo: '/'
	});
}]);