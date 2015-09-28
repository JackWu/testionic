angular.module('starter.controllers', [])
.controller('MyTabCtrl',function($scope, $http, ApiEndpoint) {
  console.log('ApiEndpoint', ApiEndpoint);
  console.log('API URL', ApiEndpoint.url);
  $http.defaults.useXDomain = true;
  console.log($http.defaults.headers.common['Accept']);
  $http.defaults.headers.common['Host'] = 'techtrend.biz'
  console.log($http.defaults.headers.common['Host']);
  console.log($http.defaults.headers.common['Access-Control-Allow-Origin']);
  //delete $http.defaults.headers.common['HOST'] = 'techtrend.biz';
  $http.get(ApiEndpoint.url+'/customer').then(function(resp){
    console.log('Success', resp);
  }, function(err){
    console.error('ERR', err);
  })
})

.controller('DashCtrl', function($scope) {})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
