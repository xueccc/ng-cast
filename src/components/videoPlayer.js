angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    video: '<'
  },
  
  template: `
    <div class="video-player">
      <div class="embed-responsive embed-responsive-16by9" ng-if="$ctrl.video">
        <iframe class="embed-responsive-item" src="{{'https://www.youtube.com/embed/' + $ctrl.video.id.videoId}}" allowFullScreen></iframe>
      </div>
      <div class="video-player-details" ng-if="$ctrl.video">
        <h3>{{$ctrl.video.snippet.title}}</h3>
        <div>{{$ctrl.video.snippet.description}}</div>
      </div>
    </div>
  `
});