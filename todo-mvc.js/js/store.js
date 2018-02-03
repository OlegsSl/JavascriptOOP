(function(window) {
"use strict!";

function Storage() {

	if (!localStorage.todo) {
		var data = {
			todos:[],
		};
		localStorage.todo = JSON.stringify(data);
	}
}

Storage.prototype.findAll = function(callback) {
	var todos = JSON.parse(localStorage.todo).todos;
	callback(todos);
}

Storage.prototype.save = function(data, callback) {
	var todos = JSON.parse(localStorage.todo).todos;
	data.ID = new Date().getTime();
	todos.push(data);
	localStorage.todo = JSON.stringify({data : todos});
	callback(data);
}

window.app = window.app || {};
window.app.Storage = Storage;
})(window);