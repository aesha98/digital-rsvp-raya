const guests = [
	{
		id : '3958dc9e-712f-4377-85e9-fec4b6a6442a',
		name:'Siti Aesha',
		email:'sityasya@gmail.com',
		phone: '018-6675408',
	
	},
	{
		id : '3958dc9e-742f-4377-85e9-fec4b6a6442a',
		name:'Shahida Salleh',
		email:'mohdsallehshahida@gmail.com',
		phone:'012-234542',
	},
]

//RSVP table
const rsvp = [
	{
		guest_id : guests[0].id,
		name:guests[0].name,
		rsvp_status:'attending',
		note :'See you!'
	},
	{
		guest_id : guests[1].id,
		name:guests[1].name,
		rsvp_status:'busy',
		note :'See you!'
	},
];

module.exports = {
	guests,
	rsvp
};