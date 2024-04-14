const {db} =  require('@vercel/postgres');
const {guests, rsvp} = require('../app/lib/placeholder-data.js');

async function seedGuest(client){
	try{

		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

		const createTable = await client.sql`
		CREATE TABLE IF NOT EXISTS guests (
			id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
			name VARCHAR(255) NOT NULL,
			email VARCHAR(255) NOT NULL,
			phone VARCHAR(255) NOT NULL
		);
		`;
		console.log('Created Guest table');

		const insertTable = await Promise.all(
			guests.map(
				(guests) => client.sql`
				INSERT INTO guests (id, name, email, phone)
				VALUES (${guests.id}, ${guests.name}, ${guests.email}, ${guests.phone})
				ON CONFLICT (id) DO NOTHING;
				`,
			),
		);
		console.log(`Seeded ${insertTable.length} guest`);

		return {
			createTable,
			guests: insertTable,
		};
	}
	catch(error){
		console.error('Error seeding Guest: ', error);
		throw error;
	}
}

async function seedRsvp(client){
	try{
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

	const createTable = await client.sql`
	CREATE TABLE IF NOT EXISTS rsvp(
		rsvp_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
		guest_id UUID NOT NULL,
		name VARCHAR(255) NOT NULL,
		rsvp_status VARCHAR(255) NOT NULL,
		note VARCHAR(255) NOT NULL
	);
	`;

	 console.log(`Created "RSVP" table`);

    // Insert data into the "invoices" table
    const insertedRsvp = await Promise.all(
      rsvp.map(
        (rsvp) => client.sql`
        INSERT INTO rsvp (guest_id, name, rsvp_status, note)
        VALUES (${rsvp.guest_id}, ${rsvp.name}, ${rsvp.rsvp_status}, ${rsvp.note})
        ON CONFLICT (rsvp_id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedRsvp.length} rsvp`);

	return{
		createTable,
		rsvp:insertedRsvp
		
	}
	}catch(error){
	console.error('Error seed RSVP: ', error); 
	throw error;
	}
}

/*seed database*/
async function main(){
	const client = await db.connect();

	await seedGuest(client);
	await seedRsvp(client);

	await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});