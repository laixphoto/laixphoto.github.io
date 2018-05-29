var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngMasonry']);

//directives
app.directive('onEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown",
            function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.onEnter);
                    });
                    event.preventDefault();
                }
            });
    };
});

app.directive('onEsc', function () {
    return function (scope, element, attrs) {
        element.bind("keydown",
            function (event) {
                if (event.which === 27) {
                    scope.$apply(function () {
                        scope.$eval(attrs.onEsc);
                    });
                    event.preventDefault();
                }
            });
    };
});

//locations
app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: './build/views/home/home.html',
            controller: 'appController',
        })
        .otherwise({
            redirectTo: '/home',
        });

}]);

//build
app.controller('appController', ['$scope', '$rootScope', '$location', '$window', '$timeout', '$interval', '$http',
    function ($scope, $rootScope, $location, $window, $timeout, $interval, $http) {

        //nav
        app.nav($scope, $rootScope, $location, $window, $timeout, $interval);

        //views
        app.home($scope, $location, $window, $timeout, $interval, $http);

        //User language detection
        var lang = window.navigator.userLanguage || window.navigator.language;
        $scope.userLang = lang.substring(0, 2);
        var webLang = '';

        if ($scope.userLang == 'es') {
            webLang = '. Web gonna be in spanish'
        } else {
            webLang = '. Web gonna be in english'
        }
        console.log('User language is: ' + $scope.userLang + webLang);
    }
]);