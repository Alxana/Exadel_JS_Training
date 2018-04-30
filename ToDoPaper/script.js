var todoItems = [];


/* Tests */

// Adding items
var newItem = {
	'text' : "Check emails",
	completed : false,
	id : 1
};

var newItemEmptyText = {
	'text' : "",
	completed : false,
	id : 2
};

var newItemNoText = {
	completed : false,
	id : 3
};

var newItemNoCompleteField = {
	'text' : "Check emails",
	id : 4
};

var newItemDuplicateId = {
	text : "Check emails",
	completed : true,
	id : 1
};

addTodoItem(newItem);
addTodoItem(newItemEmptyText);
addTodoItem(newItemNoText);
addTodoItem(newItemNoCompleteField);
addTodoItem(newItemDuplicateId);
addTodoItem( {text:"new item 1", completed:true,id:2} );
addTodoItem( {text:"new item 2", completed:true,id:3} );
addTodoItem( {text:"new item 3", completed:false,id:4} );
addTodoItem( {text:"new item 4", completed:false,id:5} );
addTodoItem( {text:"new item 5", completed:false,id:6} );

console.log("todoItems: all items");
console.log(todoItems);

// view items by type
console.log("All completed Items:");
console.log(viewTodoList("completed"));
console.log("All not-completed Items:");
console.log(viewTodoList("not_completed"));
console.log("All Items:");
console.log(viewTodoList("all"));
console.log("Item type not valid:");
console.log(viewTodoList("not valid"));

//edit items
console.log("valid edit", editTodoItem(1, "text edited for id1"));
console.log("text is empty", editTodoItem(2, ""));
console.log("text is missing", editTodoItem(2));
console.log("no such id", editTodoItem(999, "test test")); 

console.log(todoItems);

//delete items
console.log("valid delete", deleteTodoItem(2));
console.log("no such id", deleteTodoItem(999));
console.log("id is missing", deleteTodoItem());

console.log(todoItems);

//complete items
console.log("valid complete for id 4", completeTodoItem(4));
console.log("valid complete for id 6", completeTodoItem(6));
console.log("no such id", completeTodoItem(999));
console.log("id is missing", completeTodoItem());

console.log(todoItems);

