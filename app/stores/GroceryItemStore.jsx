"use strict";

var dispatcher = require("./../dispatcher.js");

function GroceryItemStore(){
	
	let groceryItems = [{
			name:"Oats",
			purchased:false,
			price:3.00,				
		},{
			name:"Milk",
			purchased:true,
			price:7.00,				
		},{
			name:"Bread",
			purchased:false,
			price:2.00,				
		}],
		changeListeners = [];
		
	function triggerListeners(){
		changeListeners.forEach(function(listener){
			listener(groceryItems)	;
		})
	};
	
	function getGroceryItems(){
		return groceryItems;
	};
	
	function onChange(listener){
		changeListeners.push(listener);		
	}
	
	dispatcher.register(function(payload){
		console.log("Store got payload...",payload);
	})
	
  
	return {
		getGroceryItems:getGroceryItems,
		onChange:onChange
	}
}

module.exports = new GroceryItemStore();