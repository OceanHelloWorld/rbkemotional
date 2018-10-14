/*global console: false */
/*jslint unparam: true*/

window.angular.module('exampleApp', [
  'angular-web-notification',
  'ui.bootstrap',
  'dialogs',
  'exampleApp.services'
  ]).controller('exampleForm', ['$scope', '$dialog', '$timeout','$http','$window',function ($scope, $dialog,$timeout,$http,$window) {
    'use strict';

    $scope.click = function(data){
      $scope.user.status = data
    }
    $scope.test = function(data){
      window.alert(data)
    }
    $scope.user={
      name:"",
      status:"",
      comment:""
    }
    $scope.changeComment = function(comment) {
      $scope.user.comment = comment;
    }
    $scope.changedValue = function(name) {
      $scope.user.name=name;
      console.log(name);
    }
    $scope.title = new Date();
    $scope.text = 'Please click here to get your data';
    $scope.names = ["Abubaker","Akram","Amjad","ashraf jebril","Ashraf Alsheikh","Ayat","Azhar",
    "Batool","Dalia","Dana","Esraa","firas","Ghadeer","Ghazi","Ghosoun","Hamza Sawalka","Hamza Eleimat","Haya","Issa","Mahmoud Zaid",
    "Mahmoud Khudairi","Mansour Almoukdad ","Maram","Mohammad omar","Mohannad","Mohammad AlRawashdah","Muhammad Al-Deri","Mustaf",
    "Omar","Qusay","Radwan","Rashad","Sara","Wafaa","Tahani","Walaa","Waleed Assaf","Walid Haj","walid dalabeah",
      "Yahye","Yazeed","Zaid"];
    $scope.call = function () {
     $http({
      method: 'POST',
      async:false,
      url: '/Notification',
      data:{
        Status:$scope.user.status,
        Name:$scope.user.name,
        Comment:$scope.user.comment
      }
    })
     .then(function (res) {
      console.log('your data has been saved')
      
    })
     .catch(function(error) {
      console.log(error)
    });
   }



 }]).directive('showButton', ['webNotification','$dialog', function (webNotification,$dialog) {
  'use strict';

  return {
    restrict: 'C',
    scope: {
      notificationTitle: '=',
      notificationText: '='
    },
    link: function (scope, element) {
      surprise();
            // var time = scope.notificationTitle + '';
            // var ModifiedTime = time.split(" ");
            // var hoursTime = ModifiedTime[4]

            function Notification(){
              webNotification.showNotification("Survey Notification" , {
                body: 'Please click here for the Emtional Health Survey',
                onClick: function onNotificationClicked() {
                  console.log('Notification clicked.');
                  $dialog.dialog({}).open('modalContent.html')
                },
                    autoClose: 10000 //auto close the notification after 4 seconds (you can manually close it via hide function)
                  },function onShow(error, hide) {
                    if (error) {
                      window.alert('Unable to show notification: ' + error.message);
                      console.log(error.message)
                    } else {
                      console.log('Notification Shown.');
                      setTimeout(function hideNotification() {

                        console.log('Hiding notification....');
                            hide(); //manually close the notification (you can skip this if you use the autoClose option)
                          }, 5000);
                    }
                  });
           // });
         }
            // to here before updating on time if statment,,,>>>>>>
            function surprise() {
              (function loop() {

                var now = new Date();
                console.log(now.getHours())
                // !!! delete after
                Notification();
                if ( (now.getHours() === 11) || (now.getHours() === 15 ) ) {
                  Notification();
                }
                     now = new Date();                  // allow for time passing
                     var delay = 60000 - (now % 60000); // exact ms to next minute interval
                     setTimeout(loop, delay);
                   })();
                 }

               }
             };
           }]).component('app', {
            templateUrl :'../modalContent.html'
          });