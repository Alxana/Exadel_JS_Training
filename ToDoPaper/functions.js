function addTodoItem(todoItem) {
	if ((todoItem.text === "") || (todoItem.text === undefined)) {
		console.log("Text is empty. New item is not added");
		return false;
	}
	
	if (todoItem.completed === undefined) {
		console.log("Completed flag is missing. New item is not added");
		return false;
	}
	
	let isIdUnique = true;

	if (!todoItem.id) {
		console.log("Id is missing. New item is not added");
		return false;
	}
		
	isIdUnique = todoItems.filter((item) => (todoItem.id === item.id)).length > 0 ? false : true;
		
	if (isIdUnique) { 
		todoItems.push(todoItem);
		console.log("New item added successfully");
		console.log([...todoItems]);
		return true;
	} else {
		console.log("Id is not unique. New item is not added");
		return false;
	}
}




function viewTodoList(itemsType) {
    let filteredItems = [];

    if (itemsType == 'all') {
        filteredItems = todoItems;
    }

    if (itemsType === 'completed' || itemsType === 'not_completed') {
        filteredItems = todoItems.filter((item) => (
			itemsType === 'completed' ? item.completed === true : item.completed === false
        ))
    }

    return filteredItems
}
	
	
function changeToDoItem(todoItemId, property, value) {
	let result = false;
	if (property && value && todoItemId) {
		todoItems.forEach((item, index) => {
			if (todoItemId === item.id && item[property] != undefined) {
				todoItems[index][property] = value;
				result = true;
				console.log(`Item [id=${todoItemId}] was changed`);
				console.log([...todoItems]);
				return;
			}
		});
	}
	return result;
}	
	
function editTodoItem(todoItemId, newText) {
	return changeToDoItem(todoItemId, "text", newText);
}


function deleteTodoItem(todoItemId) {
	let result = false;
	if (todoItemId) {
		todoItems = todoItems.filter((item) => {
			let notDeletedItem = true;
			if (item.id === todoItemId){
				notDeletedItem = false;
				result = true;
			}
			return notDeletedItem;
		});
	}
	if (result) {
		console.log(`Item [id=${todoItemId}] was deleted`);
		console.log([...todoItems]);
	}
	return result;
}


function completeTodoItem(todoItemId) {
	return changeToDoItem(todoItemId, "completed", true);
}
	

