import Ember from 'ember';
import layout from './template';

const {
  on
} = Ember;

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
  progress: 0,
  errorMessage: null,
  fileUploadUrl: null,
  allowSize: 5 * 1024 * 1024,
  acceptFileTypes: /^(image|text)\/(gif|jpe?g|png)$/,

  actions:{
    onFileUploadAdd: function(data){
      this.set('fileUploadUrl', null);
      this.set('imageIsThere', false);
    },

    onFileUploadSuccess: function(data){
      this.set('imageIsThere', true);
      this.set('fileUploadUrl', data.files[0].url);
      console.log(data.files[0].url);
    },

    previewImage: function(data){
      if( this.get('upload') && this.get('imageIsThere')){
        document.getElementById(this.get('id')).setAttribute('src', this.get('fileUploadUrl'));
        console.log(this.get('fileUploadUrl'));
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
