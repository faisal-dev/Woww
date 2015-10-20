'use strict';

angular.module('sipaApp')
  .directive('searchBox', function () {
    return {
      templateUrl: 'components/searchBox/searchBox.html',
      restrict: 'EA',
      controller: 'SearchBoxCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });