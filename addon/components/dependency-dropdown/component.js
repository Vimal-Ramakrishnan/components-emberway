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
	},
	loadBelongings: function(dropdown_reference,selection) {
		if(selection.id !== this.clear_reference) {
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
				objSetting === "id" ? this.set("value1",selection.id) : this.set("value1",selection);
				this.set("value2",0);
				this.set("value3",0);
			} else if(reference === "subcategory") {
				objSetting === "id" ? this.set("value2",selection.id) : this.set("value2",selection);
				this.set("value3",0);
			} else {
				objSetting === "id" ? this.set("value3",selection.id) : this.set("value3",selection);
			}
		}
	}
});
