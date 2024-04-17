import { sql } from '@vercel/postgres';
import { guests, rsvp } from './definition';

/*Perform CRUD Operation*/
async function fetchGuest() {
	 try {
    const data = await sql<guests>`
      SELECT
        id,
        name
      FROM guests
      ORDER BY name ASC
    `;

    const guests = data.rows;
    return guests;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all guest.');
  }
}

/*Add new guest into the RSVP List*/
async function AddGuestRSVP({name, rsvp_status}){
try {
  const data = await sql<guests>`
  INSERT INTO 
  `
} catch (error) {
   console.error('Database Error:', error);
   throw new Error('Failed to add new guest into rsvp.');
}

}

/*FETCH & UPDATE latest rsvp*/
async function fetchLatestRSVP() {
	 try {
    const data = await sql<rsvp>`
      SELECT
        id,
        name
      FROM guests
      ORDER BY name ASC
    `;

    const rsvp = data.rows;
    return rsvp;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all rsvp guest.');
  }
}