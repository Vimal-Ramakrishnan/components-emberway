import Ember from 'ember';

var data = [
	{
		id:1,
		text:"Feature Request",
		items:[
			{
				id:1021,
				text:"1.1",
				items:[
					{
						id:"1.1.1",
						text:"value_1.1.1",
					},
					{
						id:"1.1.2",
						text:"value_1.1.2",
					},
					{
						id:"1.1.3",
						text:"value_1.1.3",
					}
				]
			},
			{
				id:2221,
				text:"1.2",
				items:[
					{
						id:"1.2.1",
						text:"value_1.2.1",
					},
					{
						id:"1.2.2",
						text:"value_1.2.2",
					},
					{
						id:"1.2.3",
						text:"value_1.2.3",
					}

				]
			}
		]
	},
	{
		id:2121,
		text:"Website Review",
		items:[
			{
				id:121,
				text:"2.1",
				items:[
					{
						id:"2.1.1",
						text:"value_2.1.1",
					},
					{
						id:"2.1.2",
						text:"value_2.1.2",
					},
					{
						id:"2.1.3",
						text:"value_2.1.3",
					}
				]
			},
			{
				id:2123,
				text:"2.2",
				items:[
					{
						id:"2.2.1",
						text:"value_2.2.1",
					},
					{
						id:"2.2.2",
						text:"value_2.2.2",
					},
					{
						id:"2.2.3",
						text:"value_2.2.3",
					}

				]
			}
		]
	}
];
var ticketModel = {
	category:null,
	subcategory:null,
	item:null,
	category1:null,
	subcategory1:null,
	item1:null,
	componentData:data
};
export default Ember.Route.extend({
	model() {
		return ticketModel;
	},
});
