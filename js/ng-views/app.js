'use strict'

angular
.module('musingApp', [
  'ui_router'
])
.config([
  '$stateProvider',
  RouterFunction
])
.controller('musingsController', [
  '$state',
  '$stateParams',
  musingsControllerFunction
])
function RouterFunction($stateProvider) {
  $stateProvider
  .state()
  controller: 'musingsController'
}
function musingsControllerFunction($state, $stateParams) {

}
