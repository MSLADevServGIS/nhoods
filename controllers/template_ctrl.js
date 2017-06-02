// Controller for Angular Nhood Profiles webapp
// There will exist one controller per nhood
// Author: Garin Wally; May 2017

app.controller("nhoodCtrl", ["$scope", function($scope) {
    $scope.pageTitle = "{{nhood_name}}";
    
    // Nhood-specific values
    $scope.nhood = "{{nhood_name}}";
    $scope.desc = "{{desc}}";
    $scope.creation_date = "{{creation_date}}";
    $scope.size = "{{size_acres}}";
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
    $scope.asset_gstores = "";
    $scope.asset_histres = "";
    $scope.asset_new_dev = "";
    $scope.asset_plan_docs = "";
    
    // Map Controller Variables
    $scope.json_bounds = {{json_bounds}};
    $scope.map_extent = {
		lat: {{lat}},
		lng: {{lng}},
		zoom: {{zoom_level}}
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
}]);