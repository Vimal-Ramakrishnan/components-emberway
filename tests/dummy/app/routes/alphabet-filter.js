import Ember from 'ember';

export default Ember.Route.extend({
	alfaFilter:  "All",
	actions: {
		setAlfaFilter: function(value) {
			$('#fd_callbackvalue').html(value);
		},
	},
	model() {
		return this.alfaFilter;
	}
});