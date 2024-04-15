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