angular.module('configModule', [])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/page/books', {
                    templateUrl: '/src/html/books/books.tmpl.html',
                    controller: 'booksCtrl'
                })
                .otherwise({
                    redirectTo: '/page/books'
                });
        }
    ]);