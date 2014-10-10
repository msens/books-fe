// TODO Change http://localhost:8081 with variable
angular.module('booksModule', ['ngTable'])
    .controller('booksCtrl', ['$scope', '$http', '$location', 'ngTableParams',
        function ($scope, $http, $location, ngTableParams) {
        // http://localhost:8081
            $scope.listBooks = function() {
                // TODO Skip asking server after PUT or DELETE requests
                $http.get($scope.getApiUrl('/books')).then(function(response) {
                    $scope.books = response.data;
                    $scope.setTableParams();
                });
            };
            $scope.openBook = function(bookId) {
                $http.get($scope.getApiUrl('/books/' + bookId)).then(function(response) {
                    $scope.book = response.data;
                    $scope.originalBook = angular.copy($scope.book);
                });
            };
            $scope.newBook = function() {
                $scope.book = {};
                $scope.originalBook = angular.copy($scope.book);
            };
            $scope.saveBook = function() {
                var url = $scope.getApiUrl('/books');
                $scope.book.link = url + '/' + $scope.book.id;
                if (angular.equals($scope.originalBook, {})) {
                    $http.post(url, $scope.book).then(function() {
                        $scope.listBooks();
                        $scope.newBook();
                    });
                } else {
                    $http.put(url + '/' + $scope.book.id, $scope.book).then(function() {
                        $scope.listBooks();
                        $scope.newBook();
                    });
                }
            };
            $scope.revertBook = function() {
                $scope.book = angular.copy($scope.originalBook);
            };
            $scope.deleteBook = function() {
                $http.delete($scope.getApiUrl('/books/' + $scope.book.id)).then(function() {
                    $scope.listBooks();
                    $scope.newBook();
                });
            };
            $scope.deleteAllBooks = function() {
                $http.delete($scope.getApiUrl('/books')).then(function() {
                    $scope.listBooks();
                });
            };
            $scope.cssClass = function(ngModelController) {
                return {
                    'has-error': ngModelController.$invalid,
                    'has-success': ngModelController.$valid
                };
            };
            $scope.cssClassButton = function(ngModelController) {
                return {
                    'btn-success': ngModelController.$valid,
                    'btn-danger': ngModelController.$invalid
                };
            };
            $scope.isValid = function(ngModelController) {
                return ngModelController.$valid && !angular.equals($scope.book, $scope.originalBook);
            };
            $scope.canRevertBook = function() {
                return !angular.equals($scope.book, $scope.originalBook);
            };
            $scope.canDeleteBook = function() {
                return (
                    typeof $scope.book !== 'undefined' &&
                    typeof $scope.book.id !== 'undefined' &&
                    $scope.book.id !== ''
                );
            };
            $scope.pricePattern = function() {
                return (/^[\d]+\.*(\d)*$/);
            };
            $scope.setTableParams = function() {
                var total = 0;
                if ($scope.books !== undefined) total = $scope.books.length;
                if ($scope.tableParams !== undefined) {
                    $scope.tableParams.count($scope.tableParams.count() - 1);
                }
                $scope.tableParams = new ngTableParams({
                    page: 1,
                    count: 10
                }, {
                    counts: [], // hide page counts control
                    total: total,
                    getData: function($defer, params) {
                        $defer.resolve($scope.books.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });
            };
            $scope.getApiUrl = function(url) {
                if ($location.search().mocksPort !== undefined) {
                    return $scope.getDomain() + ':' + $location.search().mocksPort + url;
                } else {
                    return '/api/1' + url;
                }
            };
            $scope.getDomain = function() {
                return $location.protocol() + '://' + $location.host();
            };
            // TODO Test
            $scope.listBooks();
            // TODO Test
            $scope.newBook();
        }
    ]);