githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;

  self.doSearch = function(){
  	Search.query(self.searchTerm)
  	  .then(function(response){
  	  	self.searchResult = response.data;
  	  });
  };

}]);

// githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

//   var searchResource = $resource('https://api.github.com/search/users');
   
//   var self = this;

//   self.doSearch = function(){
//   	// console.log(self.searchTerm);
//   	self.searchResult = searchResource.get({q:self.searchTerm});
//   	// self.searchResult = {
//   	//  "items": [
// 		 //    {
// 		 //      "login": "tansaku",
// 		 //      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
// 		 //      "html_url": "https://github.com/tansaku"
// 		 //    }, 
// 		 //    {
// 		 //      "login": "stephenlloyd",
// 		 //      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
// 		 //      "html_url": "https://github.com/stephenlloyd"
// 		 //    }
// 		 //  ]
// 	  // };
//   };

// }]);

