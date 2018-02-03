(function(window) {
 "use strict!";

function Controller(model , view) {
	this.model = model;
	this.view = view;
}

window.app = window.app || {};
window.app.Controller = Controller;

})(window);