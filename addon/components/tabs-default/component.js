import Ember from 'ember';
import layout from './template';

var comp = Ember.Component.extend({
	layout,
    options:Ember.computed(function(){
        return $.extend({},{
        	ul_class:"nav nav-tabs"   
        },this.opts);
    })
        
});
comp.reopenClass({
   positionalParams: ['dats', 'opts']
});
export default comp;