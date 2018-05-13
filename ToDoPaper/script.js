var todoItems = [];
var initToDoItems = function() {
		$.getJSON( "ToDo_data.json", function(data) {
			console.log(data);	
			todoItems = data.data;
			initListDom();
		});
	};
	
initToDoItems();


