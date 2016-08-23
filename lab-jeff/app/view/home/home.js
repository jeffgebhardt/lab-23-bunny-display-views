'use strict';
require('./_home.scss');

const angular = require('angular');
const hobbitApp = angular.module('hobbitApp');

hobbitApp.controller('HomeController', ['$rootScope', HomeController]);

function HomeController($rootScope){
  this.images = $rootScope.imageData;
}
