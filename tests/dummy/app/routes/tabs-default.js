import Ember from 'ember';

export default Ember.Route.extend({
	maintabs:[
	    {label:"Dashboard",toroute:"index", disabled:false },
	    {label:"Tickets",toroute:"index",disabled:false},
	    {label:"Social",toroute:"tabs-default",disabled:false},
	    {label:"Solutions",toroute:"index",disabled:false},
	    {label:"Forums",toroute:"index",disabled:false},
	    {label:"Customers",toroute:"index",disabled:false},
	    {label:"Reports",toroute:"index",disabled:false},
	    {label:"Admin",toroute:"index",disabled:false}
    ],
    maintabs_opts: {
        ul_class:"header-tabs"
    },
    model: function() {
    	var resultObj = {}
    	resultObj.maintabs = this.maintabs;
    	resultObj.maintabs_opts = this.maintabs_opts;
        console.log(resultObj);
    	return resultObj;
    }
});
