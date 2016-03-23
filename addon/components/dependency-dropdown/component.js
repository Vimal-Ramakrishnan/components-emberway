import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  	layout,
  	categoryDD_Reference:"category",
	subcategory_Reference:"subcategory",
	returnType: null,
	clear_reference: 0,
	
	init: function() {
		this._super(...arguments);
		this.set("returnType",this.get("returnvalue"));
		//this.pushDummyAtZero();
	},
	pushDummyAtZero: function() {
		var dummyObj = {id:0,text:"..."};
		var com_obj = this.get("dependencyList");
		var resultArray = com_obj.unshift(dummyObj);
		var com_obj_length = com_obj.length;
		for(var i=1;i<com_obj_length;i++) {
			if(typeof com_obj[i].items != "undefined") {
				com_obj[i].items.unshift(dummyObj);
				var finalLoopLength = com_obj[i].items.length;
				for(var j=1;j<finalLoopLength;j++) {
					if(typeof com_obj[i].items[j].items != "undefined") {
						com_obj[i].items[j].items.unshift(dummyObj);
					}
				}
			}
		}
		this.set("dependencyList",com_obj);
	},
	loadBelongings: function(dropdown_reference,selection) {
		if(selection !== null) {
			if(dropdown_reference === this.categoryDD_Reference) {
				if(typeof selection.items !== "undefined") {
					selection = selection.items;
					this.set("subCategory_Show_Hide",true);
					this.set("subDropDown_DataBinding",selection);
					this.set("itemCategory_Show_Hide",false);
					this.set("value2Data",null); // This will make sub category dropdown to empty state 

				}
			} else if(dropdown_reference === this.subcategory_Reference) {
				if(typeof selection.items !== "undefined") {
					selection = selection.items;
					this.set("itemCategory_Show_Hide",true);
					this.set("itemDropDown_DataBinding",selection);
					this.set("value3Data",null); // This will make item dropdown to empty state
				}
			}		
		} else {
			if(dropdown_reference === this.subcategory_Reference) {
				this.set("itemCategory_Show_Hide",false);
			} else if(dropdown_reference == this.categoryDD_Reference) {
				this.set("subCategory_Show_Hide",false);
				this.set("itemCategory_Show_Hide",false);
			}
		}
	},
	actions: {
		dd_onTrigger: function(selection,context) {
			var reference = context.dd_reference;
			var currentObj = selection;
			this.loadBelongings(reference,currentObj);
			var objSetting = this.get("returnType");

			if(reference === "category"){
				if(selection !== null) {
					objSetting === "id" ? this.set("value1",selection.id) : this.set("value1",selection);
					this.set("value2",null);
					this.set("value3",null);
				} else {
					this.set("value1",null);
					this.set("value2",null);
					this.set("value3",null);
				}
			} else if(reference === "subcategory") {
				if(selection !== null) {
					objSetting === "id" ? this.set("value2",selection.id) : this.set("value2",selection);
					this.set("value3",null);
				} else {
					this.set("value2",null);
					this.set("value3",null);
				}
			} else {
				if(selection !== null) {
					objSetting === "id" ? this.set("value3",selection.id) : this.set("value3",selection);
				} 
			}
		}
	}
});
