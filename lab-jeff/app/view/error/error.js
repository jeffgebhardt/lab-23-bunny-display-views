'use strict';
require('./error.scss');

const angular = require('angular');
const hobbitApp = angular.module('hobbitApp');

hobbitApp.controller('ErrorController', ['$rootScope', ErrorController]);

function ErrorController($rootScope){
  this.errorMessage = $rootScope.errorMessage;
}
