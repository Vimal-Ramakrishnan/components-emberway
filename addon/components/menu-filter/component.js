import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  triggerSelect:function(value,label){
      this.$().find('#menulink').html(label + ' <span class="caret"></span>');
      this.sendAction('onselectfilter',value);
      return false;
  },
  didInsertElement : function() {
  	this._super(...arguments);
    this.$().find('#menulink').html(this.selected + ' <span class="caret"></span>');
  }
});
