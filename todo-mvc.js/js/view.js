(function(window) {
 "use strict!";

function View(template) {
	this._template = template

	this.$todolist = document.querySelector('.todolist');
	this.$newTodo = document.querySelector('.newtodo');

}

View.prototype.onNewToDo = function () {
	var self = this
	this.$newTodo.addEventListener('change', function() {
		callback(self.$newTodo.value)
	});
}


window.app = window.app || {};
window.app.View = View;

})(window);
