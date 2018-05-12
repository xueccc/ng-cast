angular.module('video-player')
.service('youTube',['$http', function($http){
  // TODO
  this.getData = function(cb, query) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        limit: 5,
        q: query,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        type: 'video',
        part: 'snippet'
      }
    }).then(function(videos) {
      console.log(query);
      cb(videos.data.items);
      
    });
  }
}]);
  