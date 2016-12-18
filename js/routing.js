'use strict';
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope,$location) {

  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });


  $( ".maps" ).mouseleave(function() {
    $('.maps iframe').css("pointer-events", "none");
  });
  // var $ = jQuery.noConflict();
  // $('#myCarousel').carousel({ interval: 30, cycle: true });

  $(document).ready(function(){
    var mCarouselTO = setTimeout(function(){
      $('#myCarousel').carousel({
        interval: 4000,
        cycle: true,
      }).trigger('slide');
    }, 4000);
    var q = mCarouselTO;
  });

  var param1 = getParameterByName('lugar');

  switch (param1) {
    case 'bariloche':
    $scope.lugar = "San Carlos de Bariloche"
    $scope.carrousel = "partials/bariloche_carrousel.html"
    $scope.article = "partials/bariloche_article.html"
    $scope.map = "partials/bariloche_map.html"
    break;
    case 'bosque_de_arrayanes':
    $scope.lugar = "Bosque de Arrayanes"
    $scope.carrousel = "partials/bosque_de_arrayanes_carrousel.html"
    $scope.article = "partials/bosque_de_arrayanes_article.html"
    $scope.map = "partials/bosque_de_arrayanes_map.html"
    break;
    case 'colonia_suiza':
    $scope.lugar = "Colonia Suiza"
    $scope.carrousel = "partials/colonia_suiza_carrousel.html"
    $scope.article = "partials/colonia_suiza_article.html"
    $scope.map = "partials/colonia_suiza_map.html"
    break;

    case 'palacio_san_jose':
    $scope.lugar = "Palacio San José"
    $scope.carrousel = "partials/palacio_san_jose_carrousel.html"
    $scope.article = "partials/palacio_san_jose_article.html"
    $scope.map = "partials/palacio_san_jose_map.html"
    break;

    case 'purmamarca':
    $scope.lugar = "Purmamarca"
    $scope.carrousel = "partials/purmamarca_carrousel.html"
    $scope.article = "partials/purmamarca_article.html"
    $scope.map = "partials/purmamarca_map.html"
    break;

    case 'rio_atuel':
    $scope.lugar = "Circuito Río Atuel"
    $scope.carrousel = "partials/rio_atuel_carrousel.html"
    $scope.article = "partials/rio_atuel_article.html"
    $scope.map = "partials/rio_atuel_map.html"
    break;

    case 'rosario':
    $scope.lugar = "Rosario"
    $scope.carrousel = "partials/rosario_carrousel.html"
    $scope.article = "partials/rosario_article.html"
    $scope.map = "partials/rosario_map.html"
    break;


    case 'tandil':
    $scope.lugar = "Tandil"
    $scope.carrousel = "partials/tandil_carrousel.html"
    $scope.article = "partials/tandil_article.html"
    $scope.map = "partials/tandil_map.html"
    break;

    case 'tres_algarrobos':
    $scope.lugar = "Tres Algarrobos (Cuenca)"
    $scope.carrousel = "partials/tres_algarrobos_carrousel.html"
    $scope.article = "partials/tres_algarrobos_article.html"
    $scope.map = "partials/tres_algarrobos_map.html"
    break;

    case 'error':
    $scope.lugar = "Error"
    $scope.carrousel = "partials/error_carrousel.html"
    $scope.article = ""
    $scope.map = ""
    break;

    default:
    $scope.lugar = "Error"
    break;

  }



  $scope.getCarrousel = function() {
    return $scope.carrousel;
  }

  $scope.getArticle = function() {
    return $scope.article;
  }

  $scope.getMap = function() {
    return $scope.map;
  }

});


function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// function centerImage(img) {
//     var container = img.parentNode;
//     if (img.offsetHeight > container.clientHeight &&
//         img.offsetWidth > container.clientWidth) {
//         img.style.minHeight = "0";
//         img.style.minWidth = "0";
//         img.style.height = "100%";
//         if (img.offsetWidth < container.clientWidth) {
//             img.style.height = "";
//             img.style.width = "100%";
//         }
//     }
//     img.style.top = ((container.offsetHeight - img.offsetHeight) / 2) + "px";
//     img.style.left = ((container.offsetWidth - img.offsetWidth) / 2) + "px";
// }
// $(document).ready(function() {
//
//   $("#owl-demo").owlCarousel({
//     autoPlay : 3000,
//     stopOnHover : true,
//     navigation:true,
//     paginationSpeed : 1000,
//     goToFirstSpeed : 2000,
//     singleItem : true,
//     autoHeight : true,
//     transitionStyle:"fade"
//   });
//
// });


// var app = angular.module('myApp', [])
//   // .config(function($locationProvider) {
//   //   $locationProvider.html5Mode(true);
//   // });
//
// app.controller('myCtrl', function($scope, $location){
//
//     var _search = $location.search();
//     var lugar = _search.lugar;
//     alert(lugar);
//   });
//
// var app = angular.module('myApp',['ngRoute']);
//
//
// app.controller('myCtrl',['$scope', '$filter','$http','$routeParams', function ($scope, $filter, $http,$routeParams) {
//   var lugar = $routeParams.lugar;
//
//   alert(lugar);
// } ]);

// var app = angular.module('myApp',['ngRoute']);
// app.config(['$routeProvider', function($routeProvider) {
// 	$routeProvider
//         .when('/bariloche', {
//             templateUrl: '/bariloche0.html'
//         })
//         .when('/bosque_de_arrayanes', {
//             templateUrl: '/bosque_de_arrayanes.html',
//
//         })
//         .when('/error', {
//             templateUrl: 'error.html',
//
//         })
//         .otherwise({redirectTo:'/'});
// }]);
