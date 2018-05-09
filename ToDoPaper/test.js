// Adding items
var newItem = {
	'text' : "Check emails",
	completed : true,
	id : 1
};

var newItem2 = {
	'text' : "Feed the dog",
	completed : false,
	id : 2
};

var newItem3 = {
	text: "test test",
	completed : false,
	id : 3
};
var newItem4 = {
	text: "test test",
	completed : false,
	id : 4
};
var newItem5 = {
	text: "test test",
	completed : true,
	id : 5
};




addTodoItem(newItem);
addTodoItem(newItem2);
addTodoItem(newItem3);
addTodoItem(newItem4);
addTodoItem(newItem5);



setTimeout(()=>{viewTodoList('not_completed')}, 1000);
setTimeout(()=>{viewTodoList('completed')}, 2000);
setTimeout(()=>{viewTodoList('all')}, 3000);

setTimeout(()=>{editTodoItem(1, 'Check docs')}, 4000);
setTimeout(()=>{deleteTodoItem(5)}, 5000);


