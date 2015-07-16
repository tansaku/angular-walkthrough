describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));
  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    console.log(JSON.stringify(controller));
    expect(controller.searchResult).toBeUndefined(); // TypeError: 'undefined' is not an object (evaluating 'controller.searchResult')
    expect(controller.searchTerm  ).toBeUndefined();
  });
});
