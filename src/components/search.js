angular.module('video-player')

.component('search', {
  controller: function(youTube) {
    this.query = '';
    // this.$onChange = function(changes) {
    //   $ctrl.result($ctrl.setvideos, changes);
    // }
  },
  bindings: {
    setvideos: '<',
    result: '<',
    slowresult: '<'
  },
  
  template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" ng-model="$ctrl.query" ng-change="$ctrl.slowresult($ctrl.setvideos, $ctrl.query)"/>
      <button class="btn" ng-click="$ctrl.result($ctrl.setvideos, $ctrl.query)">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
  `
});
