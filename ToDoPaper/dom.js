function addTodoItemDom(todoItem) {
	const list = document.getElementById("todo-items");
	const itemHtml = getToDoItemHtml(todoItem);
	const item = document.createElement("div");
	item.setAttribute("id", todoItem.id);
	if (todoItem.completed) {
		item.setAttribute("class", "item-completed");	
	}
	item.innerHTML = itemHtml;
	
	if (list.firstChild) {
		list.insertBefore(item, list.firstChild);
	} else {
		list.appendChild(item);
	}
}
 
function getToDoItemHtml(todoItem) {
	let itemHtml = `<span class="item-id">${todoItem.id}</span>
		<span class="item-text">${todoItem.text}</span>
		<input class="item-complete" ${todoItem.completed ? 'checked' : ''} type="checkbox"/>
		<input class="item-edit" type="submit" value="Edit"/>
		<input class="item-delete" type="submit" value="Delete"/>`
	return itemHtml;
}


function viewTodoListDom(items) {
	const list = document.getElementById("todo-items");
	list.innerHTML = "";
	for(let i = 0; i < items.length; i++) {
		addTodoItemDom(items[i]);
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

function initFilter() {
	const filterBlock = document.getElementById("todo-items-filter");
	filterBlock.addEventListener('click', () => {
		changeItemsbyFilter();
	})
}

function changeItemsbyFilter() {
	const isCompleted = document.getElementById("filter-completed").checked;
		const isNotCompleted = document.getElementById("filter-not-completed").checked;
		
		let itemsType = "";
		if (isCompleted && isNotCompleted) {
			itemsType = "all";
		} else if (isCompleted && !isNotCompleted) {
			itemsType = "completed";
		} else if (!isCompleted && isNotCompleted) {
			itemsType = "not_completed";
		}
		
		viewTodoList(itemsType);
}

function initAddItemBlock() {
	const addItemSubmit = document.getElementById("add-item-submit");
	const addItemInput = document.getElementById("add-item-text");
	addItemSubmit.addEventListener('click', addNewItem);
	addItemInput.addEventListener('keypress', (event) => {
		if (event.keyCode == 13) {
			addNewItem();
		}
	});
}

function initListActions() {
	const list = document.getElementById("todo-items");
	list.addEventListener('click', (event) => {
		if (event.target.className === "item-delete") {
			deleteTodoItem(event.target.parentNode.id);
		} else if (event.target.className === "item-complete") {
			if (!event.target.checked) {
				event.preventDefault();
			} else {
				completeTodoItem(event.target.parentNode.id);
			}
		} else if (event.target.className === "item-edit") {
			changeItemsbyFilter();	
			showEditFormDom(event.target.parentNode.id);
		} else if (event.target.className === "cancel-edit") {
			changeItemsbyFilter();
		} else if (event.target.className === "approve-edit") {
			const id = event.target.parentNode.id;
			const text = document.getElementById(`edit-item-text-${event.target.parentNode.id}`).value;	
			changeItemsbyFilter();
			editTodoItem(id, text);
		}
	})
}

function addNewItem() {
	const newItemTextBlock = document.getElementById("add-item-text");
	let newId = 1;
	
	if (todoItems.length) {
		newId = todoItems[todoItems.length - 1].id + 1;
	}
	
	addTodoItem({id: newId, text: newItemTextBlock.value, completed: false});
	newItemTextBlock.value = "";
}

function showEditFormDom(id) {
	
	const itemDom = document.getElementById(id);
	const existsItem = todoItems.find((item) => (item.id == id));
	itemDom.innerHTML = `<span>${existsItem.id}</span>
		<input id="edit-item-text-${existsItem.id}" type="text" value="${existsItem.text}"/>
		<input class="approve-edit" type="submit" value="Save"/>
		<input class="cancel-edit" type="submit" value="Cancel"/>`;
}


function initListDom() {
	viewTodoList("all");
	initFilter();
	initAddItemBlock();
	initListActions();
}
