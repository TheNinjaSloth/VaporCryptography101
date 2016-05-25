// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.directive('caesarCipherQuiz', function(caesarQuizFactory) {
  return {
      restrict: 'AE',
      scope: {},
      templateUrl: 'template.html',
      link: function(scope, elem, attrs) {
        scope.start = function() {
          scope.id = 0;
          scope.inProgress = true;
          scope.getQuestion();
        };
   
        scope.reset = function() {
          scope.inProgress = false;
          scope.score = 0;
        }
   
        scope.getQuestion = function() {
          var q = quizFactory.getQuestion(scope.id);
          if(q) {
            scope.question = q.question;
            scope.answer = q.answer;
          } else {
            scope.inProgress = false;
          }
        };
   
        scope.checkAnswer = function() {
          if(!$('input[name=answer]:checked').length) return;
   
          var ans = $('input[name=answer]:checked').val();
   
          if(ans == scope.options[scope.answer]) {
            scope.score++;
            scope.correctAns = true;
          } else {
            scope.correctAns = false;
          }
   
          scope.answerMode = false;
        };
   
        scope.nextQuestion = function() {
          scope.id++;
          scope.getQuestion();
        }
   
        scope.reset();
      }
    }
})