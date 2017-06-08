// App
var app = angular.module("app", ['ngRoute', 'leaflet-directive']);
console.log("Initialized App");

/* Angular filter to set URLs for nhoods
    remove '/' 
    remove spaces (max 6) from nhood names
    NOTE: Python does it with a regex, here we use replace()
*/
app.filter("makeUrl", function() {
    return function(x) {
        // 
        var clean = x.replace("/", "")
        // Remove spaces (max 6)
        clean = clean.replace(" ", "").replace(" ", "").replace(" ", "");
        clean = clean.replace(" ", "").replace(" ", "").replace(" ", "");
        return "#/nhoods/" + clean;
    };
});


// Controls which view is displayed dependant on URL
app.config(function($routeProvider) {
    // Home
	$routeProvider.when("/", {
		templateUrl: 'page_views/home.html',
		controller: 'mainCtrl'
	});

    // About
    $routeProvider.when("/about", {
		templateUrl: 'page_views/about.html',
		controller: 'mainCtrl'
	});

    // Contact
	$routeProvider.when("/contact", {
		templateUrl: 'page_views/contact.html',
		controller: 'mainCtrl'
	});
    
    // Help
	$routeProvider.when("/help", {
		templateUrl: 'page_views/404.html',
		controller: 'mainCtrl'
	});
    
    // The page that gets loaded for any/every nhood
	$routeProvider.when("/nhoods/:nhood", {
        // The passthrough dynamically loads the selected nhood view
		templateUrl: "page_views/passthrough.html",
        controller: "mainCtrl",
        resolve: function($route) {
            return $route.current.params.nhood;
            }
	});

    // Anything else gets 404'd
	$routeProvider.otherwise({
		templateUrl: 'page_views/404.html'
	});
});
console.log("Initialized route provider");
