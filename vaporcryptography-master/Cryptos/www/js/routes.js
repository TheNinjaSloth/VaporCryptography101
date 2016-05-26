angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarDefaultPage'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarDefaultPage');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.caesarDefaultPage', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarDefaultPage.html',
        controller: 'caesarDefaultPageCtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarDefaultPage.html',
        controller: 'caesarDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.railFenceDefaultPage', {
    url: '/page168',
    views: {
      'tab2': {
        templateUrl: 'templates/railFenceDefaultPage.html',
        controller: 'railFenceDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionDefaultPage', {
    url: '/page170',
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

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarCipherDefinition'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarCipherDefinition');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
  */
  .state('tabsController.caesarCipherDefinition', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCipherDefinition.html',
        controller: 'caesarCipherDefinitionCtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarCipherDefinition.html',
        controller: 'caesarCipherDefinitionCtrl'
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

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarCipherExample'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarCipherExample');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
  */
  .state('tabsController.caesarCipherExample', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCipherExample.html',
        controller: 'caesarCipherExampleCtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarCipherExample.html',
        controller: 'caesarCipherExampleCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarCipherExampleEncrypted'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarCipherExampleEncrypted');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page9
      /page1/tab2/page9
  */
  .state('tabsController.caesarCipherExampleEncrypted', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCipherExampleEncrypted.html',
        controller: 'caesarCipherExampleEncryptedCtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarCipherExampleEncrypted.html',
        controller: 'caesarCipherExampleEncryptedCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarCipherExampleDecrypted'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarCipherExampleDecrypted');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab2/page10
  */
  .state('tabsController.caesarCipherExampleDecrypted', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCipherExampleDecrypted.html',
        controller: 'caesarCipherExampleDecryptedCtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarCipherExampleDecrypted.html',
        controller: 'caesarCipherExampleDecryptedCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarCipherPractice'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarCipherPractice');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page11
      /page1/tab2/page11
  */
  .state('tabsController.caesarCipherPractice', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCipherPractice.html',
        controller: 'caesarCipherPracticeCtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarCipherPractice.html',
        controller: 'caesarCipherPracticeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice1Question1'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice1Question1');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page12
      /page1/tab2/page12
  */
  .state('tabsController.caesarPractice1Question1', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question1.html',
        controller: 'caesarPractice1Question1Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice1Question1.html',
        controller: 'caesarPractice1Question1Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice1Question1A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice1Question1A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page43
      /page1/tab2/page43
  */
  .state('tabsController.caesarPractice1Question1A', {
    url: '/page43',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question1A.html',
        controller: 'caesarPractice1Question1ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice1Question1A.html',
        controller: 'caesarPractice1Question1ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice1Question2'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice1Question2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page14
      /page1/tab2/page14
  */
  .state('tabsController.caesarPractice1Question2', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question2.html',
        controller: 'caesarPractice1Question2Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice1Question2.html',
        controller: 'caesarPractice1Question2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice1Question2A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice1Question2A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page44
      /page1/tab2/page44
  */
  .state('tabsController.caesarPractice1Question2A', {
    url: '/page44',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question2A.html',
        controller: 'caesarPractice1Question2ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice1Question2A.html',
        controller: 'caesarPractice1Question2ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice1Question3'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice1Question3');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page15
      /page1/tab2/page15
  */
  .state('tabsController.caesarPractice1Question3', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question3.html',
        controller: 'caesarPractice1Question3Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice1Question3.html',
        controller: 'caesarPractice1Question3Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice1Question3A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice1Question3A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page45
      /page1/tab2/page45
  */
  .state('tabsController.caesarPractice1Question3A', {
    url: '/page45',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question3A.html',
        controller: 'caesarPractice1Question3ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice1Question3A.html',
        controller: 'caesarPractice1Question3ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice1Question4'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice1Question4');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page16
      /page1/tab2/page16
  */
  .state('tabsController.caesarPractice1Question4', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question4.html',
        controller: 'caesarPractice1Question4Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice1Question4.html',
        controller: 'caesarPractice1Question4Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice1Question4A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice1Question4A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page46
      /page1/tab2/page46
  */
  .state('tabsController.caesarPractice1Question4A', {
    url: '/page46',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question4A.html',
        controller: 'caesarPractice1Question4ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice1Question4A.html',
        controller: 'caesarPractice1Question4ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice1Question5'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice1Question5');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page17
      /page1/tab2/page17
  */
  .state('tabsController.caesarPractice1Question5', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question5.html',
        controller: 'caesarPractice1Question5Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice1Question5.html',
        controller: 'caesarPractice1Question5Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice1Question5A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice1Question5A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page47
      /page1/tab2/page47
  */
  .state('tabsController.caesarPractice1Question5A', {
    url: '/page47',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice1Question5A.html',
        controller: 'caesarPractice1Question5ACtrl'
      },
      'tab2': {
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
      /page1/tab3/page13
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
      },
      'tab3': {
        templateUrl: 'templates/congratulations.html',
        controller: 'congratulationsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice2Question1'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice2Question1');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page18
      /page1/tab2/page18
  */
  .state('tabsController.caesarPractice2Question1', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question1.html',
        controller: 'caesarPractice2Question1Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice2Question1.html',
        controller: 'caesarPractice2Question1Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice2Question1A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice2Question1A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page48
      /page1/tab2/page48
  */
  .state('tabsController.caesarPractice2Question1A', {
    url: '/page48',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question1A.html',
        controller: 'caesarPractice2Question1ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice2Question1A.html',
        controller: 'caesarPractice2Question1ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice2Question2'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice2Question2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page20
      /page1/tab2/page20
  */
  .state('tabsController.caesarPractice2Question2', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question2.html',
        controller: 'caesarPractice2Question2Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice2Question2.html',
        controller: 'caesarPractice2Question2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice2Question2A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice2Question2A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page49
      /page1/tab2/page49
  */
  .state('tabsController.caesarPractice2Question2A', {
    url: '/page49',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question2A.html',
        controller: 'caesarPractice2Question2ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice2Question2A.html',
        controller: 'caesarPractice2Question2ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice2Question3'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice2Question3');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page21
      /page1/tab2/page21
  */
  .state('tabsController.caesarPractice2Question3', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question3.html',
        controller: 'caesarPractice2Question3Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice2Question3.html',
        controller: 'caesarPractice2Question3Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice2Question3A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice2Question3A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page50
      /page1/tab2/page50
  */
  .state('tabsController.caesarPractice2Question3A', {
    url: '/page50',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question3A.html',
        controller: 'caesarPractice2Question3ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice2Question3A.html',
        controller: 'caesarPractice2Question3ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice2Question4'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice2Question4');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page22
      /page1/tab2/page22
  */
  .state('tabsController.caesarPractice2Question4', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question4.html',
        controller: 'caesarPractice2Question4Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice2Question4.html',
        controller: 'caesarPractice2Question4Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice2Question4A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice2Question4A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page51
      /page1/tab2/page51
  */
  .state('tabsController.caesarPractice2Question4A', {
    url: '/page51',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question4A.html',
        controller: 'caesarPractice2Question4ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice2Question4A.html',
        controller: 'caesarPractice2Question4ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice2Question5'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice2Question5');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page23
      /page1/tab2/page23
  */
  .state('tabsController.caesarPractice2Question5', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question5.html',
        controller: 'caesarPractice2Question5Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice2Question5.html',
        controller: 'caesarPractice2Question5Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice2Question5A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice2Question5A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page52
      /page1/tab2/page52
  */
  .state('tabsController.caesarPractice2Question5A', {
    url: '/page52',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice2Question5A.html',
        controller: 'caesarPractice2Question5ACtrl'
      },
      'tab2': {
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

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice4Question1'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice4Question1');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page30
      /page1/tab2/page30
  */
  .state('tabsController.caesarPractice4Question1', {
    url: '/page30',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question1.html',
        controller: 'caesarPractice4Question1Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice4Question1.html',
        controller: 'caesarPractice4Question1Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice4Question1A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice4Question1A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page58
      /page1/tab2/page58
  */
  .state('tabsController.caesarPractice4Question1A', {
    url: '/page58',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question1A.html',
        controller: 'caesarPractice4Question1ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice4Question1A.html',
        controller: 'caesarPractice4Question1ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice4Question2'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice4Question2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page32
      /page1/tab2/page32
  */
  .state('tabsController.caesarPractice4Question2', {
    url: '/page32',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question2.html',
        controller: 'caesarPractice4Question2Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice4Question2.html',
        controller: 'caesarPractice4Question2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice4Question2A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice4Question2A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page59
      /page1/tab2/page59
  */
  .state('tabsController.caesarPractice4Question2A', {
    url: '/page59',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question2A.html',
        controller: 'caesarPractice4Question2ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice4Question2A.html',
        controller: 'caesarPractice4Question2ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice4Question3'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice4Question3');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page33
      /page1/tab2/page33
  */
  .state('tabsController.caesarPractice4Question3', {
    url: '/page33',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question3.html',
        controller: 'caesarPractice4Question3Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice4Question3.html',
        controller: 'caesarPractice4Question3Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice4Question3A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice4Question3A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page60
      /page1/tab2/page60
  */
  .state('tabsController.caesarPractice4Question3A', {
    url: '/page60',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question3A.html',
        controller: 'caesarPractice4Question3ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice4Question3A.html',
        controller: 'caesarPractice4Question3ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice4Question4'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice4Question4');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page34
      /page1/tab2/page34
  */
  .state('tabsController.caesarPractice4Question4', {
    url: '/page34',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question4.html',
        controller: 'caesarPractice4Question4Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice4Question4.html',
        controller: 'caesarPractice4Question4Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice4Question4A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice4Question4A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page61
      /page1/tab2/page61
  */
  .state('tabsController.caesarPractice4Question4A', {
    url: '/page61',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question4A.html',
        controller: 'caesarPractice4Question4ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice4Question4A.html',
        controller: 'caesarPractice4Question4ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice4Question5'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice4Question5');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page35
      /page1/tab2/page35
  */
  .state('tabsController.caesarPractice4Question5', {
    url: '/page35',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question5.html',
        controller: 'caesarPractice4Question5Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice4Question5.html',
        controller: 'caesarPractice4Question5Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice4Question5A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice4Question5A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page62
      /page1/tab2/page62
  */
  .state('tabsController.caesarPractice4Question5A', {
    url: '/page62',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice4Question5A.html',
        controller: 'caesarPractice4Question5ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice4Question5A.html',
        controller: 'caesarPractice4Question5ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice5Question1'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice5Question1');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page38
      /page1/tab2/page38
  */
  .state('tabsController.caesarPractice5Question1', {
    url: '/page38',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question1.html',
        controller: 'caesarPractice5Question1Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice5Question1.html',
        controller: 'caesarPractice5Question1Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice5Question1A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice5Question1A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page63
      /page1/tab2/page63
  */
  .state('tabsController.caesarPractice5Question1A', {
    url: '/page63',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question1A.html',
        controller: 'caesarPractice5Question1ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice5Question1A.html',
        controller: 'caesarPractice5Question1ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice5Question2'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice5Question2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page39
      /page1/tab2/page39
  */
  .state('tabsController.caesarPractice5Question2', {
    url: '/page39',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question2.html',
        controller: 'caesarPractice5Question2Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice5Question2.html',
        controller: 'caesarPractice5Question2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice5Question2A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice5Question2A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page64
      /page1/tab2/page64
  */
  .state('tabsController.caesarPractice5Question2A', {
    url: '/page64',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question2A.html',
        controller: 'caesarPractice5Question2ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice5Question2A.html',
        controller: 'caesarPractice5Question2ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice5Question3'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice5Question3');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page40
      /page1/tab2/page40
  */
  .state('tabsController.caesarPractice5Question3', {
    url: '/page40',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question3.html',
        controller: 'caesarPractice5Question3Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice5Question3.html',
        controller: 'caesarPractice5Question3Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice5Question3A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice5Question3A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page65
      /page1/tab2/page65
  */
  .state('tabsController.caesarPractice5Question3A', {
    url: '/page65',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question3A.html',
        controller: 'caesarPractice5Question3ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice5Question3A.html',
        controller: 'caesarPractice5Question3ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice5Question4'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice5Question4');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page41
      /page1/tab2/page41
  */
  .state('tabsController.caesarPractice5Question4', {
    url: '/page41',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question4.html',
        controller: 'caesarPractice5Question4Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice5Question4.html',
        controller: 'caesarPractice5Question4Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice5Question4A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice5Question4A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page66
      /page1/tab2/page66
  */
  .state('tabsController.caesarPractice5Question4A', {
    url: '/page66',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question4A.html',
        controller: 'caesarPractice5Question4ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice5Question4A.html',
        controller: 'caesarPractice5Question4ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice5Question5'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice5Question5');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page42
      /page1/tab2/page42
  */
  .state('tabsController.caesarPractice5Question5', {
    url: '/page42',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question5.html',
        controller: 'caesarPractice5Question5Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice5Question5.html',
        controller: 'caesarPractice5Question5Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarPractice5Question5A'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarPractice5Question5A');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page67
      /page1/tab2/page67
  */
  .state('tabsController.caesarPractice5Question5A', {
    url: '/page67',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarPractice5Question5A.html',
        controller: 'caesarPractice5Question5ACtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarPractice5Question5A.html',
        controller: 'caesarPractice5Question5ACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarCipherQuiz'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarCipherQuiz');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page19
      /page1/tab2/page19
  */
  .state('tabsController.caesarCipherQuiz', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarCipherQuiz.html',
        controller: 'caesarCipherQuizCtrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarCipherQuiz.html',
        controller: 'caesarCipherQuizCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarQuiz1Question1'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarQuiz1Question1');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page37
      /page1/tab2/page37
  */
  .state('tabsController.caesarQuiz1Question1', {
    url: '/page37',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarQuiz1Question1.html',
        controller: 'caesarQuiz1Question1Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarQuiz1Question1.html',
        controller: 'caesarQuiz1Question1Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarQuiz1Question2'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarQuiz1Question2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page68
      /page1/tab2/page68
  */
  .state('tabsController.caesarQuiz1Question2', {
    url: '/page68',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarQuiz1Question2.html',
        controller: 'caesarQuiz1Question2Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarQuiz1Question2.html',
        controller: 'caesarQuiz1Question2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarQuiz1Question3'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarQuiz1Question3');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page69
      /page1/tab2/page69
  */
  .state('tabsController.caesarQuiz1Question3', {
    url: '/page69',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarQuiz1Question3.html',
        controller: 'caesarQuiz1Question3Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarQuiz1Question3.html',
        controller: 'caesarQuiz1Question3Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarQuiz1Question4'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarQuiz1Question4');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page70
      /page1/tab2/page70
  */
  .state('tabsController.caesarQuiz1Question4', {
    url: '/page70',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarQuiz1Question4.html',
        controller: 'caesarQuiz1Question4Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/caesarQuiz1Question4.html',
        controller: 'caesarQuiz1Question4Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.caesarQuiz1Question5'
      2) Using $state.go programatically:
        $state.go('tabsController.caesarQuiz1Question5');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page71
      /page1/tab2/page71
  */
  .state('tabsController.caesarQuiz1Question5', {
    url: '/page71',
    views: {
      'tab1': {
        templateUrl: 'templates/caesarQuiz1Question5.html',
        controller: 'caesarQuiz1Question5Ctrl'
      },
      'tab2': {
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

  .state('tabsController.railfenceQuiz2Congrats', {
    url: '/page143',
    views: {
      'tab2': {
        templateUrl: 'templates/railfenceQuiz2Congrats.html',
        controller: 'railfenceQuiz2CongratsCtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice', {
    url: '/page149',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice.html',
        controller: 'routeTranspositionPracticeCtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice1Question1', {
    url: '/page150',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice1Question1.html',
        controller: 'routeTranspositionPractice1Question1Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice1Question1A', {
    url: '/page145',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice1Question1A.html',
        controller: 'routeTranspositionPractice1Question1ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice1Question2', {
    url: '/page146',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice1Question2.html',
        controller: 'routeTranspositionPractice1Question2Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice1Question2A', {
    url: '/page147',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice1Question2A.html',
        controller: 'routeTranspositionPractice1Question2ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice1Question3', {
    url: '/page148',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice1Question3.html',
        controller: 'routeTranspositionPractice1Question3Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice1Question3A', {
    url: '/page151',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice1Question3A.html',
        controller: 'routeTranspositionPractice1Question3ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice1Question4', {
    url: '/page153',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice1Question4.html',
        controller: 'routeTranspositionPractice1Question4Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice1Question4A', {
    url: '/page154',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice1Question4A.html',
        controller: 'routeTranspositionPractice1Question4ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice1Question5', {
    url: '/page152',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice1Question5.html',
        controller: 'routeTranspositionPractice1Question5Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice1Question5A', {
    url: '/page155',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice1Question5A.html',
        controller: 'routeTranspositionPractice1Question5ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice2Question1', {
    url: '/page157',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice2Question1.html',
        controller: 'routeTranspositionPractice2Question1Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice2Question1A', {
    url: '/page158',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice2Question1A.html',
        controller: 'routeTranspositionPractice2Question1ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice2Question2', {
    url: '/page159',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice2Question2.html',
        controller: 'routeTranspositionPractice2Question2Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice2Question2A', {
    url: '/page160',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice2Question2A.html',
        controller: 'routeTranspositionPractice2Question2ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice2Question3', {
    url: '/page161',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice2Question3.html',
        controller: 'routeTranspositionPractice2Question3Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice2Question3A', {
    url: '/page162',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice2Question3A.html',
        controller: 'routeTranspositionPractice2Question3ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice2Question4', {
    url: '/page163',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice2Question4.html',
        controller: 'routeTranspositionPractice2Question4Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice2Question4A', {
    url: '/page164',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice2Question4A.html',
        controller: 'routeTranspositionPractice2Question4ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice2Question5', {
    url: '/page165',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice2Question5.html',
        controller: 'routeTranspositionPractice2Question5Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice2Question5A', {
    url: '/page166',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice2Question5A.html',
        controller: 'routeTranspositionPractice2Question5ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice3Question1', {
    url: '/page171',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice3Question1.html',
        controller: 'routeTranspositionPractice3Question1Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice3Question1A', {
    url: '/page172',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice3Question1A.html',
        controller: 'routeTranspositionPractice3Question1ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice3Question2', {
    url: '/page169',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice3Question2.html',
        controller: 'routeTranspositionPractice3Question2Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice3Question2A', {
    url: '/page173',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice3Question2A.html',
        controller: 'routeTranspositionPractice3Question2ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice3Question3', {
    url: '/page174',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice3Question3.html',
        controller: 'routeTranspositionPractice3Question3Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice3Question3A', {
    url: '/page175',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice3Question3A.html',
        controller: 'routeTranspositionPractice3Question3ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice3Question4', {
    url: '/page177',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice3Question4.html',
        controller: 'routeTranspositionPractice3Question4Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice3Question4A', {
    url: '/page178',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice3Question4A.html',
        controller: 'routeTranspositionPractice3Question4ACtrl'
      }
    }
  })

  .state('routeTranspositionPractice3Question5', {
    url: '/page179',
    templateUrl: 'templates/routeTranspositionPractice3Question5.html',
    controller: 'routeTranspositionPractice3Question5Ctrl'
  })

  .state('routeTranspositionPractice3Question5A', {
    url: '/page180',
    templateUrl: 'templates/routeTranspositionPractice3Question5A.html',
    controller: 'routeTranspositionPractice3Question5ACtrl'
  })

  .state('tabsController.routeTranspositionPractice4Question1', {
    url: '/page181',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice4Question1.html',
        controller: 'routeTranspositionPractice4Question1Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice4Question1A', {
    url: '/page182',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice4Question1A.html',
        controller: 'routeTranspositionPractice4Question1ACtrl'
      }
    }
  })

  .state('routeTranspositionPractice4Question2', {
    url: '/page183',
    templateUrl: 'templates/routeTranspositionPractice4Question2.html',
    controller: 'routeTranspositionPractice4Question2Ctrl'
  })

  .state('routeTranspositionPractice4Question2A', {
    url: '/page176',
    templateUrl: 'templates/routeTranspositionPractice4Question2A.html',
    controller: 'routeTranspositionPractice4Question2ACtrl'
  })

  .state('routeTranspositionPractice4Question3', {
    url: '/page184',
    templateUrl: 'templates/routeTranspositionPractice4Question3.html',
    controller: 'routeTranspositionPractice4Question3Ctrl'
  })

  .state('routeTranspositionPractice4Question3A', {
    url: '/page185',
    templateUrl: 'templates/routeTranspositionPractice4Question3A.html',
    controller: 'routeTranspositionPractice4Question3ACtrl'
  })

  .state('routeTranspositionPractice4Question4', {
    url: '/page186',
    templateUrl: 'templates/routeTranspositionPractice4Question4.html',
    controller: 'routeTranspositionPractice4Question4Ctrl'
  })

  .state('routeTranspositionPractice4Question4A', {
    url: '/page187',
    templateUrl: 'templates/routeTranspositionPractice4Question4A.html',
    controller: 'routeTranspositionPractice4Question4ACtrl'
  })

  .state('routeTranspositionPractice4Question5', {
    url: '/page188',
    templateUrl: 'templates/routeTranspositionPractice4Question5.html',
    controller: 'routeTranspositionPractice4Question5Ctrl'
  })

  .state('routeTranspositionPractice4Question5A', {
    url: '/page189',
    templateUrl: 'templates/routeTranspositionPractice4Question5A.html',
    controller: 'routeTranspositionPractice4Question5ACtrl'
  })

  .state('tabsController.routeTranspositionPractice5Question1', {
    url: '/page190',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice5Question1.html',
        controller: 'routeTranspositionPractice5Question1Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice5Question1A', {
    url: '/page191',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice5Question1A.html',
        controller: 'routeTranspositionPractice5Question1ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice5Question2', {
    url: '/page192',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice5Question2.html',
        controller: 'routeTranspositionPractice5Question2Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice5Question2A', {
    url: '/page193',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice5Question2A.html',
        controller: 'routeTranspositionPractice5Question2ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice5Question3', {
    url: '/page194',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice5Question3.html',
        controller: 'routeTranspositionPractice5Question3Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice5Question3A', {
    url: '/page195',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice5Question3A.html',
        controller: 'routeTranspositionPractice5Question3ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice5Question4', {
    url: '/page196',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice5Question4.html',
        controller: 'routeTranspositionPractice5Question4Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice5Question4A', {
    url: '/page197',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice5Question4A.html',
        controller: 'routeTranspositionPractice5Question4ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice5Question5', {
    url: '/page198',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice5Question5.html',
        controller: 'routeTranspositionPractice5Question5Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionPractice5Question5A', {
    url: '/page199',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionPractice5Question5A.html',
        controller: 'routeTranspositionPractice5Question5ACtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz1Question1', {
    url: '/page200',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz1Question1.html',
        controller: 'routeTranspositionQuiz1Question1Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz1Question2', {
    url: '/page201',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz1Question2.html',
        controller: 'routeTranspositionQuiz1Question2Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz1Question3', {
    url: '/page202',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz1Question3.html',
        controller: 'routeTranspositionQuiz1Question3Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz1Question4', {
    url: '/page203',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz1Question4.html',
        controller: 'routeTranspositionQuiz1Question4Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz1Question5', {
    url: '/page205',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz1Question5.html',
        controller: 'routeTranspositionQuiz1Question5Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz2Question1', {
    url: '/page204',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz2Question1.html',
        controller: 'routeTranspositionQuiz2Question1Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz2Question2', {
    url: '/page207',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz2Question2.html',
        controller: 'routeTranspositionQuiz2Question2Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz2Question3', {
    url: '/page209',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz2Question3.html',
        controller: 'routeTranspositionQuiz2Question3Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz2Question4', {
    url: '/page210',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz2Question4.html',
        controller: 'routeTranspositionQuiz2Question4Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz2Question5', {
    url: '/page211',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz2Question5.html',
        controller: 'routeTranspositionQuiz2Question5Ctrl'
      }
    }
  })

  .state('tabsController.routeTranspositionExample', {
    url: '/page156',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionExample.html',
        controller: 'routeTranspositionExampleCtrl'
      }
    }
  })

  .state('routeTranspositionExampleDecrypted', {
    url: '/page218',
    templateUrl: 'templates/routeTranspositionExampleDecrypted.html',
    controller: 'routeTranspositionExampleDecryptedCtrl'
  })

  .state('tabsController.routeTranspositionExampleEncrypted', {
    url: '/page217',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionExampleEncrypted.html',
        controller: 'routeTranspositionExampleEncryptedCtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz1Congratz', {
    url: '/page212',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz1Congratz.html',
        controller: 'routeTranspositionQuiz1CongratzCtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz2Congratz', {
    url: '/page214',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz2Congratz.html',
        controller: 'routeTranspositionQuiz2CongratzCtrl'
      }
    }
  })

  .state('tabsController.routeTranspositionQuiz', {
    url: '/page215',
    views: {
      'tab3': {
        templateUrl: 'templates/routeTranspositionQuiz.html',
        controller: 'routeTranspositionQuizCtrl'
      }
    }
  })

  .state('startup', {
    url: '/page208',
    templateUrl: 'templates/startup.html',
    controller: 'startupCtrl'
  })

$urlRouterProvider.otherwise('/page208')

  

});