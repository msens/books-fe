describe('configModule controllers', function() {

    var route;

    beforeEach(module('ngRoute', 'configModule'));

    beforeEach(
        inject(function($route, $httpBackend) {
            route = $route;
        })
    );

    describe('config controller', function() {

        describe('/page/books path', function() {
            var path = '/page/books';
            it('should use the template /src/html/books/books.tmpl.html', function() {
                expect(route.routes[path].templateUrl).toEqual('/src/html/books/books.tmpl.html');
            });
            it('should use the booksCtrl controller', function() {
                expect(route.routes[path].controller).toBe('booksCtrl');
            });
        });

        describe('unknown path', function() {
            it('should redirect to /page/books', function() {
                expect(route.routes[null].redirectTo).toEqual('/page/books')
            });
        })

    });

});