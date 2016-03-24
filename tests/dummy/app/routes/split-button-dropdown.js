import Ember from 'ember';


var myObj = [
		{
			list_key:"sample_1",
			list_value:"Create One"
		},
		{
			list_key:"sample_2",
			list_value:"Create Two"
		},
];

export default Ember.Route.extend({
	actions: {
		doSubmitAction: function(selectionValue) {
			$('#fd_callbackvalue').html(selectionValue);
		},
	},
	model() {
		return myObj;
	}
});