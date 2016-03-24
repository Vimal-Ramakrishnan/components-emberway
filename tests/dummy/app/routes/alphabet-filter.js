import Ember from 'ember';

export default Ember.Route.extend({
	alfaFilter:  "B",
	actions: {
		setAlfaFilter: function(value) {
			$('#fd_callbackvalue').html(value);
		},
	},
	model() {
		return {alfaFilter:"B"};
	}
});