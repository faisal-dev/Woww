'use strict';

angular.module('sipaApp')
  .controller('SearchBoxCtrl', function ($scope, $http) {

    $scope.itemLists = function(name) {
      return $http.get('/api/things/search', {
        params: {
          name: name
        }
      }).then(function(response) {
        return response.data.map(function(item) {
          return item.name;
        });
      });
    };
  });