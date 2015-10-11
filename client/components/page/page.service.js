'use strict';

angular.module('sipaApp')
  .factory('Page', function ($rootScope, $state) {
    var
      defaultTitle = 'Wowww! | ',
      title;

    $rootScope.title = defaultTitle + title;

    // Public API here
    return {
      getTitle: function() {
        return $state.current.title;
      },
      setTitle: function(title) {
        $rootScope.title = defaultTitle + title;
      }
    };
  });
