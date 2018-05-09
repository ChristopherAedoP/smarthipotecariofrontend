// Application module
var crudApp = angular.module('smartApp',['ngMaterial', 'ngMessages','ngCookies','ngRoute']);


/*crudApp.config(function($routeProvider){

   $routeProvider
        .when('/', {
            templateUrl : 'index.html',
            controller  : 'DbController',
            
        })
       .when('/portal', {
            templateUrl : 'portal.html',
            controller  : 'DbController'
        })
        .when('/contacto', {
            templateUrl : 'pages/contacto.html',
            controller  : 'contactController'
        })
        .otherwise({
            redirectTo: '/login.html'
        });*/
        crudApp.controller("DbController",['$scope','$http','$location','$rootScope','$cookies', function($scope,$http,$location,$rootScope,$cookies){

            //getInfo();
            checkStatusStepOne();
            checkStatusStepTwo();
            checkStatusStepThree();
            checkStatusStepFour();
            checkStatusStepFive();
            checkStatusStepSix();
            checkStatusStepSeven();
            checkStatusStepEight();

            function getInfo(){
            
                  
                  $rootScope.username=username;
                  var usuarioParam={"usuario":$rootScope.username};
                
                     $http({
                          method  : 'POST',
                          url     : 'http://www.shortcutchile.com/ws/empDetails.php',
                          data    : usuarioParam, //forms user object
                          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
                         })
                          .success(function(data) {
                            if (data.errors) {
                              // Showing errors.
                                $scope.errorName = data.errors.name;
                                  $scope.errorUserName = data.errors.username;
                                  $scope.errorEmail = data.errors.email;
                            } else {
                                  $scope.details=data;
                                 
                                  
                            }
                          })
                }


                function checkStatusStepOne(){
                    //If status==1
                    document.getElementById("bk-clr-one").style.backgroundColor = "green";    
                    //else document.getElementById("bk-clr-one").style.backgroundColor = "gray";  
                }
                function checkStatusStepTwo(){
                    //If status==1
                    document.getElementById("bk-clr-two").style.backgroundColor = "orange";    
                    //else document.getElementById("bk-clr-one").style.backgroundColor = "gray";                                  
                }
                function checkStatusStepThree(){
                 //If status==1
                 document.getElementById("bk-clr-three").style.backgroundColor = "gray";    
                 //else document.getElementById("bk-clr-one").style.backgroundColor = "gray";                          
                }   
                function checkStatusStepFour(){
                    //If status==1
                    document.getElementById("bk-clr-four").style.backgroundColor = "gray";    
                    //else document.getElementById("bk-clr-one").style.backgroundColor = "gray";                          
                }
                function checkStatusStepFive(){
                    //If status==1
                    document.getElementById("bk-clr-five").style.backgroundColor = "gray";    
                    //else document.getElementById("bk-clr-one").style.backgroundColor = "gray";                          
                   }
                function checkStatusStepSix(){
                    //If status==1
                    document.getElementById("bk-clr-six").style.backgroundColor = "gray";    
                    //else document.getElementById("bk-clr-one").style.backgroundColor = "gray";                          
                }
                function checkStatusStepSeven(){
                    //If status==1
                    document.getElementById("bk-clr-seven").style.backgroundColor = "gray";    
                    //else document.getElementById("bk-clr-one").style.backgroundColor = "gray";                          
                }
                function checkStatusStepEight(){
                    //If status==1
                    document.getElementById("bk-clr-eight").style.backgroundColor = "gray";    
                    //else document.getElementById("bk-clr-one").style.backgroundColor = "gray";                          
                }

        }]);