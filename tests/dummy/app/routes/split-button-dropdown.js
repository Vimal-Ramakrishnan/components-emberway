import Ember from 'ember';
import toggleButton from 'ember-bootstrap/components/bs-dropdown-button';

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
			console.log(selectionValue);
			$('#fd_callbackvalue').html(selectionValue);
		},
	},
	model() {
		console.log("check this",myObj);
		return myObj;
	}
});