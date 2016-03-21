import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		checkthis: function(input) {
			console.log(input);
		}
	}
});