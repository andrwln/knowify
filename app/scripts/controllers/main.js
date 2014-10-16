'use strict';

/**
 * @ngdoc function
 * @name knowifyTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the knowifyTestApp
 */
angular.module('knowifyTestApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.companies = [
        {
            id: 1,
            name: "Fullstack Academy",
            contact: "Andrew Lin",
            address: "160 Pearl Street",
            email: "andrew.lin90@gmail.com",
            phone: "6264977166",
            url: "http://www.fullstackacademy.com"
        },
        {
            id: 2,
            name: "Knowify",
            contact: "Marc Visent",
            address: "2 Wall Street",
            email: "mvisent@knowify.com",
            phone: "1234567890",
            url: "http://www.knowify.com"  
        }
    ];
    // $http.get('/api/companies/').success(function(companies) {
    //     $scope.companies = companies;
    // });

    $scope.company = {};

    $scope.addCompany = function(form) {
        var check = form.email.$viewValue !== undefined && form.email.$valid || form.phone.$viewValue !== undefined && form.phone.$valid || form.website.$viewValue !== undefined && form.website.$valid;
        console.log('check: ', check);
        if (!check) {
            form.$valid = false;
            $scope.atLeast = true;
        }
        console.log(form);
        $scope.submitted = true;

        if(form.$valid) {
        	var newCompany = $scope.company;
        	newCompany.id = $scope.companies.length + 1;
        	$scope.companies.push(newCompany);
        	$scope.company = {};
            $scope.submitted = false;
        };
    };

    $scope.populateForm = function(company) {
        console.log(company);
        $scope.company = company;
    };

    $scope.clearForm = function() {
        $scope.company = {};
    };

  })
  .filter('phoneNumber', function() {
    return function(input) {
        input = input.toString();
        var first = input.slice(0,3);
        var second = input.slice(3,6);
        var third = input.slice(6);
        return '('+first+')'+' '+second+'-'+third;
    };
  });
