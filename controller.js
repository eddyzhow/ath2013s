
shirtSizeApp.controller('ShirtSizeController', ['$scope','angularFire', 
  function ShirtSizeController($scope, angularFire) {  
    var url = 'https://shirtsize.firebaseio.com/shirts';
    var promise = angularFire(url, $scope, 'shirts', []);  
  }
]);
