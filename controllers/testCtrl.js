// Controller for Angular Nhood Profiles webapp
// There will exist one controller per nhood
// Author: Garin Wally; May 2017

app.controller("cjmCtrl", ["$scope", function($scope) {
    $scope.pageTitle = "Captian John Mullan";
    
    // Nhood-specific values
    $scope.nhood = "{{nhood_name}}";
    $scope.desc = "Reserve St. to the Wye and from the Clark Fork River to Broadway (Highway 10 West).";
    $scope.creation_date = "{{creation_date}}";
    $scope.size = "{{size}}";
    $scope.wards = "{{wards}}";
    $scope.census_pop = "{{census_pop}}";
    $scope.est_pop = "{{est_pop}}";
    $scope.census_hu = "{{census_hu}}";
    $scope.est_hu = "{{est_hu}}";
    $scope.trail_mi = "{{trail_mi}}";
    
    // Assets (lists of things per nhood)
    $scope.asset_parks = "";
    $scope.asset_pub_facilities = "";
    $scope.asset_schools = "";
    $scope.asset_gstores = ["Garin's Shop", "Amy's Store", "Sugar & Spices Supply"];
    $scope.asset_histres = "";
    $scope.asset_new_dev = "";
    $scope.asset_plan_docs = "";
    
}]);


app.factory("dataService", function($http) {
	// Loads data, returns a "promise" object
	var dataSvc = {};
	dataSvc.load = function(path) {
		return $http.get(path).then(function(response){
			return response;
		});
	};
return dataSvc
});


app.controller("mapCtrl", function($scope, $timeout, dataService) {
	// Control the loading screen
	$scope.initialized = false;
	
	// Get the data and add it to map_data
    $scope.map_data = {};
	console.log("Getting data...");
	var promise = dataService.load("united_states.json");
	promise.then(function(data) {
		console.log(data.data);
		$scope.map_data.data = data.data;
		});
	console.log("Got data");

	// Map center and zoom
	$scope.map_extent = {
		lat: 39.82,
		lng: -98.58,
		zoom: 4
	};    

	$scope.map_data.style = {
		fillColor: "green",
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.7
	};
	
	// Map tile/basemaps
	var tilesDict = {
		openstreetmap: {
			name: "Open Street Map",
			url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			options: {
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}
		},
		opencyclemap: {
			name: "Open Cycle Map",
			url: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
			options: {
				attribution: 'All maps &copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, map data &copy; <a href="http://www.openstreetmap.org">OpenStreetMap</a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>'
			}
		}
	};
	
	// Pass tiles dict to $scope
	$scope.tiles = tilesDict.openstreetmap;

	// Change tiles function
	$scope.changeTiles = function(tiles) {
		$scope.tiles = tilesDict[tiles];
	};

	// Test the loading screen
	$timeout(function() {
		$scope.initialized = true;
	}, 8000);

});


