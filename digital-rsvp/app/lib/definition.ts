export type guests = {
	id : string,
	name: string,
	email:string,
	phone: number,
}

export type rsvp = {
	rsvp_id:string,
	guest_id : number,
	name:string,
	rsvp_status:'attending' | 'busy',
	note :string
}