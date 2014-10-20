angular.module('knowifyTestApp')
	.run(function($httpBackend) {
		$httpBackend.whenGET('/api/companies/').respond(
			[
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
		    ]
		);

		$httpBackend.whenGET('views/main.html').passThrough();
	});