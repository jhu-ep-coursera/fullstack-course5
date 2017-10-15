(function() {
	'use strict';


	// // LIBRARY
 //    angular.module('returnMessage', [])
 //      .provider('messageService', () => {
 //      	return {
 //      		$get: () => {
 //      			const message = this.message;
 //      			return {
 //      				getMessage() {
 //      					return message;
 //      				}
 //      			}
 //      		},
 //      		message: 'Hello World'
 //      	}
 //      })

 //    // APP
 //    angular.module('jacobsApp', [])
 //      .config((messageServiceProvider) => {
 //      	messageServiceProvider.message = 'Hello Jacob';
 //      })
 //      .component('hello', {
 //      	controller: function HelloCtrl(messageService) {
 //      		this.message = messageService.getMessage();
 //      	},
 //      	template: '<span>{{$ctrl.message}}</span>'
 //      })


	angular.module('testApp', [])
	.controller('shoppingListController', shoppingListController)
	.provider('service', serviceProvider)
	.config(Config);

	Config.$inject = ['serviceProvider'];
	function Config(serviceProvider) {
		serviceProvider.config.maxItem = 3;
	}
    
    function serviceProvider() {
    	var service = this;
    	service.config = {
    		maxItem: 10,
    	};

    	service.$get = function() {
    		return new shoppingListService(service.config.maxItem);
    	};
    }

    function shoppingListService(maxItem) {
    	var service = this;
    	var items = [];
    	service.getItems = function() {
    		return items;
    	}

    	service.addItems = function(itemName, itemQuantity) {
    		if (items.length >= maxItem) {
    			throw new Error('Max items ' + maxItem + ' reached!');
    		}
    		var newItem = {
    			name: itemName,
    			quantity: itemQuantity,
    		};
    		items.push(newItem);
    	}; 

    	service.removeItem = function(index) {
    		items.splice(index, 1);
    	}
    }

    
	shoppingListController.$inject = ['service'];
	function shoppingListController(service) {
		var list1 = this;
		list1.itemName = "";
		list1.quantity="";
		list1.items = service.getItems();
		list1.errrMessage = "";

		list1.addItem = function() {
			try{
				service.addItems(list1.itemName, list1.quantity);
			}catch(error) {
				list1.errorMessage = "Error " + error.message;
			}
		};

		list1.removeItem = function(index) {
			service.removeItem(index);
			list1.errorMessage = "";
		}
	}
})();