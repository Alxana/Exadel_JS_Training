function addTodoItemDom(todoItem) {
	const list = document.getElementById("todo-items");
	const itemHtml = getToDoItemHtml(todoItem);
	const item = document.createElement("div");
	item.setAttribute("id", todoItem.id);
	item.innerHTML = itemHtml;
	
	if (list.firstChild) {
		list.insertBefore(item, list.firstChild);
	} else {
		list.appendChild(item);
	}
}
 
function getToDoItemHtml(todoItem) {
	let itemHtml = `<span class="item-id">${todoItem.id}</span>`;
	itemHtml += `<span class="item-text">${todoItem.text}</span>`;
	itemHtml += `<span><input type="checkbox"/></span>`;
	
	if (todoItem.completed) {
		itemHtml = `<del>${itemHtml}</del>`;
	}
	return itemHtml;
}


function viewTodoListDom(itemsType = 'all') {
	const list = document.getElementById("todo-items");
	list.innerHTML = "";
	const filteredList = filterTodoList(itemsType);
	for(let i = 0; i < filteredList.length; i++) {
		addTodoItemDom(filteredList[i]);
	}
	
}

function editTodoItemDom(todoItemId, newText) {
	const item = document.getElementById(todoItemId);
	
	if (item) {
		item.getElementsByClassName('item-text')[0].innerHTML = newText;
	}
}

function deleteTodoItemDom(todoItemId) {
	const list = document.getElementById("todo-items");
	const item = document.getElementById(todoItemId);
	list.removeChild(item);
}