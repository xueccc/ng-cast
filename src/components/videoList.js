angular.module('video-player')
.component('videoList', {
  
  bindings: {
    videos: '<',
    onClick: '<'
  },
  
  template: `
    <ul class="video-list">
      <video-list-entry 
      ng-repeat="videoentry in $ctrl.videos"
      ng-click="$ctrl.onClick(videoentry)" 
      video="videoentry" />
    </ul>
  `
});
