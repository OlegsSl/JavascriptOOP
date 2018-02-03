(function(window) {
 "use strict!";

function Template() {
	this.defaultTemplate = 
	 "<li data-id='{{id}}' class='{{done}}'>"
	 "div class='view'>"
	 "<input class='toogle' type='checkbox' {{checked}}>"
	 "<label>{{title}}</label>"
	 "<button class='destroy'></button>"
	 "</div>"
	 "</li>"
}

Template.prototype.fillTemplate = function (todos) {

	var view = "";


	for (var i = 0; i < todos.length; i++) {
		var template = this.defaultTemplate;

		template = template.replace('{{id}}' , todos[i].id);
		template = template.replace('{{title}}' , todos[i].title);
		template = template.replace('{{done}}' , todos[i].done ?  "completed" : "");
		template = template.replace('{{checked}}' , todos[i].done ?   "checked" : "");

		view = view + template;
	}
}

window.app = window.app || {};
window.app.Template = Template;

})(window);