import Ember from 'ember';

export default Ember.Route.extend({
	stateFilter:  "All",

	alfaFilter:  "All",

	stateFilterValues:[{label:"Verified",value:"verified"},{label:"Unverified",value:"unverified"},{label:"All",value:"all"},{label:"Deleted",value:"deleted"},{label:"Blocked",value:"blocked"}],

	stateFilerLabel: Ember.computed("stateFilter",function(){
		var array=this.stateFilterValues,len=array.length,filterValue=this.stateFilter,resul=null;
		for(var i=0;i<len;i++){
			if(array[i].value==filterValue) {
				resul=array[i];
				break;
			}
		}
		return resul?resul.label:filterValue;
	}),
	model() {
		var resultObj = {};
		resultObj.stateFilterValues = this.stateFilterValues;
		resultObj.stateFilerLabel = this.stateFilter;
		return resultObj;
	},
	actions:{
	    setStateFilter:function(value){
	    	$('#fd_callbackvalue').html(value);
	    }
	}
});