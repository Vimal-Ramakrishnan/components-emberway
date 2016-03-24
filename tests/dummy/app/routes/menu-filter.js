import Ember from 'ember';

export default Ember.Route.extend({
	stateFilter:  "All",

	alfaFilter:  "All",

	stateFilterValues:[{label:"Verified",value:"verified"},{label:"Unverified",value:"unverified"},{label:"All",value:"all"},{label:"Deleted",value:"deleted"},{label:"Blocked",value:"blocked"}],

	stateFilerLabel:"Unverified",
        
	model() {
		var resultObj = {};
		resultObj.stateFilterValues = this.stateFilterValues;
		resultObj.stateFilerLabel = this.stateFilerLabel;
		return resultObj;
	},
	actions:{
	    setStateFilter:function(value){
	    	$('#fd_callbackvalue').html(value);
	    }
	}
});