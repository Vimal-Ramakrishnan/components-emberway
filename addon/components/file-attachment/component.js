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
  deleteUrl: null,
  allowSize: 1 * 1024 * 1024,
  uploading: false,
  progress: 0,
  uploadComplete: false,
  uploadFailed: false,
  allowSizeError: 'Maximum file upload size limit reached, File cannot be uploaded',
  acceptFileTypesError:'Not an accepted file type',
  acceptFileTypes: /^(image|application|text)\/(gif|jpe?g|png|pdf|csv|zip|plain|calendar|(.*)excel|(.*)document|(.*)sheet)$/i,

  convertFileSize: function(data){
      data.forEach(file => {
        var fileSize = (file.size / (1024 * 1024));
        if(fileSize < 1){
          fileSize *= 1024;
          fileSize = fileSize.toFixed(2) + ' KB';
        }else{
          fileSize = fileSize.toFixed(2) + ' MB';
        }
        file.fileSize = fileSize;
      });
  },

  actions:{
    onFileUploadAdd: function(data){
      if(!this.get('upload')){
      var $this = this;
      this.convertFileSize(data);
      $this.get('files').pushObject(...data);
      $this.set('error', null);
      console.log('allowsize',this.get('allowSize'));
      }
    },

    onFileUploadSuccess: function(data){
      this.convertFileSize(data.files);
      this.get('files').pushObject(...data.files);
      this.set('deleteUrl', data.files[0].deleteUrl);
      if(this.get('files').length>0){
        this.set('uploadComplete', false);
        this.set('uploadFailed', false);
      }
    },

    onFail: function(data){
      console.log(data);
      this.set('uploadFailed', true);
    },

    removeFile: function(data){
      let _self = this;
      _self.get('files').removeObject(data);
      if(_self.get('upload')){
        Ember.$.ajax({
        url: _self.get('deleteUrl'),
        type: "DELETE"
        });
      }
    },

    error: function(message){
      this.set('error', message);
    },

    removeError: function(){
      this.set('error', null);
    },

    progressBar: function(progress){
      if(this.get('upload') && progress > 0 && progress < 100){
         this.set('uploading', true);
         this.set('progress', progress);
      }
      else{
        this.set('uploading', false);
      }
      if(progress === 100){
        this.set('uploadComplete', true);

      }else{
        this.set('uploadComplete', false);
      }

    }

  }
});
