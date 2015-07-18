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

  describe('when searching for a user',function(){
    var items = [
      {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      }, 
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
    ];

    it('displays search results', function(){
      expect(controller.searchResult.items).toEqual(items);
    });
  });
});
