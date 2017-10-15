var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

var filterArray = numberArray.filter(function(value) {
	return value > 5;
});

console.log('filter array: ', filterArray);

var shoppingList = [
  'apple', 'cinemon', 'applecoffee', 'peach', 'applepeach'
];
var searchValue = 'peach';

function containsFilter(value) {
	return value.indexOf(searchValue) !== -1;
}

console.log('filtered shopping list:', shoppingList.filter(containsFilter));