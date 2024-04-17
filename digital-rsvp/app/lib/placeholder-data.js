// Guest table
const guests = [
	{
		id : '3958dc9e-712f-4377-85e9-fec4b6a6442a',
		name:'Siti Aesha',
	},
	{
		id : '3958dc9e-742f-4377-85e9-fec4b6a6442a',
		name:'Shahida Salleh',
	},
]

//RSVP table
const rsvp = [
	{
		guest_id : guests[0].id,
		name:guests[0].name,
		rsvp_status:'Accepted',
		date : '2024-04-12'
	},
	{
		guest_id : guests[1].id,
		name:guests[1].name,
		rsvp_status:'Decline',
		date: '2024-04-13'
	},
];

module.exports = {
	guests,
	rsvp
};