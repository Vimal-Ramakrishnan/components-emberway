import Ember from 'ember';

var comp = Ember.Component.extend({
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

