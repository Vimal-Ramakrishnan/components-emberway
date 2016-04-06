import Ember from 'ember';

var data = [
	{
		id:1,
		text:"Feature Request",
		items:[
			{
				id:1021,
				text:"Hardware Update",
				items:[
					{
						id:"1.1.1",
						text:"Ram Update",
					},
					{
						id:"1.1.2",
						text:"Monitor Update",
					},
					{
						id:"1.1.3",
						text:"Graphics Update",
					}
				]
			},
			{
				id:2221,
				text:"Facility Update",
				items:[
					{
						id:"1.2.1",
						text:"Employee Engagement",
					},
					{
						id:"1.2.2",
						text:"Cafeteria",
					},
					{
						id:"1.2.3",
						text:"Cab Facitlity",
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
				text:"Internal Website",
				items:[
					{
						id:"2.1.1",
						text:"Content",
					},
					{
						id:"2.1.2",
						text:"Usecase",
					},
					{
						id:"2.1.3",
						text:"User Experience",
					},
					{
						id:"2.1.23",
						text:"New feature",
					}
				]
			},
			{
				id:2123,
				text:"Product Website",
				items:[
					{
						id:"2.2.1",
						text:"Payment",
					},
					{
						id:"2.2.2",
						text:"UI issues",
					},
					{
						id:"2.2.3",
						text:"Feature update",
					},
					{
						id:"2.2.32",
						text:"Performance",
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
