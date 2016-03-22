import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  files: Ember.computed({
    get () {
      return Ember.A();
    }
  }),
  error: null,
  length: null,
  multiple: true,
  upload: false,
  allowSize: 15 * 1024 * 1024,
  progress: 0,
  allowSizeError: 'Maximum file upload size limit reached, File cannot be uploaded',
  acceptFileTypesError:'Not an accepted file type',
  acceptFileTypes: /^(image|application|text)\/(gif|jpe?g|png|pdf|csv|html|zip|plain|calendar|(.*)excel|(.*)document|(.*)sheet)$/i,

  actions:{
    onFileUploadAdd: function(data){
      var $this = this;
      data.forEach(function(x){
      var fileSize = (x.size / 1024);

      if(fileSize < 1024){
        fileSize = (Math.round(fileSize * 100) / 100) + ' KB';
      }else{

        fileSize = (Math.round((fileSize / 1024) * 100) / 100) + ' MB';
      }
      x.fileSize = fileSize;
      });
      $this.get('files').pushObject(...data);
      $this.sendAction('allFiles', $this.get('files'));

    },

    removeFile: function(data){
      let _self = this;
      _self.get('files').removeObject(data);
      if(_self.get('upload')){
        Ember.$.ajax({
        url: _self.get('url') + _self.get('name'),
        type: "DELETE"
        });
      }
    },

    error: function(message){
      this.set('error', message);
    },

    removeError: function(){
      this.set('error', null);
    }

  }
});
