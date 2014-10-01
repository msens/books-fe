angular.module('configModule', [])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/page/home', {
                    templateUrl: '/src/html/home/home.tmpl.html'
                })
                .when('/page/books', {
                    templateUrl: '/src/html/books/books.tmpl.html',
                    controller: 'booksCtrl'
                })
                .when('/page/static/:name', {
                    templateUrl: function(params) {
                        return '/src/html/static/' + params.name + '.tmpl.html';
                    }
                })
                .otherwise({
                    redirectTo: '/page/home'
                });
        }
    ]);