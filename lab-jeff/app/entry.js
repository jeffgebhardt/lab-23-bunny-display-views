'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var app = angular.module('hobbitApp', [angular_route]);

app.run(['$rootScope', function($rootScope){
  $rootScope.imageData = require('./data/images.js');
  $rootScope.errorMessage = 'Error trying to access page...';
}]);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      templateUrl: '/app/view/home/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
    })
    .when('/thumbnail', {
      templateUrl: '/app/view/thumbnail/thumbnail.html',
      controller: 'ThumbnailController',
      controllerAs: 'thumbnailCtrl',
    })
    .when('/fullsize/:id', {
      templateUrl: '/app/view/fullsize/fullsize.html',
      controller: 'FullsizeController',
      controllerAs: 'fullsizeCtrl',
    })
    .when('/error', {
      templateUrl: '/app/view/error/error.html',
      controller: 'ErrorController',
      controllerAs: 'errorCtrl',
    })
    .otherwise({
      redirectTo: '/error',
    });
}]);

// angular components
require('./view/home/home.js');
require('./view/thumbnail/thumbnail.js');
require('./view/fullsize/fullsize.js');
require('./view/error/error.js');
