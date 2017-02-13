var app = angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('main', {
            url: '',
            abstract: true,
            templateUrl: 'src/templates/main.html'
        })

        .state('home', {
            parent: 'main',
            url: '/home',
            templateUrl: 'src/templates/home.html'
        })
        .state('portfolio', {
            parent: 'main',
            url: '/portfolio',
            templateUrl: 'src/templates/portfolio.html',
            controller: 'PortfolioCtrl'
        })
        .state('resume', {
            parent: 'main',
            url: '/resume',
            templateUrl: 'src/templates/resume.html',
            controller: 'ResumeCtrl'
        })
        .state('about', {
            parent: 'main',
            url: '/about',
            templateUrl: 'src/templates/about.html'
        })

        .state('demo', {
            url: '/demo',
            templateUrl: 'src/templates/demo.html',
            controller: 'DemoCtrl'
        })

        .state('vestly', {
            url: '/vestly',
            component: 'vestly'
        });
});
