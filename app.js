// App
var app = angular.module("app", ['ngRoute', 'leaflet-directive']);
console.log("started app");


// Controls views
app.config(function($routeProvider) {
    // Home
	$routeProvider.when("/", {
		templateUrl: 'views/test.html',
		controller: 'mainCtrl'
	});

    $routeProvider.when("/about", {
		templateUrl: 'views/about.html',
		controller: 'mainCtrl'
	});
    
	$routeProvider.when("/contact", {
		templateUrl: 'views/contact.html',
		controller: 'mainCtrl'
	});
    
	$routeProvider.when("/help", {
		templateUrl: 'views/404.html',
		controller: 'mainCtrl'
	});
    /*
	$routeProvider.when("/:nhood", {
		templateUrl: 'views/nhood.html',
		controller: $routeParams.nhoodCtrl,  // variable holds controller name
		resolve: function() {
			nhoodCtrl["nhood"] = $routeParams.nhood;
		};
	});
    */
	$routeProvider.otherwise({
		templateUrl: 'views/404.html'
	});
});
console.log("started route provider");
