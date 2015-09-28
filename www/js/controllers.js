angular.module('starter.controllers', [])
.controller('MyTabCtrl',function($scope, $http, ApiEndpoint, Customer, Product) {

  /*$http.get(ApiEndpoint.url+'/customer').then(function(resp){
    console.log('Success', resp);
  }, function(err){
    console.error('ERR', err);
  });
  $http.get(ApiEndpoint.url+'/product').then(function(resp){
    console.log('Success', resp);
  }, function(err){
    console.error('ERR', err);
  });
  Customer.get(function(data) {
    console.log(data);
    console.log(data.meta);
    console.log(data.objects);
  });

  Product.get(function(data){
    console.log(data);
    console.log(data.meta);
    console.log(data.objects[0]);
  })*/

//query() returns all the entries
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
