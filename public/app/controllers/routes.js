angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: '/nav.html',
                        controller: 'navCtrl'
                    },
                    'content': {
                        templateUrl: '/home.html'
                    }
                }
            })

        // .state('app.login', {
        //     url: 'login',
        //     views: {
        //         'header': {
        //             templateUrl: '/nav.html',
        //             controller: 'navCtrl'
        //         },
        //         'content': {
        //             templateUrl: '/login.html',
        //             controller: 'loginCtrl'

        //         }
        //     }
        // })

        // .state('app.register', {
        //     url: 'register',
        //     views: {
        //         'content@': {
        //             templateUrl: 'register.html',
        //             controller: 'registerCtrl'
        //         }
        //     }

        // })


        .state('app.clients', {
            url: 'clients',
            views: {
                'content@': {
                    templateUrl: 'clients/clients.html',
                    // controller: 'clientsCtrl'                
                }
            }

        })

        .state('app.clients.new', {
            url: '/new',
            views: {
                'content@': {
                    templateUrl: 'clients/new.html',
                    // controller: 'clientsCtrl'                
                }
            }

        })

        // .state('app.dashboard', {
        //     url: 'dashboard',
        //     authenticate:true,
        //     views: {
        //         'content@': {
        //             templateUrl: 'users/dashboard.html',
        //             controller: 'dashboardCtrl'
        //         }
        //     }

        // })

        $locationProvider.html5Mode(true)

    });

// angular.module("app")
//     .run(function($rootScope, $state, auth) {
//         $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
//             if (toState.authenticate && !auth.isAuthenticated()) {
//                 // User isn’t authenticated
//                 $state.transitionTo("app.login");
//                 event.preventDefault();
//             }
//         });
//     });
