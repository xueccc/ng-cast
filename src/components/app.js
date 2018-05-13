angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
      this.$onInit = function() {
        youTube.search(this.searchResults, 'shiba');
      };
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];  
      this.selectVideo = function(video) {
        this.currentVideo = video;
      }.bind(this); 
      this.searchVideos = youTube.search;
      this.slowSearch = _.debounce(youTube.search, 1000);
      this.searchResults = function(data) {
        this.videos = data;
        this.currentVideo = data[0];
      }.bind(this);
    },
  
    template: `
    <div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search
            result="$ctrl.searchVideos"
            setvideos="$ctrl.searchResults"
            slowresult="$ctrl.slowSearch"
          />
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player 
            video="$ctrl.currentVideo"            
          />
        </div>
        <div class="col-md-5">
          <video-list 
            videos="$ctrl.videos"
            on-click="$ctrl.selectVideo"
          />
        </div>
      <div>
    </div>  
  `
  
  });
