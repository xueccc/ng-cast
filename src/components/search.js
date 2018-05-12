angular.module('video-player')

.component('search', {
  controller: function(youTube) {
    this.query = '';
    this.getData = youTube.getData
  },
  bindings: {
    setvideos: '<'    
  },
  
  template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" ng-model="$ctrl.query"/>
      <button class="btn" ng-click="$ctrl.getData($ctrl.setvideos, $ctrl.query)">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
  `
});
