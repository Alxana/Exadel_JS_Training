function addTodoItem(todoItem) {
	if ((todoItem['text'] === "") || (todoItem['text'] === undefined)) {
		console.log("Text is empty");
		return false;
	}
	
	if (todoItem.completed === undefined) {
		console.log("Completed flag is missing");
		return false;
	}
	
	var isIdUnique = true;
	var ids = [];
	for(var i in todoItems) {
		ids.push(todoItems[i].id);
	}
	
	ids.forEach(function(item) {
		if (todoItem.id === item) {
			console.log("Id is not unique");
			isIdUnique = false;
		} else if (todoItem.id === undefined) {
			console.log("Id is missing");
			isIdUnique = false;
		}
	});
	
	if (isIdUnique) { 
		todoItems.push(todoItem);
		console.log("New item added successfully");
		return true;
	} else return false;
}




function viewTodoList(itemsType) {
    var filteredItems = [];

    if (itemsType == 'all') {
        filteredItems = todoItems;
    }

    if (itemsType === 'completed' || itemsType === 'not_completed') {
        filteredItems = todoItems.filter(function (item) {
			return itemsType === 'completed' ? item.completed === true : item.completed === false
        })
    }

    return filteredItems
}
	
	
function editTodoItem(todoItemId, newText) {
	var result = false;
	if (newText !== "" && newText !== undefined && todoItemId !== undefined) {
		todoItems = todoItems.map( function(item) {
			if (item.id === todoItemId) {
				result = true;
				item.text = newText;
			}
			return item;
		});
	}	
	return result;

}


function deleteTodoItem(todoItemId) {
	var result = false;
	if (todoItemId !== undefined) {
		todoItems = todoItems.filter(function(item) {
			var notDeletedItem = true;
			if (item.id === todoItemId){
				notDeletedItem = false;
				result = true;
			}
			return notDeletedItem;
		});
	}

	return result;
}


function completeTodoItem(todoItemId) {
	var result = false;
	if (todoItemId !== undefined) {
		todoItems = todoItems.map( function(item) {
			if (item.id === todoItemId) {
				result = true;
				item.completed = true;
			}
			return item;
		});
	}	
	return result;
}
	

