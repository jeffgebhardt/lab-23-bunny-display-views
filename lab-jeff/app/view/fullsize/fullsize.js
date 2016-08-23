'use strict';

const angular = require('angular');
const hobbitApp = angular.module('hobbitApp');

hobbitApp.controller('FullsizeController', ['$rootScope', '$routeParams', '$location', FullsizeController]);

function FullsizeController($rootScope, $routeParams, $location){
  this.images = $rootScope.imageData;

  let id = Number.parseInt($routeParams.id);

  this.isValidId = function(id){
    // if (isNan(id)) return false;
    if (!isFinite(id)) return false;
    if (id < 1) return false;
    if (typeof(this.images[id - 1]) === 'undefined') return false;
    return true;
  };

  if(!this.isValidId(id)) {
    $location.path('/error');
  }

  this.image = this.images[id -1];

}
