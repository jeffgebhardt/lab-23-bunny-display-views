'use strict';
require('./fullsize.scss');

const angular = require('angular');
const hobbitApp = angular.module('hobbitApp');

hobbitApp.controller('FullsizeController', ['$rootScope', '$routeParams', '$location', FullsizeController]);

function FullsizeController($rootScope, $routeParams, $location){
  this.images = $rootScope.imageData;

  this.isValidId = function(id){
    if (id < 1 || id > 5) return false;
    if (isNaN(id)) return false;
    return true;
  };

  let id = Number.parseInt($routeParams.id);

  if(!this.isValidId(id)) {
    $location.path('/error');
  }

  this.image = this.images[id - 1];

}
