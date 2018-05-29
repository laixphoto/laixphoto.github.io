app.home = function ($scope, $location, $window, $timeout, $interval, $http) {

  $scope.cards = '';
  $scope.openFoto = '';
  $scope.memo = '';
  var inc = '';

  $http.get('../../../assets/json/data.json').then(function (response) {
    $scope.cards = response.data;
  });

  $scope.openPhoto = function (card, index) {
    $scope.openFoto = '../../../assets/photos/' + card.foto + '.jpg';
    $('.outer-modal, i, .modal').removeClass('hide');

    inc = index;
  };

  $scope.closePhoto = function () {
    $scope.openFoto = '';
    $('.outer-modal, i, .modal').addClass('hide');
  };

  $scope.imgNext = function () {
    inc++
    if ($scope.cards[inc] === undefined) {
      inc = $scope.cards.length - 1;
    }
    $scope.openFoto = '../../../assets/photos/' + $scope.cards[inc].foto + '.jpg';
  };

  $scope.imgPrev = function () {
    inc--
    if ($scope.cards[inc] === undefined) {
      inc = 0;
    }
    $scope.openFoto = '../../../assets/photos/' + $scope.cards[inc].foto + '.jpg';
  };

  $scope.filterPer = function () {
    console.log('personal');
    
    $scope.byCat = '';
  };
}