import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  zeroIndexRemoval:1,
	internalStorage:[],
	com_Wrapper : null,
	didInsertElement: function() {
		this._super(...arguments);
		var _self = this;
		this.internalStorage = [];
		this.zeroIndexRemoval=1,
		this.com_Wrapper = $(this.element);
		this.setTextBoxDynamicWidth();
		this.com_Wrapper.on("click", "div.destroyme", function(){
		    var parentElement = $(this).parents('.com_tag_wrapper');
		    _self.removeElement(parentElement);
		});
	},
	keyUp: function(e) {
		var key = e.which || e.keyCode ;
		if(key === 188) {
			this.makeItTag("comma");
		}
		if(key === 8) {
			this.removeLastChild();
		}
	},
	actions: {
		doEnter: function() {
			this.makeItTag("enter");
		},
		removeMyself: function() {
			console.log("check this");
		}
	},
	makeItTag: function(fromReference) {
		var inputText = this.get("search");
		inputText = fromReference === "comma" ? inputText.substring(0,inputText.length-1) : inputText;
		if(inputText.length>0) {
			this.com_Wrapper.find('.input_tager').css("width","auto");
			var tagHtml = "<div class='com_tag_wrapper'><div class='destroyme'>x</div><div class='tag_input'>"+inputText+"</div></div>";
			this.com_Wrapper.find('.input_tager').before($(tagHtml));
			this.makeItSearhEmpty();
			this.pushTag(inputText);
			this.setTextBoxDynamicWidth();
		}
	},
	makeItSearhEmpty: function() {
		this.set("search","");
	},
	removeLastChild: function() {
		var _self = this;
		var inputText_length = $(this.com_Wrapper.find('.input_tager')).val().length;
		//var inputText_length = this.get("search").length;
		//var childLength = $('.input_tags_holder .com_tag_wrapper').length;
		var childLength = this.com_Wrapper.find('.input_tags_holder .com_tag_wrapper').length;
		if(inputText_length === 1) {
			this.zeroIndexRemoval = 1;
		} 
		if(inputText_length===0 && childLength>0 && this.zeroIndexRemoval === 0) {
			//var element = $('.input_tags_holder .com_tag_wrapper').last();
			var element = this.com_Wrapper.find('.input_tags_holder .com_tag_wrapper').last();
			_self.removeElement(element)
		}
		if(inputText_length === 0) {
			this.zeroIndexRemoval = 0; //  allow to remove the last child when backspace in order from 1-0 not by 0-0
		}
	},
	removeElement: function(element) {
		var _self = this;
		element.addClass("scalezero");
		setTimeout(function() {
			element.remove();
			var com_input_box = _self.com_Wrapper.find('.input_tager');

			$(com_input_box).css("width","auto").promise().done(function() {
				_self.setTextBoxDynamicWidth();
			});
			_self.popTag();
		},250);
	},
	pushTag: function(insertItem) {
		this.internalStorage.push(insertItem);
		this.set("returnvalue",this.internalStorage);
	},
	popTag: function() {
		this.internalStorage = [];
		var tagsLength = this.com_Wrapper.find('.com_tag_wrapper').length
		if(tagsLength>0) {
			for(var i=0;i<tagsLength;i++) {
				var inputText = $(this.com_Wrapper.find('.com_tag_wrapper')[i]).find('.tag_input').html();
				this.internalStorage.push(inputText);
			}
		}
		this.set("returnvalue",this.internalStorage);
	},
	setTextBoxDynamicWidth: function() {
		var tag_Holder = this.com_Wrapper.find('.input_tags_holder');
		var tager = this.com_Wrapper.find('.input_tager');
		var parentWidth = $(tag_Holder).outerWidth();
		var textBoxLeft = $(tager).offset().left;
		var newWidth = Math.round(parentWidth-textBoxLeft);
		$(tager).css("width",newWidth+"px");
	},
});
