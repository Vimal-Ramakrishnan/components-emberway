import Ember from 'ember';
import layout from './template';

export default Ember.TextField.extend({
  layout,
  attributeBindings: ['name', 'multiple', 'accepts'],
  classNames: ['btn-upload-file'],
  fileUploadType: 'POST',
  paramName: 'file',
  type: 'file',
  url: '/attachment',
  multiple: null,
  upload: null,
  allowSize: null,
  acceptFileTypes: null,
  allowSizeError: 'Maximum file upload size limit reached, File cannot be uploaded',
  acceptFileTypesError:'Not an accepted file type',
  preview: false,
  previewBase64: null,

  didInsertElement: function(){
    var $this = this;

    this.$().fileupload({
      url: $this.get('url'),
      dataType: 'json',
      type: $this.get('fileUploadType'),
      paramName: this.get('paramName'),
      formData: this.get('formData'),

      fileuploadsubmit: function(e, data) {
        $this.sendAction('fileuploadsubmit', data.files);
      },
      change: function(e, data) {
        var acceptFileTypes = $this.get('acceptFileTypes');
        var filetypeError = $this.get('acceptFileTypesError');

        // file type validation
        if(acceptFileTypes !== null) {
          var notAcceptedTypes = [];
          data.files.forEach(function(file){
            let fileType = file['type'] || '';
            if(!acceptFileTypes.test(fileType)) {
              notAcceptedTypes.push(fileType);
            }
          });
          if(notAcceptedTypes.length > 0){
            $this.sendAction('error', filetypeError);
            return false;
          }
        }

        //file size validation
        if($this.allowSize !== null) {
          var totalSize = 0;
           data.files.forEach(function(e){
            totalSize += e.size;
          });
          if(totalSize > $this.allowSize) {
            $this.sendAction('error', $this.allowSizeError);
            return false;
          }
        }
        $this.sendAction('progressBar', 0);
        $this.sendAction('onFileUploadChange', data.files);
      },

      add: function(e, data) {
        if($this.get('preview') && !$this.get('multiple')) {
          $this.generateFilePreview(data.files);
        }
        $this.sendAction('onFileUploadAdd', data.files);
        if($this.get('upload')){

          data.submit()
          .success(function(result, status, xhr) {
            $this.sendAction('onFileUploadSuccess', result, status, xhr);
          });
        }

      },

      fail: function(e, data) {
        $this.sendAction('onFail', e, data);
      },

      progress: function(e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        Ember.run.next(function() {
          $this.sendAction('progressBar', progress);
        });
      }

    });

  },

  generateFilePreview: function(filelist) {
    var _fileReader = null,
        $this = this;

    if(window.FileReader && filelist[0]) {
      _fileReader = new FileReader();

      _fileReader.onload = function(e) {
        $this.sendAction('previewImage', e.target.result);
      };
      _fileReader.readAsDataURL(filelist[0]);
    }
  }
  });
