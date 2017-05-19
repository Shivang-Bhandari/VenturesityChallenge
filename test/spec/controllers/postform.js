'use strict';

describe('Controller: PostformCtrl', function () {

  // load the controller's module
  beforeEach(module('venturesityApp'));

  var PostformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostformCtrl = $controller('PostformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostformCtrl.awesomeThings.length).toBe(3);
  });
});
