// Controller for Angular Nhood Profiles webapp
// There will exist one controller per nhood
// Author: Garin Wally; May 2017

app.controller("{{nhood_name}}_ctrl", ["$scope", function($scope) {
    $scope.pageTitle = "{{nhood_name}} Profile";
    $scope.showAssets = true;
    
    // Nhood-specific values
    $scope.nhood = "{{nhood_name}}";
    $scope.desc = "{{desc}}";
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
    $scope.asset_gstores = "";
    $scope.asset_histres = "";
    $scope.asset_new_dev = "";
    $scope.asset_plan_docs = "";
    
}]);