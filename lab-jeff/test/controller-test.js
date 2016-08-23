'use strict';
/*global expect expect:true*/
/*eslint no-undef: "error"*/

describe('tests controllers', function(){
  beforeEach(() => {
    angular.mock.module('hobbitApp');
    angular.mock.inject(($controller) => {
      this.HomeController = new $controller('HomeController');
      this.FullsizeController = new $controller('FullsizeController');
      this.ErrorController = new $controller('ErrorController');
      this.ThumbnailController = new $controller('ThumbnailController');
    });
  });

  it('FullsizeController should create an array of images', () => {
    expect(this.HomeController.images.length > 0).toEqual(true);
    expect(this.HomeController.images.length).toEqual(5);
  });
});
