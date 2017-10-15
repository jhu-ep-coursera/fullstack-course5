//**  Prototypal inheritance
// var parent = {
//   value: "parentValue",
//   obj: {
//     objValue: "parentObjValue"
//   },
//   walk: function () {
//     console.log("walking!");
//   }
// };
//
// var child = Object.create(parent);
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// child.value = "childValue";
// child.obj.objValue = "childObjValue";
// console.log("*** CHANGED: child.value = 'childValue'");
// console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);
//
// var grandChild = Object.create(child);
// console.log("Grandchild: ", grandChild);
// grandChild.walk();

//** Function constructors
// See my other course: HTML, CSS, and Javascript for Web Developers
// Lecture #48
// function Dog(name) {
//   this.name = name;
//   console.log("'this' is: ", this);
// }
//
// var myDog = new Dog("Max");
// console.log("myDog: ", myDog);
//
// // Not being used as a function constructor
// Dog("Max2");


var parent = {
	value: 'parentValue',
	obj: {
		objValue: 'parentObjValue'
	},
	object: {
		stuff: 'parentStuff'
	},
	walk: function() {
		console.log('Walking!');
	}
};

var child = Object.create(parent);
/*console.log('child.value', child.value);
console.log('child.objValue', child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);*/

child.value = 'child';
child.obj.objValue = 'childObjValue';
child.object = {
	stuff: 'childStuff'
};
/*console.log('child.value', child.value);
console.log('child.objValue', child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log('Parent - parent.object', parent.object);
console.log('Child - child.object', child.object);
console.log('child', child);
console.log('parent', parent);

var grandChild = Object.create(child);
grandChild.walk();
console.log('grandchild', grandChild);

function Dog(name) {
	this.name = name;
	this.walk = function() {
		console.log('walking!');
	}
	console.log("'this' is ", this);
}

var Max = new Dog('Max');
Max.walk();
console.log('Dog Max ', Max);

var Mary = Dog('Mary');
window.walk();
*/

var student1 = {
	message : 'hi!'
}

var student2 = Object.create(student1);
student2.getMessage = function() {
	student2.message = 'hello!';
	console.log(this);
}
student2.getMessage();