app.controller("mainCtrl", ["$scope", function($scope) {
    $scope.pageTitle = "Neighborhood Atlas";
    
    // Misc info
	$scope.date = new Date().toLocaleDateString();
	$scope.contact_name = "Garin Wally";
	$scope.contact_phone = "555-5555";
}]);
console.log("mainCtrl");