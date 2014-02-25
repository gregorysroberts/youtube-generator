'use strict';

angular.module('youtubeGeneratorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.onclick(function (){
    	console.log("clicked the button");
    })
  });
