Router.route ('/', {
	name: 'home',
	action: function () {
		this.render ('mainPage');
	}
});
