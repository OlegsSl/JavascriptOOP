(function(window) {
 "use strict!";

window.$delegate = function(target, selector , type , handler) {
	target.addEventListener(type, function(event) {
		var targetElement = event.target;
		var potentialElements = target.querySelectorAll(selector);
		var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

		if(hasMatch) {
			handler.call(targetElement, event);
		}
	});
}


function View(template) {
	this._template = template

	this.$todolist = document.querySelector('.todolist');
	this.$newTodo = document.querySelector('.newtodo');

}

View.prototype.onNewToDo = function (callback) {
	var self = this
	this.$newTodo.addEventListener('change', function() {
		callback(self.$newTodo.value);
		self.$newTodo.value = '';
	});

}


View.prototype.onItemToggle = function(callback) {
	var self = this;
	window.$delegate(self.$todolist, ".toggle", 'click', function() {
		callback({id: self._itemId(this), done: this.checked});
	});
}

View.prototype.onItemRemove = function(callback) {
	var self = this;
	window.$delegate(self.$todolist, ".destroy", 'click', function() {
		callback({id: self._itemId(this)});
	});	
}

View.prototype._itemId = function(element) {
	var li = element.parentNode.parentNode;
	return parseInt(li.dataset.id, 10);
}

View.prototype.showAll = function(data) {
	this.$todolist.innerHTML = this._template.fillTemplate(data);
}


window.app = window.app || {};
window.app.View = View;

})(window);
