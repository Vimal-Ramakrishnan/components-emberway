import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  files: Ember.computed({
    get () {
      return Ember.A();
    }
  }),
  progress: false,
  image : null,
  length: null,
  width: 250,
  height: 250,
  multiple: false,
  errorMessage: null,
  allowSize: 5 * 1024 * 1024,
  acceptFileTypes: /^(image|text)\/(gif|jpe?g|png)$/,

  actions:{
    onFileUploadAdd(data){
      this.get('files').pushObject(...data);
    },
    previewImage(data){
      this.set('image', data);
    },
    error(message){
      this.set('errorMessage', message);
    },
    removeError(){
      this.set('errorMessage', null);
    }
  }

});
