import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  files: Ember.computed({
    get () {
      return Ember.A();
    }
  }),
  imageIsThere : false,
  length: null,
  upload: false,
  id: null,
  url:null,
  vaule: null,
  progress: 0,
  errorMessage: null,
  fileUploadUrl: null,
  allowSize: 5 * 1024 * 1024,
  acceptFileTypes: /^(image|text)\/(gif|jpe?g|png)$/,

  actions:{
    onFileUploadAdd: function(data){
      this.set('fileUploadUrl', null);
      this.set('imageIsThere', false);
      this.set('value', data);
    },

    onFileUploadSuccess: function(data){
      this.set('imageIsThere', true);
      this.set('fileUploadUrl', data.files[0].url);
      this.set('value', data);
    },

    previewImage: function(data){
      if( this.get('upload') && this.get('imageIsThere')){
        document.getElementById(this.get('id')).setAttribute('src', this.get('fileUploadUrl'));
      }else{
       document.getElementById(this.get('id')).setAttribute('src', data);
       this.set('imageIsThere', true);
      }
    },

    error(message){
      this.set('errorMessage', message);
    },

    removeError(){
      this.set('errorMessage', null);
    },

    clearImage(){
      document.getElementById(this.get('id')).setAttribute('src', '');
      this.set('imageIsThere', false);
    }
  }

});
