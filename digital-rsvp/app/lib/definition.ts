export type guests = {
	id : string,
	name: string,
}

export type rsvp = {
	rsvp_id:string,
	guest_id : string,
	name:string,
	rsvp_status:'Accepted' | 'Decline',
	date: string
}