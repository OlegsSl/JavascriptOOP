(function(window) {
"use strict!";

	function Todo() {
		this.storage = new window.app.Storage();
		this.Model = new window.app.Model(this.storage);
		this.template = new window.app.Template();
		this.template = new window.app.View(this.template);
	}

	window.app.todo = new Todo();

})(window);