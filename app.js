(function() {
	var gems = [
				{
					name: "gemstone 1", 
					price: 2.65, 
					description: "This stone is really good...",
					canPurchase: true
				},
				{
					name: "gemstone 2", 
					price: 5.65, 
					description: "This stone is really good...",
					canPurchase: true
				}
			];
	var app = angular.module("gemstore", []);
	app.controller("StoreController", function() {
		this.products = gems;	
	});
})();