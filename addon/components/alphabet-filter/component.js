import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
   	layout, 
    alphaFilterValues:["All","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
        "V","W","X","Y","Z"],

    triggerSelect:function(value,event){
        this.$().find("li").removeClass("active");
        this.$().find('#'+value).addClass("active");
        this.sendAction('onselectfilter',value);
        return false;
    },
   didInsertElement: function() {
   	this._super(...arguments);
     	this.$().find('#'+this.selected).addClass("active");
   }  
});
