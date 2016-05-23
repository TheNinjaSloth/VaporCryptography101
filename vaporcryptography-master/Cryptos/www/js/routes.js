angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.railFenceDefaultPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/railFenceDefaultPage.html',
        controller: 'railFenceDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionDefaultPage.html',
        controller: 'routeTranspositionDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.caesarCypherDefinition', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCypherDefinition.html',
        controller: 'caesarCypherDefinitionCtrl'
      }
    }
  })

  .state('tabsController.railFenceDefinition', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/railFenceDefinition.html',
        controller: 'railFenceDefinitionCtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionDefinition', {
    url: '/page7',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionDefinition.html',
        controller: 'routeTranspositionDefinitionCtrl'
      }
    }
  })

  .state('tabsController.caesarCypherExample', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCypherExample.html',
        controller: 'caesarCypherExampleCtrl'
      }
    }
  })

  .state('tabsController.caesarCypherExampleEncrypted', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCypherExampleEncrypted.html',
        controller: 'caesarCypherExampleEncryptedCtrl'
      }
    }
  })

  .state('tabsController.caesarCypherExampleDecrypted', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCypherExampleDecrypted.html',
        controller: 'caesarCypherExampleDecryptedCtrl'
      }
    }
  })

  .state('tabsController.caesarCypherPractice', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCypherPractice.html',
        controller: 'caesarCypherPracticeCtrl'
      }
    }
  })

  .state('tabsController.caesarPractice1Question1', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question1.html',
        controller: 'caesarPractice1Question1Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice1Question1A', {
    url: '/page43',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question1A.html',
        controller: 'caesarPractice1Question1ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice1Question2', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question2.html',
        controller: 'caesarPractice1Question2Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice1Question2A', {
    url: '/page44',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question2A.html',
        controller: 'caesarPractice1Question2ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice1Question3', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question3.html',
        controller: 'caesarPractice1Question3Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice1Question3A', {
    url: '/page45',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question3A.html',
        controller: 'caesarPractice1Question3ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice1Question4', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question4.html',
        controller: 'caesarPractice1Question4Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice1Question4A', {
    url: '/page46',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question4A.html',
        controller: 'caesarPractice1Question4ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice1Question5', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question5.html',
        controller: 'caesarPractice1Question5Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice1Question5A', {
    url: '/page47',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question5A.html',
        controller: 'caesarPractice1Question5ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.congratulations'
      2) Using $state.go programatically:
        $state.go('tabsController.congratulations');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page13
      /page1/tab2/page13
  */
  .state('tabsController.congratulations', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/congratulations.html',
        controller: 'congratulationsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/congratulations.html',
        controller: 'congratulationsCtrl'
      }
    }
  })

  .state('tabsController.caesarPractice2Question1', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question1.html',
        controller: 'caesarPractice2Question1Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice2Question1A', {
    url: '/page48',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question1A.html',
        controller: 'caesarPractice2Question1ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice2Question2', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question2.html',
        controller: 'caesarPractice2Question2Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice2Question2A', {
    url: '/page49',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question2A.html',
        controller: 'caesarPractice2Question2ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice2Question3', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question3.html',
        controller: 'caesarPractice2Question3Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice2Question3A', {
    url: '/page50',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question3A.html',
        controller: 'caesarPractice2Question3ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice2Question4', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question4.html',
        controller: 'caesarPractice2Question4Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice2Question4A', {
    url: '/page51',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question4A.html',
        controller: 'caesarPractice2Question4ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice2Question5', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question5.html',
        controller: 'caesarPractice2Question5Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice2Question5A', {
    url: '/page52',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question5A.html',
        controller: 'caesarPractice2Question5ACtrl'
      }
    }
  })

  .state('caesarPractice3Question1', {
    url: '/page25',
    templateUrl: 'templates/caesarPractice3Question1.html',
    controller: 'caesarPractice3Question1Ctrl'
  })

  .state('caesarPractice3Question1A', {
    url: '/page53',
    templateUrl: 'templates/caesarPractice3Question1A.html',
    controller: 'caesarPractice3Question1ACtrl'
  })

  .state('caesarPractice3Question2', {
    url: '/page26',
    templateUrl: 'templates/caesarPractice3Question2.html',
    controller: 'caesarPractice3Question2Ctrl'
  })

  .state('caesarPractice3Question2A', {
    url: '/page54',
    templateUrl: 'templates/caesarPractice3Question2A.html',
    controller: 'caesarPractice3Question2ACtrl'
  })

  .state('caesarPractice3Question3', {
    url: '/page27',
    templateUrl: 'templates/caesarPractice3Question3.html',
    controller: 'caesarPractice3Question3Ctrl'
  })

  .state('caesarPractice3Question3A', {
    url: '/page55',
    templateUrl: 'templates/caesarPractice3Question3A.html',
    controller: 'caesarPractice3Question3ACtrl'
  })

  .state('caesarPractice3Question4', {
    url: '/page28',
    templateUrl: 'templates/caesarPractice3Question4.html',
    controller: 'caesarPractice3Question4Ctrl'
  })

  .state('caesarPractice3Question4A', {
    url: '/page56',
    templateUrl: 'templates/caesarPractice3Question4A.html',
    controller: 'caesarPractice3Question4ACtrl'
  })

  .state('caesarPractice3Question5', {
    url: '/page29',
    templateUrl: 'templates/caesarPractice3Question5.html',
    controller: 'caesarPractice3Question5Ctrl'
  })

  .state('caesarPractice3Question5A', {
    url: '/page57',
    templateUrl: 'templates/caesarPractice3Question5A.html',
    controller: 'caesarPractice3Question5ACtrl'
  })

  .state('tabsController.caesarPractice4Question1', {
    url: '/page30',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question1.html',
        controller: 'caesarPractice4Question1Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice4Question1A', {
    url: '/page58',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question1A.html',
        controller: 'caesarPractice4Question1ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice4Question2', {
    url: '/page32',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question2.html',
        controller: 'caesarPractice4Question2Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice4Question2A', {
    url: '/page59',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question2A.html',
        controller: 'caesarPractice4Question2ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice4Question3', {
    url: '/page33',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question3.html',
        controller: 'caesarPractice4Question3Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice4Question3A', {
    url: '/page60',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question3A.html',
        controller: 'caesarPractice4Question3ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice4Question4', {
    url: '/page34',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question4.html',
        controller: 'caesarPractice4Question4Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice4Question4A', {
    url: '/page61',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question4A.html',
        controller: 'caesarPractice4Question4ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice4Question5', {
    url: '/page35',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question5.html',
        controller: 'caesarPractice4Question5Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice4Question5A', {
    url: '/page62',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question5A.html',
        controller: 'caesarPractice4Question5ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice5Question1', {
    url: '/page38',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question1.html',
        controller: 'caesarPractice5Question1Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice5Question1A', {
    url: '/page63',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question1A.html',
        controller: 'caesarPractice5Question1ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice5Question2', {
    url: '/page39',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question2.html',
        controller: 'caesarPractice5Question2Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice5Question2A', {
    url: '/page64',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question2A.html',
        controller: 'caesarPractice5Question2ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice5Question3', {
    url: '/page40',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question3.html',
        controller: 'caesarPractice5Question3Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice5Question3A', {
    url: '/page65',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question3A.html',
        controller: 'caesarPractice5Question3ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice5Question4', {
    url: '/page41',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question4.html',
        controller: 'caesarPractice5Question4Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice5Question4A', {
    url: '/page66',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question4A.html',
        controller: 'caesarPractice5Question4ACtrl'
      }
    }
  })

  .state('tabsController.caesarPractice5Question5', {
    url: '/page42',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question5.html',
        controller: 'caesarPractice5Question5Ctrl'
      }
    }
  })

  .state('tabsController.caesarPractice5Question5A', {
    url: '/page67',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question5A.html',
        controller: 'caesarPractice5Question5ACtrl'
      }
    }
  })

  .state('tabsController.caesarCypherQuiz', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCypherQuiz.html',
        controller: 'caesarCypherQuizCtrl'
      }
    }
  })

  .state('tabsController.caesarQuiz1Question1', {
    url: '/page37',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarQuiz1Question1.html',
        controller: 'caesarQuiz1Question1Ctrl'
      }
    }
  })

  .state('tabsController.caesarQuiz1Question2', {
    url: '/page68',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarQuiz1Question2.html',
        controller: 'caesarQuiz1Question2Ctrl'
      }
    }
  })

  .state('tabsController.caesarQuiz1Question3', {
    url: '/page69',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarQuiz1Question3.html',
        controller: 'caesarQuiz1Question3Ctrl'
      }
    }
  })

  .state('tabsController.caesarQuiz1Question4', {
    url: '/page70',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarQuiz1Question4.html',
        controller: 'caesarQuiz1Question4Ctrl'
      }
    }
  })

  .state('tabsController.caesarQuiz1Question5', {
    url: '/page71',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarQuiz1Question5.html',
        controller: 'caesarQuiz1Question5Ctrl'
      }
    }
  })

  .state('quiz1Completed', {
    url: '/page72',
    templateUrl: 'templates/quiz1Completed.html',
    controller: 'quiz1CompletedCtrl'
  })

  .state('caesarQuiz2Question1', {
    url: '/page73',
    templateUrl: 'templates/caesarQuiz2Question1.html',
    controller: 'caesarQuiz2Question1Ctrl'
  })

  .state('caesarQuiz2Question2', {
    url: '/page74',
    templateUrl: 'templates/caesarQuiz2Question2.html',
    controller: 'caesarQuiz2Question2Ctrl'
  })

  .state('caesarQuiz2Question3', {
    url: '/page75',
    templateUrl: 'templates/caesarQuiz2Question3.html',
    controller: 'caesarQuiz2Question3Ctrl'
  })

  .state('caesarQuiz2Question4', {
    url: '/page76',
    templateUrl: 'templates/caesarQuiz2Question4.html',
    controller: 'caesarQuiz2Question4Ctrl'
  })

  .state('caesarQuiz2Question5', {
    url: '/page77',
    templateUrl: 'templates/caesarQuiz2Question5.html',
    controller: 'caesarQuiz2Question5Ctrl'
  })

  .state('quiz2Completed', {
    url: '/page78',
    templateUrl: 'templates/quiz2Completed.html',
    controller: 'quiz2CompletedCtrl'
  })

  .state('tabsController.railfenceExample', {
    url: '/page24',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceExample.html',
        controller: 'railfenceExampleCtrl'
      }
    }
  })

  .state('tabsController.railfenceExampleEncrypted', {
    url: '/page31',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceExampleEncrypted.html',
        controller: 'railfenceExampleEncryptedCtrl'
      }
    }
  })

  .state('tabsController.railfenceExampleDecrypted', {
    url: '/page36',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceExampleDecrypted.html',
        controller: 'railfenceExampleDecryptedCtrl'
      }
    }
  })

  .state('tabsController.railFencePractice', {
    url: '/page79',
    views: {
      'tab2': {
        templateUrl: 'templates/railFencePractice.html',
        controller: 'railFencePracticeCtrl'
      }
    }
  })

  .state('tabsController.railfencePractice1Question1', {
    url: '/page80',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice1Question1.html',
        controller: 'railfencePractice1Question1Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice1Question1A', {
    url: '/page81',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice1Question1A.html',
        controller: 'railfencePractice1Question1ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice1Question2', {
    url: '/page82',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice1Question2.html',
        controller: 'railfencePractice1Question2Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice1Question2A', {
    url: '/page83',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice1Question2A.html',
        controller: 'railfencePractice1Question2ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice1Question3', {
    url: '/page85',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice1Question3.html',
        controller: 'railfencePractice1Question3Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice1Question3A', {
    url: '/page86',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice1Question3A.html',
        controller: 'railfencePractice1Question3ACtrl'
      }
    }
  })

  .state('railfencePractice1Question4', {
    url: '/page87',
    templateUrl: 'templates/railfencePractice1Question4.html',
    controller: 'railfencePractice1Question4Ctrl'
  })

  .state('railfencePractice1Question4A', {
    url: '/page88',
    templateUrl: 'templates/railfencePractice1Question4A.html',
    controller: 'railfencePractice1Question4ACtrl'
  })

  .state('railfencePractice1Question5', {
    url: '/page89',
    templateUrl: 'templates/railfencePractice1Question5.html',
    controller: 'railfencePractice1Question5Ctrl'
  })

  .state('railfencePractice1Question5A', {
    url: '/page90',
    templateUrl: 'templates/railfencePractice1Question5A.html',
    controller: 'railfencePractice1Question5ACtrl'
  })

  .state('tabsController.railfencePractice2Question1', {
    url: '/page91',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice2Question1.html',
        controller: 'railfencePractice2Question1Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice2Question1A', {
    url: '/page92',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice2Question1A.html',
        controller: 'railfencePractice2Question1ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice2Question2', {
    url: '/page93',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice2Question2.html',
        controller: 'railfencePractice2Question2Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice2Question2A', {
    url: '/page94',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice2Question2A.html',
        controller: 'railfencePractice2Question2ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice2Question3', {
    url: '/page95',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice2Question3.html',
        controller: 'railfencePractice2Question3Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice2Question3A', {
    url: '/page96',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice2Question3A.html',
        controller: 'railfencePractice2Question3ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice2Question4', {
    url: '/page97',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice2Question4.html',
        controller: 'railfencePractice2Question4Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice2Question4A', {
    url: '/page98',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice2Question4A.html',
        controller: 'railfencePractice2Question4ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice2Question5', {
    url: '/page99',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice2Question5.html',
        controller: 'railfencePractice2Question5Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice2Question5A', {
    url: '/page100',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice2Question5A.html',
        controller: 'railfencePractice2Question5ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice3Question1', {
    url: '/page101',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice3Question1.html',
        controller: 'railfencePractice3Question1Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice3Question1A', {
    url: '/page102',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice3Question1A.html',
        controller: 'railfencePractice3Question1ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice3Question2', {
    url: '/page103',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice3Question2.html',
        controller: 'railfencePractice3Question2Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice3Question2A', {
    url: '/page104',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice3Question2A.html',
        controller: 'railfencePractice3Question2ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice3Question3', {
    url: '/page105',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice3Question3.html',
        controller: 'railfencePractice3Question3Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice3Question3A', {
    url: '/page106',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice3Question3A.html',
        controller: 'railfencePractice3Question3ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice3Question4', {
    url: '/page107',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice3Question4.html',
        controller: 'railfencePractice3Question4Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice3Question4A', {
    url: '/page108',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice3Question4A.html',
        controller: 'railfencePractice3Question4ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice3Question5', {
    url: '/page109',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice3Question5.html',
        controller: 'railfencePractice3Question5Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice3Question5A', {
    url: '/page110',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice3Question5A.html',
        controller: 'railfencePractice3Question5ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice4Question1', {
    url: '/page111',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice4Question1.html',
        controller: 'railfencePractice4Question1Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice4Question1A', {
    url: '/page112',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice4Question1A.html',
        controller: 'railfencePractice4Question1ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice4Question2', {
    url: '/page113',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice4Question2.html',
        controller: 'railfencePractice4Question2Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice4Question2A', {
    url: '/page114',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice4Question2A.html',
        controller: 'railfencePractice4Question2ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice4Question3', {
    url: '/page115',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice4Question3.html',
        controller: 'railfencePractice4Question3Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice4Question3A', {
    url: '/page116',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice4Question3A.html',
        controller: 'railfencePractice4Question3ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice4Question4', {
    url: '/page117',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice4Question4.html',
        controller: 'railfencePractice4Question4Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice4Question4A', {
    url: '/page118',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice4Question4A.html',
        controller: 'railfencePractice4Question4ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice4Question5', {
    url: '/page119',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice4Question5.html',
        controller: 'railfencePractice4Question5Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice4Question5A', {
    url: '/page120',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice4Question5A.html',
        controller: 'railfencePractice4Question5ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice5Question1', {
    url: '/page121',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice5Question1.html',
        controller: 'railfencePractice5Question1Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice5Question1A', {
    url: '/page122',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice5Question1A.html',
        controller: 'railfencePractice5Question1ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice5Question2', {
    url: '/page123',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice5Question2.html',
        controller: 'railfencePractice5Question2Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice5Question2A', {
    url: '/page124',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice5Question2A.html',
        controller: 'railfencePractice5Question2ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice5Question3', {
    url: '/page125',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice5Question3.html',
        controller: 'railfencePractice5Question3Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice5Question3A', {
    url: '/page126',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice5Question3A.html',
        controller: 'railfencePractice5Question3ACtrl'
      }
    }
  })

  .state('tabsController.railfencePractice5Question4', {
    url: '/page127',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice5Question4.html',
        controller: 'railfencePractice5Question4Ctrl'
      }
    }
  })

  .state('tabsController.railfencePractice5Question4A', {
    url: '/page128',
    views: {
      'tab2': {
        templateUrl: 'templates/railfencePractice5Question4A.html',
        controller: 'railfencePractice5Question4ACtrl'
      }
    }
  })

  .state('railfencePractice5Question5', {
    url: '/page129',
    templateUrl: 'templates/railfencePractice5Question5.html',
    controller: 'railfencePractice5Question5Ctrl'
  })

  .state('railfencePractice5Question5A', {
    url: '/page130',
    templateUrl: 'templates/railfencePractice5Question5A.html',
    controller: 'railfencePractice5Question5ACtrl'
  })

  .state('tabsController.railfenceQuiz', {
    url: '/page131',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz.html',
        controller: 'railfenceQuizCtrl'
      }
    }
  })

  .state('tabsController.railfenceQuiz1Question1', {
    url: '/page132',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz1Question1.html',
        controller: 'railfenceQuiz1Question1Ctrl'
      }
    }
  })

  .state('tabsController.railfenceQuiz1Question2', {
    url: '/page133',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz1Question2.html',
        controller: 'railfenceQuiz1Question2Ctrl'
      }
    }
  })

  .state('tabsController.railfenceQuiz1Question3', {
    url: '/page134',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz1Question3.html',
        controller: 'railfenceQuiz1Question3Ctrl'
      }
    }
  })

  .state('tabsController.railfenceQuiz1Question4', {
    url: '/page135',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz1Question4.html',
        controller: 'railfenceQuiz1Question4Ctrl'
      }
    }
  })

  .state('tabsController.railfenceQuiz1Question5', {
    url: '/page136',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz1Question5.html',
        controller: 'railfenceQuiz1Question5Ctrl'
      }
    }
  })

  .state('railfenceQuiz1Congrats', {
    url: '/page137',
    templateUrl: 'templates/railfenceQuiz1Congrats.html',
    controller: 'railfenceQuiz1CongratsCtrl'
  })

  .state('tabsController.railfenceQuiz2Question1', {
    url: '/page138',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz2Question1.html',
        controller: 'railfenceQuiz2Question1Ctrl'
      }
    }
  })

  .state('tabsController.railfenceQuiz2Question2', {
    url: '/page139',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz2Question2.html',
        controller: 'railfenceQuiz2Question2Ctrl'
      }
    }
  })

  .state('tabsController.railfenceQuiz2Question3', {
    url: '/page140',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz2Question3.html',
        controller: 'railfenceQuiz2Question3Ctrl'
      }
    }
  })

  .state('tabsController.railfenceQuiz2Question4', {
    url: '/page141',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz2Question4.html',
        controller: 'railfenceQuiz2Question4Ctrl'
      }
    }
  })

  .state('tabsController.railfenceQuiz2Question5', {
    url: '/page142',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz2Question5.html',
        controller: 'railfenceQuiz2Question5Ctrl'
      }
    }
  })

  .state('railfenceQuiz2Congrats', {
    url: '/page143',
    templateUrl: 'templates/railfenceQuiz2Congrats.html',
    controller: 'railfenceQuiz2CongratsCtrl'
  })

  .state('tabsController.caesarCipherDefaultPage', {
    url: '/page144',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCipherDefaultPage.html',
        controller: 'caesarCipherDefaultPageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page3')

  

});