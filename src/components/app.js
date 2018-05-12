angular.module('video-player')

.component('app', {
   controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.playVideo = this.videos[0];  
    this.selectVideo = function(video) {
      this.playVideo = video;
    }.bind(this); 
    // this.searchVideos = function(){youTube.getData()}.bind(this);
    this.setVideos = function(data) {
      this.videos = data;
      this.playVideo = data[0];
    }.bind(this);
  },
  
  template: `
    <div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search
            search="$ctrl.searchVideos"
            setvideos="$ctrl.setVideos"
          />
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player 
            video="$ctrl.playVideo"            
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
