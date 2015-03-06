// ---------------------------------------------------------------------------------------------------------------------
// Main Angular Application.
//
// @module app.js
// ---------------------------------------------------------------------------------------------------------------------

angular.module('cloud-land', [
        'ngRoute',

        'lodash',
        'ui.bootstrap',
        'directive.g+signin',

        'cloud-land.services',
        'cloud-land.controllers',
        'cloud-land.directives',
        'cloud-land.utils'
    ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', { templateUrl: '/components/home/home.html', controller: 'HomeController' })
            .when('/admin', { templateUrl: '/components/admin/admin.html', controller: 'adminController' })
            .otherwise({redirectTo: '/'});
    }]);

// ---------------------------------------------------------------------------------------------------------------------

angular.module('cloud-land.services', []);
angular.module('cloud-land.controllers', []);
angular.module('cloud-land.directives', []);
angular.module('cloud-land.utils', []);

// ---------------------------------------------------------------------------------------------------------------------