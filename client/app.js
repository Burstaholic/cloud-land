// ---------------------------------------------------------------------------------------------------------------------
// Main Angular Application.
//
// @module app.js
// ---------------------------------------------------------------------------------------------------------------------

angular.module('web-seed', [
        'ngRoute',

        'lodash',
        'ui.bootstrap',
        'directive.g+signin',

        'web-seed.services',
        'web-seed.controllers',
        'web-seed.directives',
        'web-seed.utils'
    ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', { templateUrl: '/components/home/home.html', controller: 'HomeController' })
            .otherwise({redirectTo: '/'});
    }]);

// ---------------------------------------------------------------------------------------------------------------------

angular.module('web-seed.services', []);
angular.module('web-seed.controllers', []);
angular.module('web-seed.directives', []);
angular.module('web-seed.utils', []);

// ---------------------------------------------------------------------------------------------------------------------