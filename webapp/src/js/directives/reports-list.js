angular.module('inboxDirectives').directive('mmReportsList', function() {
  'use strict';

    return {
      restrict: 'E',
      templateUrl: 'templates/directives/reports_list.html',
      controller: function($ngRedux, $scope) {
        'ngInject';

        var ctrl = this;
        var mapStateToTarget = function(state) {
          return {
            selectMode: state.selectMode
          };
        };
        var unsubscribe = $ngRedux.connect(mapStateToTarget)(ctrl);

        $scope.$on('$destroy', unsubscribe);
      },
      controllerAs: '$ctrl'
    };
  });
