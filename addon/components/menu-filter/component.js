import Ember from 'ember';

export default Ember.Component.extend({
        
  triggerSelect:function(value,label){
      this.$().find('#menulink').html(label + ' <span class="caret"></span>');
      this.sendAction('onselectfilter',value);
      return false;
  },
  onInsert: function() {
      this.$().find('#menulink').html(this.selected + ' <span class="caret"></span>');
  }.on('didInsertElement')  
});
